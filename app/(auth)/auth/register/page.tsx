"use client";

import InputGroup from "@/app/ui/components/auth/inputgroup";
import SideContent from "@/app/ui/components/auth/sideContent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
// @ts-ignore
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useRegisterUserMutation } from "@/app/redux/api/auth/authApi";
import { useAuth } from "@/app/hooks/useAuth";

interface IFormInput {
    email: string;
    password: string;
    fullName: string;
    userName: string;
}

export default function Page() {

    // Redux

    const [registerUser, { isLoading }] = useRegisterUserMutation()

    // Set Token Into hook
    const { isLoggedIn } = useAuth();


    const router = useRouter();

    // Redirect if user is already logged in
    useEffect(() => {
        if (isLoggedIn) router.replace("/dashboard");
    }, [isLoggedIn]);


    const [formStatus, setFormStatus] = React.useState({
        isSubmitting: false,
        error: null as string | null,
        success: null as string | null,
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({
        mode: "onBlur", // Validate on blur for a smoother experience
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setFormStatus({ isSubmitting: true, error: null, success: null });


        try {
            // RTK Query mutation
            const result = await registerUser(data).unwrap();

            // result is already your API response
            setFormStatus({
                isSubmitting: false,
                error: null,
                success: result.message || 'Registration successful!',
            });

            // Save user to localStorage (optional: token if your API returns one)
            localStorage.setItem('user', JSON.stringify(result.data.user));
            // localStorage.setItem('token', result.data.token);

            // Redirect after 1 second
            setTimeout(() => {
                router.push('/auth/login');
            }, 1000);

        } catch (error: any) {
            console.error('Registration Error:', error);
            setFormStatus({
                isSubmitting: false,
                error: error.data?.message || error.message || 'An unexpected error occurred.',
                success: null,
            });
        }
    };

    return (
        <div className="h-screen items-center flex justify-center">
            <div className="w-full max-w-md flex justify-center md:max-w-full p-4">
                <div className="w-full max-w-md">
                    <Link href={'/'} className="logo flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <h2 className="text-4xl font-bold text-primary-dark">WanderPlan</h2>
                    </Link>
                    <h1 className="font-bold text-lg mt-10">Sign Up</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {formStatus.error && (
                                <p className="text-center my-4 text-red-500">{formStatus.error}</p>
                            )}
                            {formStatus.success && (
                                <p className="text-center my-4 text-green-500">{formStatus.success}</p>
                            )}

                            <InputGroup name='fullName' label="Full Name" type="text" placeholder="Mahmudul Hasan" register={register} error={errors.fullName} />

                            <InputGroup name='userName' label="User Name" type="text" placeholder="mahmudulhasan" register={register} error={errors.userName} />

                            <InputGroup name='email' label="Email" type="email" placeholder="example1@mail.com" register={register} error={errors.email} />
                            <InputGroup name='password' label="Password" type="password" placeholder="#25%mKe#@1dse68" register={register} error={errors.password} />

                            <button
                                type="submit"
                                className={`flex items-center justify-center space-x-2 mt-10 rounded-full py-4 w-full font-bold transition-all
                                    ${formStatus.isSubmitting
                                        ? 'cursor-not-allowed text-neutral-400 bg-neutral-300'
                                        : 'cursor-pointer bg-primary text-white hover:bg-primary-dark'
                                    }`}
                                disabled={formStatus.isSubmitting}
                            >
                                {formStatus.isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"></div>
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    <span>Sign Up</span>
                                )}
                            </button>
                        </form>
                    </div>
                    {/* Or */}
                    <div className="mt-10 flex items-center">
                        <hr className="flex-1 border-neutral-300" />
                        <span className="mx-4 text-neutral-500">Or</span>
                        <hr className="flex-1 border-neutral-300" />
                    </div>
                    {/* Social Log in */}
                    <div className="mt-10">
                        <button className="cursor-pointer rounded-full py-4 w-full font-semibold text-black flex items-center justify-center space-x-4 bg-neutral-100 hover:bg-neutral-200 transition-all border-2">
                            <Image src='/google.png' alt='Login with Google' height={30} width={30} />
                            <span>Continue With Google</span>
                        </button>
                    </div>
                    {/* Already Account */}
                    <div>
                        <p className="mt-10 text-center text-neutral-500">Already have an account? <Link href={'/auth/login'} className="text-primary font-bold">Log In</Link></p>
                    </div>
                </div>
            </div>
            <SideContent />
        </div>
    );
}