import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashboardPageSection({className,...props}:Props){
    return (<section className={cn("w-full h-max grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",className)} {...props} />)
}