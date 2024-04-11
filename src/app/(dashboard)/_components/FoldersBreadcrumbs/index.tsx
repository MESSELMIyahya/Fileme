'use client';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { LuHome } from "react-icons/lu";
import useBreadcrumbs from "../../_hooks/useBreadcrumbs";
import Link from "next/link";


interface Props {
    steps: {
        name: string;
        url: string;
    }[];
    path: string[]
}

export default function FoldersBreadcrumbs({ path }: Props) {
    const { steps } = useBreadcrumbs(path);

    return steps.length ? (<div className="flex h-14 items-center gap-4 border-b bg-muted/20 px-4 lg:h-[60px] lg:px-6">
        <Breadcrumb className="w-full">
            <BreadcrumbList >

                            <BreadcrumbItem key={'home'}>
                                <BreadcrumbLink asChild>
                                    <Link href={'/home'} >
                                        <LuHome className="size-5" />
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>


                {
                    steps.map((e, i) =>
                        <>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem key={e.name}>
                                <BreadcrumbLink href={e.url}>{e.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    )
                }



                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Family</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Children</BreadcrumbLink>
                </BreadcrumbItem>


                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage className="text-primary">Girls And Body</BreadcrumbPage>
                </BreadcrumbItem> */}

            </BreadcrumbList>
        </Breadcrumb>

    </div>) : null
}

