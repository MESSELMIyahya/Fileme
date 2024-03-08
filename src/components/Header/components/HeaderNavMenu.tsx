"use client"

import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";


interface Props {

}


function HeaderNavMenu({ }: Props) {
    const [navbarToggle,setNavbarToggle] = useState(false)

    useEffect(()=>{

        if(navbarToggle){
            window.document.body.classList.add('no-scrollbar');
        }else{
            window.document.body.classList.remove('no-scrollbar');
        }

    },[navbarToggle])

    return (<nav className="flex gap-4 items-center">

        <div className={cn('md:gap-8 gap-4 md:items-center md:w-auto md:h-auto md:relative absolute w-full h-[100vh] ',navbarToggle ? "flex flex-col items-center p-12 md:p-0 md:flex-row  top-full left-0 z-40 bg-card/20  backdrop-blur-sm  md:backdrop-blur-none ":"md:flex hidden")}>

            <div className="md:flex hidden items-center gap-4">
                <Link href='/'        className="text-3xl text-foreground/80 transition-colors hover:text-primary">Home</Link>
                <Link href='/pricing' className="text-3xl text-foreground/80 transition-colors hover:text-primary">Pricing</Link>
                <Link href='/'        className="text-3xl text-foreground/80 transition-colors hover:text-primary">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="outline" className="rounded-full">Sign In</Button>
                <Button className="rounded-full">Start Free</Button>
            </div>

        </div>

        <Button onClick={()=>setNavbarToggle(e=>!e)} size='icon' variant='outline' className="md:hidden flex">
            <HiMenu className="text-xl" />
        </Button>

    </nav>)
}


export default HeaderNavMenu;