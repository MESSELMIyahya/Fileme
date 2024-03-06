import {HiLink, HiOutlineCloudDownload, HiOutlineCollection, HiOutlineFilter, HiOutlineHand, HiOutlineShieldCheck, HiShieldCheck} from 'react-icons/hi'


interface FeatureCardProps  {
    Icon:React.ReactNode
    title:string
    des:string
}

function FeatureCard ({Icon,des,title}:FeatureCardProps) {
    
    return (<div className="group w-[21em] p-4 rounded-3xl flex flex-col gap-2 bg-card border-2 border-border transition hover:shadow-lg hover:border-blue-500">
        
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-primary/20 text-3xl text-primary ">
            {Icon}
        </div>

        <h4 className="text-3xl font-normal text-primary">{title}</h4>

        <p className="text-base text-card-foreground">{des}</p>
    
    </div>)
}


function FeaturesSection (){

    
    return (<section className="container flex flex-col gap-8 justify-center pb-20 pt-16 lg:pt-32">

        <div className="w-full flex flex-col items-center gap-3 mb-8">
            <h3 className="lg:text-3xl text-2xl text-center font-bold uppercase text-foreground">Our Features</h3>
            <p className="lg:text-base text-sm text-center text-card-foreground/90 ">All the features that we provide for you to get the best experience</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 ">

            <FeatureCard des="FileMe provides a secure environment to save your content and work Goodly" title="Security" Icon={<HiOutlineShieldCheck />} />
            <FeatureCard des="Drag and Drop your files easily without wasting time in search for them" title="Drag and Drop" Icon={<HiOutlineHand  />} />
            <FeatureCard des="In FileMe you can download your files easily and fast" title="Download" Icon={<HiOutlineCloudDownload   />} />
            <FeatureCard des="Organize your file and folders and make them easy to find" title="Organizing" Icon={<HiOutlineCollection  />} />
            <FeatureCard des="Shear your files and content with your friends with links just with one click" title="Shearing" Icon={<HiLink  />} />
            <FeatureCard des="Advanced Filtering is now as easy as click on button with FileMe" title="Filtering" Icon={<HiOutlineFilter />} /> 
    
        </div>
    
    </section>)
}



export default FeaturesSection ;