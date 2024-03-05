import { Button } from "@/components/ui/button";
import {HiChevronRight} from 'react-icons/hi'




function HeroSection (){


    return (<section className="container  relative flex justify-center pb-20 pt-16 lg:pt-32">

            <div style={{
                backgroundImage:"linear-gradient(89.67deg, rgba(89, 150, 255, 0.2) 2.77%, rgba(12, 91, 228, 0.3) 55.21%, rgba(255, 246, 162, 0.3) 105.51%)"
            }} className="size-[24em] sm:size-[26em] lg:size-[40em] -z-[1] absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[130px]">

            </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">

            <h2 className="lg:w-4/5 w-full lg:text-6xl text-3xl leading-[1.10] font-bold text-secondary-foreground mb-6">
            Secure <span className="text-primary">File Storage </span>
            Wasn't Easy Like This
            </h2>

            <p className="lg:w-2/3 w-full text-sm lg:text-lg text-accent-foreground/90 mb-10">
                Upload and Download your files like your images ,videos and work content easily without any effort just with FileMe       
            </p>

            <div className="w-full flex justify-center gap-3">
                <Button  className="rounded-full ">Start Free</Button>
                <Button  variant="ghost" className="group rounded-full flex items-center gap-2 hover:bg-background/20">Learn more <HiChevronRight className="w-5 h-5 transition-all group-hover:text-primary group-hover:translate-x-1 "/> </Button>
            </div>

        </div>
    
    </section>)
}



export default HeroSection ;