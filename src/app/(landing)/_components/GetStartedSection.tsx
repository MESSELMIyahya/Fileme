import { Button } from "@/components/ui/button";




function GetStartedSection (){



    return (<section className="container flex gap-8 justify-center pb-20 pt-16 lg:pt-20">

        <div className="w-full flex flex-col gap-8 items-center py-14 px-8 md:px-12 rounded-3xl bg-gradient-to-tr from-primary via-primary/80 to-blue-600">

            <h4 className="text-white text-center text-xl sm:text-2xl lg:text-3xl font-semibold ">
                Get started new for free and start uploading your content to the safest place   
            </h4>

            <Button variant="secondary" className="rounded-full text-lg" size="lg">Start Free</Button>

        </div>

    </section>);
}


export default GetStartedSection