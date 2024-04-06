'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Bell,
    Home,
    Star,
    Trash
} from "lucide-react"
import StorageProgressCard from "../StorageProgress"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

// get path function 


const getTabFromPath =(p:string)=>{    
    return p.split('/')[1];
}

interface Props {
    selected?:'home'|'fav'|'trash'
}


export default function SideBar({}:Props) {
    const selected = usePathname()



    return (<nav className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center text-lg  md:text-2xl  font-semibold text-foreground">
                    File
                    <span className="text-primary">Me</span>
                </Link>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>

            <div className="flex-1">

                <nav className="grid gap-2 items-start p-2 text-base font-medium lg:px-4">
                    <Link
                        href="/home"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",getTabFromPath(selected)=='home'?'bg-muted text-primary':'')}>
                        <Home className="h-5 w-5" />
                        Home
                    </Link>

                    <Link
                        href="/fav"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",getTabFromPath(selected)=='fav'?'bg-muted text-primary':'')}
                    >
                        <Star  className="h-5 w-5" />
                        Favorites
                    </Link>

                    <Link
                        href="/trash"
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",getTabFromPath(selected)=='trash'?'bg-muted text-primary':'')}
                    >
                        <Trash className="h-5 w-5" />
                        Trash
                    </Link>

                </nav>
            </div>

            <div className="mt-auto p-4">
                <StorageProgressCard/>
            </div>
        </div>
    </nav>)
}