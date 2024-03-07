import Link from "next/link"




function Footer() {


    return (<footer className="bg-card">
              
        <div className="container flex flex-col gap-y-4 items-center py-8 px-6">


            <div className="w-full items-center flex flex-col text-center gap-4 ">
                <Link href='/' className="md:text-2xl text-xl font-bold text-foreground ">
                    File
                    <span className="text-primary">Me</span>
                </Link>

                <p className="text-base text-secondary-foreground">The best place to save your content without effort</p>

            </div>

            <div className="w-full bg-border h-px" />

            <div className="w-full flex flex-col gap-4 items-center md:flex-row md:items-center md:justify-between ">

                <div className="text-sm text-muted-foreground">© Copyright 2021. All Rights Reserved.</div>
                
                <ul className="flex items-center gap-3 text-sm text-muted-foreground">
                    <li><Link href="/">Teams</Link></li>
                    <li><Link href="/">Privacy</Link></li>
                    <li><Link href="/">Cookies</Link></li>
                </ul>

            </div>

        </div>

    </footer>)
}




export default Footer