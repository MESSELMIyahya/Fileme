'use client';
import LoaderIcon from "@/components/LoaderIcon";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import { useForm, SubmitHandler } from 'react-hook-form'
import { RegisterBodyType } from "@/lib/type";
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from "next/navigation";




interface FormDataType extends RegisterBodyType {
    confirmPassword: string;
}


// zod schema here

const FromDataSchema = z.object({
    email:z.string().email('email is not valid'),
    firstName:z.string().min(3,'The firstName should be more then 2 characters'),
    lastName:z.string().min(3,'The lastName should be more then 2 characters'),
    username:z.string().min(5,'The firstName should be more then 4 characters'),
    password:z.string().min(8,'The password should be more then 8 characters'),
    confirmPassword:z.string().min(8,'The password should be more then 8 characters'),
}).refine(e=>e.confirmPassword==e.password,{message:'Passwords do not match',path:['confirmPassword']})



function RegisterPage() {
    const { register, handleSubmit,setError, formState: { errors } } = useForm<FormDataType>({
        resolver:zodResolver(FromDataSchema)
    })
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { replace } = useRouter()


    const HandleRegister: SubmitHandler<FormDataType> = async (data) => {
        setIsLoading(true);
        setErr('');
        try{
            const body : RegisterBodyType = {
                email:data.email,
                firstName:data.firstName,
                lastName:data.lastName,
                password:data.password,
                username:data.username
            }
            await axios.post('/api/auth/register',body);
            replace('/');
        }catch(err:any){
            if(err?.response?.status === 409){
                setError('email',{message:'This email is used before try another or login'})
            }else {
                setErr('somethings went wrong ,Try again');
                console.log(err);
            }
        }
        setIsLoading(false);
    }


    return (<section className="container flex gap-8 justify-center pb-16 pt-16 lg:pt-18">

        <Card className="w-[30em]">

            <CardHeader>

                <CardTitle className="">Create an account</CardTitle>
                <CardDescription>Enter your information below to create a new account or continue with</CardDescription>

            </CardHeader>

            <CardContent className="flex justify-evenly gap-2">


                <Button variant='outline' disabled={isLoading} className="w-1/2 font-semibold  gap-1"> <RiGithubFill className="w-5 h-5" /> Github</Button>
                <Button variant='outline' disabled={isLoading} className="w-1/2 font-semibold  gap-1"> <RiGoogleFill className="w-5 h-5" /> Google</Button>

            </CardContent>

            <CardContent className="w-full flex items-center gap-4">
                <div className="w-3/4 h-px bg-border" />
                <p className="text-muted-foreground text-xs font-semibold text-nowrap">OR CONTINUE WITH</p>
                <div className="w-3/4 h-px bg-border" />
            </CardContent>


            <form onSubmit={handleSubmit(HandleRegister)}>

                <CardContent className="w-full flex flex-col gap-4">
                    <div className="w-full flex items-center gap-4">
                        <div className="flex flex-col gap-2">

                            <div className="w-full flex flex-col gap-2 ">
                                <Label className="" htmlFor="firstname">
                                    First Name
                                </Label>
                                <Input {...register('firstName', { required: true })} disabled={isLoading} id="First Name" className="w-full" placeholder="John" />
                            </div>
                            {
                                errors.firstName ?
                                    <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.firstName.message}</div>
                                    : null
                            }
                        </div>
                        <div className="flex flex-col gap-2">

                            <div className="w-full flex flex-col gap-2">
                                <Label className="" htmlFor="lastname">
                                    Last Name
                                </Label>
                                <Input {...register('lastName', { required: true })} disabled={isLoading} id="name" className="w-full" placeholder="Doh" />
                            </div>
                            {
                                errors.lastName ?
                                    <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.lastName.message}</div>
                                    : null
                            }
                        </div>

                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="username">
                            Username
                        </Label>
                        <Input {...register('username', { required: true })} disabled={isLoading} id="username" className="w-full" placeholder="Ali bor" />
                    </div>

                    {
                        errors.username ?
                            <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.username.message}</div>
                            : null
                    }

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

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="passwordCon">
                            Confirm Password
                        </Label>
                        <Input {...register('confirmPassword', { required: true })} disabled={isLoading} id="passwordCon" type="password" className="w-full " placeholder="Your password" />
                    </div>

                    {
                        errors.confirmPassword ?
                            <div className="w-full rounded-md py-2 px-3 bg-red-500/25 text-xs text-red-600">{errors.confirmPassword.message}</div>
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
                                : "Create An Account"
                        }
                    </Button>
                </CardContent>

            </form>

            <CardFooter className="flex justify-center">
                <p className="text-muted-foreground text-sm">have an account? <Link href='/signin' className="hover:text-primary">Login</Link></p>
            </CardFooter>

        </Card>


    </section>)
}




export default RegisterPage;