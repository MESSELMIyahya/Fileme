'use client';

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";


// this hook will take the path and generate and return the breadcrumbs 

interface ReturnedType {
    steps: {
        name: string;
        url: string;
    }[]
};

type useBreadcrumbsType = (path:string[]) => ReturnedType;


const useBreadcrumbs : useBreadcrumbsType = (path)=>{
    const params = useParams<{paths:string[]}>();
    const pathname = usePathname()
    const [pathStep,setPathStep] = useState<string[]>(()=>{ 
     const [_,...n] = path ;
     return n
    });
    const [steps,setSteps] = useState<{name:string,url:string}[]>([]);

    // check when path gets updated 

    useEffect(()=>{
        if(params.paths){
            setPathStep(()=>{
                const [a,...n] = params.paths ;
                return n
            })
        }
    },[params]);


    // generate the steps 
    
    useEffect(()=>{
        // first see if route contains 'folder'
        if(pathStep[0] == 'folder'){
            setSteps(()=>{
            const [n,...p] = pathStep ;
            return [...p.map(e=>({url:pathname,name:e}))]
        })
        }else {
            setSteps([]);
        }

    },[pathStep])


    return {steps}
} ;



export default useBreadcrumbs;

