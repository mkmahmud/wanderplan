"use client"

import InputGroup from "@/app/ui/components/auth/inputgroup";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { useForm, SubmitHandler } from "react-hook-form" 
import SideContent from "@/app/ui/components/auth/sideContent";


interface IFormInput {
    email: string
    password: string
    rememberMe: boolean
}


export default function Page() {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => console.log(data)


    return (
        <div className="h-screen items-center flex justify-center">
            {/* Form*/}
            <div className="w-full max-w-md flex justify-center  md:max-w-full p-4 ">
                <div className="max-w-md w-full">
                    <div className="logo flex items-center  ">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className=" "

                        />
                        <h2 className="text-4xl font-bold text-primary-dark">WanderPlan</h2>
                    </div>
                    <h1 className="font-bold text-lg mt-10">Sign In</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
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


                            <input type="submit" name="submit" id="submit" value={"Sign In"} className="mt-10 cursor-pointer bg-primary rounded-full py-4 w-full font-bold text-white" />
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