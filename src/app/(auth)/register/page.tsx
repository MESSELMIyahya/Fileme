'use client';
import LoaderIcon from "@/components/LoaderIcon";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";




function RegisterPage() {

    const [err,setErr] = useState('');
    const [isLoading,setIsLoading] = useState(false);




    return (<section className="container flex gap-8 justify-center pb-16 pt-16 lg:pt-18">

        <Card className="w-[30em]">

            <CardHeader>

                <CardTitle className="">Create an account</CardTitle>
                <CardDescription>Enter your information below to create a new account or continue with</CardDescription>

            </CardHeader>

            <CardContent className="flex justify-evenly">


                <Button variant='outline' disabled={isLoading} className="w-[10em] font-semibold  gap-1"> <RiGithubFill className="w-5 h-5" /> Github</Button>
                <Button variant='outline' disabled={isLoading} className="w-[10em] font-semibold  gap-1"> <RiGoogleFill className="w-5 h-5" /> Google</Button>

            </CardContent>

            <CardContent className="w-full flex items-center gap-4">
                <div className="w-3/4 h-px bg-border" />
                <p className="text-muted-foreground text-xs font-semibold text-nowrap">OR CONTINUE WITH</p>
                <div className="w-3/4 h-px bg-border" />
            </CardContent>


            <form  onSubmit={(e)=>{
                e.preventDefault()
                setErr('The password or the email is wrong');
                
            }}>

                <CardContent className="w-full flex flex-col gap-4">
                    <div className="w-full flex gap-4">

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="firstname">
                        First Name
                        </Label>
                        <Input  disabled={isLoading} id="First Name" className="w-full" placeholder="John" />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="lastname">
                        Last Name
                        </Label>
                        <Input  disabled={isLoading} id="name" className="w-full" placeholder="Doh" />
                    </div>
                    
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="email">
                            Email
                        </Label>
                        <Input  disabled={isLoading} id="name" className="w-full" type="email" placeholder="example@gmail.com" />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="password">
                            Password
                        </Label>
                        <Input disabled={isLoading} id="password" type="password" className="w-full " placeholder="Your password" />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="" htmlFor="password">
                            Confirm Password
                        </Label>
                        <Input disabled={isLoading} id="password" type="password" className="w-full " placeholder="Your password" />
                    </div>

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
                            <LoaderIcon/>
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