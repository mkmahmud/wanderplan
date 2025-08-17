"use client"

import InputGroup from "@/app/ui/components/auth/inputgroup";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { useForm, SubmitHandler } from "react-hook-form"
import SideContent from "@/app/ui/components/auth/sideContent";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { login } from "@/app/redux/features/userSlice";

interface IFormInput {
    email: string
    password: string
    rememberMe: boolean
}


export default function Page() {

    // Redux 
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();


    const router = useRouter();

    // Redirect if user is already logged in
    useEffect(() => {
        // Check token from cookie
        const checkAuth = async () => {
            const res = await fetch('/api/auth/me'); // Protected API that validates token
            if (res.ok) {
                router.replace('/dashboard'); // 🔁 redirect if token is valid
            }
        };

        checkAuth();
    }, [router]);

    // Form Status
    const [formStatus, setFormStatus] = React.useState({
        isSubmitting: false,
        error: null as string | null,
        success: null as string | null,
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
        setFormStatus({ isSubmitting: true, error: null, success: null });


        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Log In failed.');
            }

            const result = await res.json();
            setFormStatus({
                isSubmitting: false,
                error: null,
                success: result.message || 'Login successful!',
            });

            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', result.token);

            dispatch(login({ id: result.user.id, email: result.user.email }))
            setTimeout(() => {
                router.push('/dashboard');
            }, 1000); // Give user a moment to see the success message

        } catch (error: any) {
            console.error('Registration Error:', error);
            setFormStatus({
                isSubmitting: false,
                error: error.message || 'An unexpected error occurred.',
                success: null,
            });
        }
    }


    return (
        <div className="h-screen items-center flex justify-center">
            {/* Form*/}
            <div className="w-full max-w-md flex justify-center  md:max-w-full p-4 ">
                <div className="max-w-md w-full">
                    <Link href={'/'} className="logo flex items-center  ">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className=" "

                        />
                        <h2 className="text-4xl font-bold text-primary-dark">WanderPlan</h2>
                    </Link>
                    <h1 className="font-bold text-lg mt-10">Sign In</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {formStatus.error && (
                                <p className="text-center my-4 text-red-500">{formStatus.error}</p>
                            )}
                            {formStatus.success && (
                                <p className="text-center my-4 text-green-500">{formStatus.success}</p>
                            )}
                            {/* Email */}
                            <InputGroup name='email' label="E-mail" type="email" placeholder="example1@mail.com" register={register}
                                error={errors.email} />
                            {/* Pasword */}
                            <InputGroup name='password' label="Password" type="password" placeholder="#25%mKe#@1dse68" register={register}
                                error={errors.password} />


                            <div className="mt-10 flex items-center justify-between">
                                <div>
                                    <label className="inline-flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox text-primary  rounded-lg h-6 w-6" name="rememberMe" {...register("rememberMe")} />
                                        <span className="text-neutral-700">Remember Me! </span>
                                    </label>


                                </div>
                                <Link href={'/'} className="underline">Forgot Password!</Link>
                            </div>



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
                                        <span>Logging  in...</span>
                                    </div>
                                ) : (
                                    <span>Log In</span>
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
                        <button className="cursor-pointer  rounded-full py-4 w-full font-semibold text-black flex items-center justify-center space-x-4 bg-neutral-100 hover:bg-neutral-200 transition-all border-2">
                            <Image src='/google.png' alt='Login with Google' height={30} width={30} />
                            <span>Continue With Google </span>
                        </button>
                    </div>
                    {/* Already Account */}
                    <div>
                        <p className="mt-10 text-center text-neutral-500">Don't have an account? <Link href={'/auth/register'} className="text-primary font-bold">Create Now </Link></p>
                    </div>
                </div>
            </div>
            <SideContent />

        </div>
    )
}