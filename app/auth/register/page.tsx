"use client";
import InputGroup from "@/app/ui/components/auth/inputgroup";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
    email: string
    password: string
    fullName: string
}


export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => console.log(data)


    return (
        <div>
            {/* Mobile Device */}
            <div className="max-w-md p-4">
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
                <h1 className="font-bold text-lg mt-10">Sign Up</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <InputGroup name='email' label="E-mail" type="email" placeholder="example1@mail.com" register={register}
                            error={errors.email} />
                        {/* Pasword */}
                        <InputGroup name='fullName' label="fullName" type="text" placeholder="Mahmudul Hasan" register={register}
                            error={errors.fullName} />
                        {/* Pasword */}
                        <InputGroup name='password' label="Password" type="password" placeholder="#25%mKe#@1dse68" register={register}
                            error={errors.password} />

                        <input type="submit" name="submit" id="submit" value={"Sign Up"} className="mt-10 cursor-pointer bg-primary rounded-full py-4 w-full font-bold text-white" />
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
                    <p className="mt-10 text-center text-neutral-500">Already have an account? <Link href={'/auth/login'} className="text-primary font-bold">Log In</Link></p>
                </div>
            </div>
        </div>
    )
}