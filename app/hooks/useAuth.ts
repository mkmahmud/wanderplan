// hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    fullName: string;
    userName: string;
    email: string;
}

interface AuthHook {
    user: User | null;
    accessToken: string | null;
    isLoggedIn: boolean;
    login: (data: { user: User; accessToken: string, refreshToken: string }) => void;
    logout: () => void;
}

export const useAuth = (): AuthHook => {
    const router = useRouter();

    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false); // to prevent flicker

    const isLoggedIn = !!accessToken;

    useEffect(() => {
        const token = Cookies.get("accessToken");
        const storedUser = localStorage.getItem("user");

        if (token) setAccessToken(token);
        if (storedUser) setUser(JSON.parse(storedUser));

        setIsReady(true); // done initializing
    }, []);

    const login = (data: { user: User; accessToken: string, refreshToken: string }) => {
        setUser(data.user);
        setAccessToken(data.accessToken);

        localStorage.setItem("user", JSON.stringify(data.user));
        Cookies.set("accessToken", data.accessToken, { secure: true, sameSite: "strict" });
        Cookies.set("refreshToken", data.refreshToken, { secure: true, sameSite: "strict" });
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);

        localStorage.removeItem("user");
        Cookies.remove("accessToken");

        router.push("/auth/login");
    };

    return { user, accessToken, isLoggedIn: isReady && isLoggedIn, login, logout };
};
