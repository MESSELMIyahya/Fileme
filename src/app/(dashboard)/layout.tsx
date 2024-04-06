

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import SideBar from "./_components/Sidebar";
import NavBar from "./_components/Navbar";

interface Props {
    children:React.ReactNode   
}

export default async function DashboardRootLayout ({ children }:Readonly<Props>){
    // const au = await getServerSession();

    // if(!au?.user){
    //     // if he's not authenticated it returns him to the home page 
    //     return redirect('/')
    // }

    return (<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* sidebar */}

        <SideBar selected="home" />

        {/* page */}

        <div className="flex flex-col">
            <NavBar/>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>
        </div>
    
    </div>)
}