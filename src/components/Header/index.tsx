import Link from "next/link";
import HeaderNavMenu from "./components/HeaderNavMenu";



export default function Header (){


    return (<header className="container relative flex items-center justify-between  py-4 ">
        
            <div className="">
                    <Link href='/' className="md:text-4xl text-2xl font-bold text-foreground">
                            File
                            <span className="text-primary">Me</span>
                    </Link>
            </div>

            <HeaderNavMenu/>
        
    </header>);
}