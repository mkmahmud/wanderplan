

// components/withAuth.js
import { useEffect, useState } from 'react'; 
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: any) => {

    const router = useRouter();

    const WithAuth = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [user, setUser] = useState(null); // Replace with your actual user state/check

        useEffect(() => {
            // Simulate fetching user data or checking authentication status
            const checkAuth = async () => {


                const res = await fetch('/api/auth/me'); // Protected API that validates token

                if (res.ok) {
                    router.replace('/dashboard'); // 🔁 redirect if token is valid
                }
                setLoading(false);
            };
            checkAuth();


        }, []);

        if (loading) {
            return <div>Loading...</div>; // Or a loading spinner
        }

        if (!user) {
            router.push('/auth/login'); // Redirect to your login page
            return null;
        }

        return <WrappedComponent {...props} />;
    };
    return WithAuth;
};

export default withAuth;