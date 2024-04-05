'use client';
import LoaderIcon from "@/components/LoaderIcon";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from 'next-auth/react'
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { RiGoogleFill } from "react-icons/ri";
import { z } from "zod";
import { useRouter } from "next/navigation";




// login schema 

const LoginSchema = z.object({
    email: z.string().email('email is not valid'),
    password: z.string().min(8, 'The password should be more then 8 characters')
})




type LoginFormType = z.infer<typeof LoginSchema>



function SignInPage() {
    const { register, formState: { errors }, handleSubmit } = useForm<LoginFormType>({
        resolver: zodResolver(LoginSchema)
    })

    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {replace,refresh} = useRouter()


    const HandleLogin: SubmitHandler<LoginFormType> = async (data) => {
        setErr('');
        setIsLoading(true);
        try {
            // login user after creating the account
            const ra = await signIn("credentials", {
                password: data.password,
                email: data.email,
                redirect: false
            });

            if (ra?.error) {
                setErr('Email/password is wrong,try again or create account');
                setIsLoading(false);
                return;
            }

            if (ra?.ok) {
                replace('/');
                refresh();
                setIsLoading(false);
                return;
            }
        } catch (err) {
            setErr('somethings went wrong ,Try again');
            console.log(err);
        }
    }




    return (<section className="container flex gap-8 justify-center pb-16 pt-16 lg:pt-18">

        <Card className="w-[24em]">

            <CardHeader>

                <CardTitle className="">Welcome back to FileME</CardTitle>
                <CardDescription>Enter your email below to login or continue with</CardDescription>

            </CardHeader>

            <CardContent className="flex justify-evenly">
                <Button onClick={() => signIn('google')} variant='outline' disabled={isLoading} className="w-full font-semibold  gap-1"><RiGoogleFill className="w-5 h-5" /> Google</Button>
            </CardContent>

            <CardContent className="w-full flex items-center gap-4">
                <div className="w-3/4 h-px bg-border" />
                <p className="text-muted-foreground text-xs font-semibold text-nowrap">OR CONTINUE WITH</p>
                <div className="w-3/4 h-px bg-border" />
            </CardContent>


            <form onSubmit={handleSubmit(HandleLogin)}>

                <CardContent className="w-full flex flex-col gap-4">

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="email">
                            Email
                        </Label>
                        <Input {...register('email', { required: true })} disabled={isLoading} id="email" className="w-full" type="email" placeholder="example@gmail.com" />
                    </div>

                    {
                        errors.email ?
                            <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.email.message}</div>
                            : null
                    }

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="password">
                            Password
                        </Label>
                        <Input {...register('password', { required: true })} disabled={isLoading} id="password" type="password" className="w-full " placeholder="Your password" />
                    </div>

                    {
                        errors.password ?
                            <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.password.message}</div>
                            : null
                    }

                    {
                        err ?
                            <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{err}</div>
                            : null
                    }

                </CardContent>

                <CardContent>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {
                            isLoading ?
                                <LoaderIcon />
                                : "Login"
                        }
                    </Button>
                </CardContent>

            </form>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground text-sm">Don't have an account? <Link href='/' className="hover:text-primary">Register</Link></p>
            </CardFooter>

        </Card>


    </section>)
}




export default SignInPage;