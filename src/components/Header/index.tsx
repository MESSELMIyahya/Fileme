import Link from "next/link";
import { Button } from "../ui/button";





export default function Header (){


    return (<header className="container flex items-center justify-between  py-5 bg-background ">
        
            <div className="">
                    <Link href='/' className="text-4xl font-semibold text-foreground">
                            File
                            <span className="text-primary">Me</span>
                    </Link>
            </div>

            <nav className="flex gap-8 items-center">

                <div className="flex items-center gap-4">
                        <Link href='/' className="text-foreground/80 hover:underline">Home</Link>
                        <Link href='/' className="text-foreground/80 hover:underline">Pricing</Link>
                        <Link href='/' className="text-foreground/80 hover:underline">Contact</Link>
                </div>

                <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-full">Sign In</Button>
                        <Button className="rounded-full">Start Free</Button>
                </div>

            </nav>
        
    </header>);
}