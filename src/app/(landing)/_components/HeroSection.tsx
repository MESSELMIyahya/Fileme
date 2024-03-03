import { Button } from "@/components/ui/button";
import {HiChevronRight} from 'react-icons/hi'




function HeroSection (){


    return (<section className="w-full flex justify-center pb-16 pt-16 lg:pt-28">
        
        <div className=" flex flex-col items-center text-center">

            <h2 className="w-4/5  lg:text-6xl text-5xl leading-[1.10] font-bold text-secondary-foreground mb-6">
            Secure <span className="text-primary">File Storage </span>
            Wasn't Easy Like This
            </h2>

            <p className="w-2/3 text-base lg:text-lg text-accent-foreground/90 mb-10">
                Upload and Download your files like your images ,videos and work content easily without any effort just with FileMe       
            </p>

            <div className="w-full flex justify-center gap-3">
                <Button  className="rounded-full ">Start Free</Button>
                <Button  variant="ghost" className="group rounded-full flex items-center gap-2">Learn more <HiChevronRight className="w-5 h-5 transition-all group-hover:text-primary group-hover:translate-x-1 "/> </Button>
            </div>

        </div>
    
    </section>)
}



export default HeroSection ;