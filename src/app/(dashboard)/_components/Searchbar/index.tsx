'use client';

import { Button } from "@/components/ui/button";





export default function SearchBar() {


    return (<div className="w-full h-12 rounded-md border border-input pr-1 text-sm file:border-0 placeholder:text-muted-foreground flex items-center gap-2 appearance-none bg-background shadow-none md:w-2/3 lg:w-1/3">
        {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
        <input
            placeholder="Search files,folders"
            className="w-full rounded-l-sm pl-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <Button size='sm'>Search</Button>
    </div>)
}