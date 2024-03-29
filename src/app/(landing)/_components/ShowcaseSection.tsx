'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import TestImage from './../../../../public/showcases/payroll.webp';
import Image from "next/image";

interface  ViewCardProps {
    onClick:()=>void;
    selected?:boolean;
    text:string
}


function ViewCard ({text,selected,onClick}:ViewCardProps){

    return (<button role="tab" type="button" aria-selected='true' onClick={onClick} className={twMerge("w-full lg:w-[15em] p-6 lg:p-4 text-left lg:text-center rounded-xl border transition-colors border-transparent outline-none focus-visible:ring-2 focus-visible:ring-primary",selected?'border-border/20 border bg-background/20 cursor-default pointer-events-none':'bg-background/5 hover:bg-background/10 cursor-pointer')}>
        <h4 className="text-3xl lg:text-2xl font-semibold text-card">{text}</h4>
    </button>)
}



function ShowcaseSection() {
    const [selectedImg,setSelectedImg] = useState<number>(0);

    return (<section className="w-full mb-20 pt-16 lg:pt-20 bg-gradient-to-br from-primary/80 via-blue-500 to-indigo-500">
        <div className="container">

            <div className="w-full flex flex-col items-center gap-4 mb-12">
                <h3 className="lg:text-3xl text-2xl text-center font-bold uppercase text-card">Our Features</h3>
                <p className="lg:text-base text-sm text-center text-secondary ">All the features that we provide for you to get the best experience</p>
            </div>

            <div className="w-full flex flex-col lg:flex-row justify-center gap-4">

                    <ViewCard onClick={()=>setSelectedImg(0)} selected={selectedImg==0} text="Uploading"/>
                    <ViewCard onClick={()=>setSelectedImg(1)} selected={selectedImg==1} text="Shearing"/>
                    <ViewCard onClick={()=>setSelectedImg(2)} selected={selectedImg==2} text="Organizing"/>
                    <ViewCard onClick={()=>setSelectedImg(3)} selected={selectedImg==3} text="Downloading"/>

            </div>

            <div className="w-full flex justify-center mt-6">

                <div className="relative select-none w-full md:w-5/6 h-[13em] md:h-[19em] lg:h-[32em] rounded-t-3xl bg-white overflow-hidden">
                    <Image alt="App Image" src={TestImage.src} width={TestImage.width} height={TestImage.height} className="w-full" />
                    <div className="absolute w-full h-full left-0 top-0 bg-white/10 "></div>
                </div>

            </div>

        </div>
    </section>);
}


export default ShowcaseSection;