'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FilesTypes, FolderColorsType } from "@/lib/type";
import { cn } from "@/lib/utils";

import {
    Folder as LuFolder,
    // dropdown 
    FolderOpen  as LuFolderOpen ,
    PencilLine as LuPencilLine,
    Folders as LuFolders ,
    Info as LuInfo,
    Trash as LuTrash

} from 'lucide-react'
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi";



interface Props {
    name: string;
    color: FolderColorsType;
    path:string;
    id:string;
}


export default function FolderCard({ color, name,path }:Props) {
    // const preview = useFilePreview(type,url);

    return (<Card  className="hover:bg-muted/40 transition-all select-none cursor-pointer active:scale-[0.99]">
        
        <CardContent className="p-3 flex justify-between items-center gap-2">

            <div className="flex items-center gap-2">

                <div className="">
                    <LuFolder className={cn("size-6",
                        color == 'red' ? "fill-red-500 text-red-500"
                            : color == 'gray' ? "fill-gray-500 text-gray-500"
                                : color == 'green' ? "fill-green-500 text-green-500"
                                    : "fill-primary text-primary"
                    )} />

                </div>

                <Link target="_self" href={(path+'/folder/'+name)||'/'} className="w-5/6 text-sm leading-4 tracking-tight line-clamp-1">{name}</Link>

            </div>
            <DropdownMenu>

                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="rounded-full size-8">
                        <HiOutlineDotsHorizontal className="size-5" />
                    </Button>
                </DropdownMenuTrigger>


                <DropdownMenuContent side="bottom" align="start" className="w-[12em]">

                    <DropdownMenuItem className="flex items-center gap-3 ">
                        <LuFolderOpen className="size-5" />
                        Open
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuPencilLine className="size-5" />
                        Rename
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuFolders className="size-5" />
                        Make a copy
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuInfo className="size-5" />
                        Folder information
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3 text-red-800/80 focus:text-red-800/80 focus:bg-red-500/10">
                        <LuTrash className="size-5" />
                        Move to trash
                    </DropdownMenuItem>


                </DropdownMenuContent>


            </DropdownMenu>
        </CardContent>

    </Card>);

}