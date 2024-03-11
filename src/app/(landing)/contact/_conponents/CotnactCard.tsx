import Link from "next/link";
import { HiOutlineAtSymbol, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { RiInstagramLine, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import ContactForm from "./ContactForm";



interface InfoItemProps {
    title: string;
    des: string;
    Icon: typeof HiOutlineAtSymbol
}

function InfoItem({ des, Icon, title }: InfoItemProps) {

    return (<li className="flex items-center gap-2">
        <div className="w-7 h-8 flex justify-center items-center">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
            <span className="text-xs text-white/60">{title}</span>
            <p className="text-base  leading-5 text-white ">{des}</p>
        </div>
    </li>)
}


interface Props {

    info: {
        email: string;
        phone: string;
        address: string;
    };
    accounts: {
        x: string
        linkedin: string;
        instagram: string;
    };
    title: string;
    des: string;

}


export default function ContactCard({ accounts,des,info,title }:Props) {


    return (<div className="w-full md:w-full xl:w-3/4 flex flex-col gap-4 md:gap-0 md:flex-row justify-between rounded-xl bg-gradient-to-br from-primary to-indigo-600 p-6 md:p-12 ">
        {/* info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">

            {/* title */}
            <div className="">
                <h3 className="text-3xl font-semibold text-primary-foreground mb-2">{title}</h3>
                <p className="text-sm text-secondary/90">{des}</p>
            </div>

            {/* contact info */}
            <ul className="flex flex-col gap-3">
                <InfoItem title="Email" des={info.email} Icon={HiOutlineAtSymbol} />
                <InfoItem title="Phone" des={info.phone} Icon={HiOutlinePhone} />
                <InfoItem title="Address" des={info.address} Icon={HiOutlineLocationMarker} />
            </ul>

            {/* links */}
            <ul className="flex items-center gap-4">
                <li>
                    <Link href={accounts.x}>
                        <RiTwitterXFill className="w-6 h-6 text-white" />
                    </Link>
                </li>
                <li>
                    <Link href={accounts.instagram}>
                        <RiInstagramLine className="w-6 h-6 text-white" />
                    </Link>
                </li>
                <li>
                    <Link href={accounts.linkedin}>
                        <RiLinkedinFill className="w-6 h-6 text-white" />
                    </Link>
                </li>
            </ul>

        </div>

        {/* form */}

        <ContactForm />

    </div>)
}