"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";


interface Props {

}


function HeaderNavMenu({ }: Props) {
    const [navbarToggle,setNavbarToggle] = useState(false)

    useEffect(()=>{
        // remove the scrollbar when the menu is open 
        if(navbarToggle){
            window.document.body.classList.add('no-scrollbar');
        }else{
            window.document.body.classList.remove('no-scrollbar');
        }

        // this will be called whenever the window gets resized
        const resized = () =>{
            if(navbarToggle){
                setNavbarToggle(false)
            }
        }

        window.addEventListener('resize',resized)

        return () =>{
            // remove the event listener
            window.removeEventListener('resize',resized);
        }
    },[navbarToggle])

    return (<nav className="flex gap-4 items-center">

        <div className={cn('md:gap-8 gap-4 md:items-center md:w-auto md:h-auto md:relative absolute w-full h-[100vh] ',navbarToggle ? " flex flex-col items-center p-12 md:p-0 md:flex-row  top-full left-0 z-40 bg-card/20  backdrop-blur-sm  md:backdrop-blur-none ":"md:flex hidden")}>

            <div className="flex md:flex-row flex-col items-center gap-4 mb-8 md:mb-0">
                <Link href='/'        className="text-3xl md:text-lg text-foreground/80 transition-colors hover:text-primary py-2 px-3 bg-card rounded-md w-[7em] text-center md:bg-transparent md:p-0 md:rounded-none md:w-auto">Home</Link>
                <Link href='/pricing' className="text-3xl md:text-lg text-foreground/80 transition-colors hover:text-primary py-2 px-3 bg-card rounded-md w-[7em] text-center md:bg-transparent md:p-0 md:rounded-none md:w-auto">Pricing</Link>
                <Link href='/'        className="text-3xl md:text-lg text-foreground/80 transition-colors hover:text-primary py-2 px-3 bg-card rounded-md w-[7em] text-center md:bg-transparent md:p-0 md:rounded-none md:w-auto">Contact</Link>
            </div>

            <div className="flex md:flex-row w-full md:w-auto  flex-col items-center gap-3">
                <Button variant="outline" className="rounded-full w-full md:w-auto text-lg h-[3em] md:text-base md:h-10 ">Sign In</Button>
                <Button                   className="rounded-full w-full md:w-auto text-lg h-[3em] md:text-base md:h-10 ">Start Free</Button>
            </div>

        </div>

        <Button onClick={()=>setNavbarToggle(e=>!e)} size='icon' variant='outline' className="md:hidden flex">
            <HiMenu className="text-xl" />
        </Button>

    </nav>)
}


export default HeaderNavMenu;