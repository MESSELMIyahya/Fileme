import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HiCheck } from "react-icons/hi";

interface Props {
    title: string;
    des: string;
    price: string|number;
    custom?:boolean;
    pup?: boolean
    features: {
        text: string;
        all: string[]
    }

}

function PriceCard({  custom, des,features,price,pup,title }: Props) {


    return (<div className={cn("flex flex-col h-auto md:h-[48em] gap-5 p-6 rounded-xl bg-primary-foreground  border shadow-sm",pup&&'border-primary shadow-xl',)}>

        <div className="w-full">
            <div className="flex items-center gap-2 pb-2">
                <h5 className="text-2xl text-foreground ">{title}</h5>
                {
                    pup ?
                        <Badge className="relative text-xs">Most Popular</Badge> :
                    null
                }
            </div>
            <p className="text-sm text-card-foreground">{des}</p>
        </div>

        <div className="w-full">
            <Button variant={custom?'outline':'default'} className="w-full rounded-full shadow-sm ">{custom?'Contact Us':'Get Started'}</Button>
        </div>

        <div className="w-full h-[7em]">
            <div className="flex items-end gap-1 pt-4">
                <h5 className="text-5xl font-normal text-foreground ">{custom?'':'$'}{price}</h5>
                {!custom ? <span className="text-sm text-card-foreground/90">/month</span> : ''}
            </div>
        </div>

        <div className="w-full h-px border-b"></div>

        <div className="w-full flex flex-col gap-4">

            <span className="text-sm text-card-foreground/80">
                {features.text}
            </span>

            <ul className="w-full md:flex-1">

                {
                    features.all.map((e,i)=>
                        <li key={i} className="flex flex-col py-2">

                            <div className="flex items-center">

                                <div className="w-7">
                                    <HiCheck className="w-5 h-5 text-primary" />
                                </div>

                                <span className="text-base text-foreground">{e}</span>

                            </div>

                        </li>
                    )
                }


            </ul>

        </div>


    </div>)
}

export default PriceCard;