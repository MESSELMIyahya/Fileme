import Link from "next/link";
import { Button } from "../ui/button";





export default function Header (){


    return (<header className="container flex items-center justify-between  py-4 bg-background ">
        
            <div className="">
                    <Link href='/' className="text-4xl font-bold text-foreground">
                            File
                            <span className="text-primary">Me</span>
                    </Link>
            </div>

            <nav className="flex gap-8 items-center">

                <div className="flex items-center gap-4">
                        <Link href='/' className="text-foreground/80 transition-colors hover:text-primary">Home</Link>
                        <Link href='/' className="text-foreground/80 transition-colors hover:text-primary">Pricing</Link>
                        <Link href='/' className="text-foreground/80 transition-colors hover:text-primary">Contact</Link>
                </div>

                <div className="flex items-center gap-3">
                        <Button variant="outline" className="rounded-full">Sign In</Button>
                        <Button className="rounded-full">Start Free</Button>
                </div>

            </nav>
        
    </header>);
}