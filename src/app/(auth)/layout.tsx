




// this layout is just for auth  pages and it's job is to check the auth

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

interface Props {
    children:React.ReactNode   
}

export default async function AuthRootLayout ({ children }:Readonly<Props>){
    const au = await getServerSession();

    if(au?.user){
        // if he's authenticated it returns him to the home page 
        return redirect('/')
    }

    return (<>{children}</>)
}