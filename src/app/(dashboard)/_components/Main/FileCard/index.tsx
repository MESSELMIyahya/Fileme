'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FilesTypes } from "@/lib/type";

import {
    Image as LuImage , 
    File as LuFile ,
    FileText as LuFileText ,
    FileArchive as LuFileArchive ,
    FileCode as LuLuFileCode ,
    Film as LuFilm ,
    // dropdown 
    Eye as LuEye ,
    PencilLine as LuPencilLine ,
    Download as LuDownload ,
    Link as LuLink ,
    Files as LuFiles ,
    Info as LuInfo  ,
    Trash as LuTrash

} from 'lucide-react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";



interface Props {
    name: string;
    url: string;
    id: string;
    date: {
        createdIn: string;
        updatedIn: string;
    }
    type?:FilesTypes
    owner: {
        pic: string;
        name: string;
        id: string;
    };
    size: string;
}


export default function FileCard({ date, id, name, owner, size, url,type }: Partial<Props>) {
    // const preview = useFilePreview(type,url);

    return (<Card className="hover:bg-muted/40 transition-colors">
        <CardContent className="p-3 pb-0 flex justify-between items-center gap-2">

            <div className="">
                {
                    type == 'image' ?  <LuImage className="size-6 text-primary" /> 
                    :type == 'video' ? <LuFilm  className="size-6 text-primary" />
                    :type == 'text' ? <LuFileText  className="size-6 text-primary" />
                    :type == 'pack' ? <LuFileArchive  className="size-6 text-primary" />
                    :type == 'code' ? <LuLuFileCode  className="size-6 text-primary" />
                    : <LuFile className="size-6 text-primary" />
                }
               
            </div>
            <h4 className="w-4/6 text-sm leading-4 tracking-tight line-clamp-1 ">
                My photo in Alger
                My photo in Alger
            </h4>
            <DropdownMenu>
                
                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="rounded-full size-8">
                        <HiOutlineDotsHorizontal className="size-5" />
                    </Button>
                </DropdownMenuTrigger>


                <DropdownMenuContent side="bottom" align="start" className="w-[12em]">

                    <DropdownMenuItem className="flex items-center gap-3 ">
                        <LuEye className="size-5" />
                        View
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuDownload className="size-5" />
                        Download
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuPencilLine className="size-5" />
                        Rename
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuFiles className="size-5" />
                        Make a copy
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuLink  className="size-5" />
                        Copy link
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3">
                        <LuInfo className="size-5" />
                        File information
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex items-center gap-3 text-red-800/80 focus:text-red-800/80 focus:bg-red-500/10">
                        <LuTrash className="size-5" />
                        Move to trash
                    </DropdownMenuItem>


                </DropdownMenuContent>


            </DropdownMenu>
        </CardContent>


        <CardContent className="p-3 pb-0">

            <div className="w-full overflow-hidden relative border h-[12em] bg-muted rounded-lg select-none">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0">
                {   
                    type == 'image' ?  <LuImage className="size-20 text-muted-foreground" /> 
                    :type == 'video' ? <LuFilm  className="size-20 text-muted-foreground" />
                    :type == 'text' ? <LuFileText  className="size-20 text-muted-foreground" />
                    :type == 'pack' ? <LuFileArchive  className="size-20 text-muted-foreground"/>
                    :type == 'code' ? <LuLuFileCode  className="size-20 text-muted-foreground" />
                    : <LuFile className="size-20 text-muted-foreground/60" />
                }
                </div>
                {
                    url && type == 'image' ?
                     <img loading="lazy" alt="img" src={url} className="absolute top-0 left-0 w-full h-full object-top z-10" />
                    :null
                }
                {
                    url && type == 'video' ?
                     <video muted  preload="metadata" src={url+'#t=0.5'} className="absolute top-0 left-0 w-full h-full object-cover z-10" />
                    :null
                }
                    
            </div>

        </CardContent>

        <CardContent className="flex items-center gap-2 p-3 select-none">

            <Avatar className="size-6 text-xs">
                <AvatarFallback>
                    YA
                </AvatarFallback>
                <AvatarImage alt="@Ya" src="https://avatars.githubusercontent.com/u/107892703?v=4" />
            </Avatar>

            <span className="text-xs text-muted-foreground">
                Add by you - April 15th 2024
            </span>

        </CardContent>


    </Card>);

}