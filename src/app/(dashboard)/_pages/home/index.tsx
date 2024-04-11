'use client';
import { usePathname } from "next/navigation";
import FileCard from "../../_components/Main/FileCard";
import FolderCard from "../../_components/Main/FolderCard";
import DashboardPageSection from "../../_components/PageSection";


interface Props {
    path:string[]
}

export default function HomePage ({path}:Props){
    const pathname = usePathname()

    return (<DashboardPageSection className="">
    

    {/* <FileCard type="image" url="https://firebasestorage.googleapis.com/v0/b/eeref-3e65d.appspot.com/o/projects%2FRehabilitation%20And%20Garden%20Development%20Work%20November%201st%2F434639654_804932641665256_1297602693849735060_n.jpg?alt=media&token=4dd496f8-a647-4436-847a-805ef26e1067" />
    <FileCard type="video" url="https://firebasestorage.googleapis.com/v0/b/eeref-3e65d.appspot.com/o/projects%2Fvideos%2FRehabilitation%20And%20Garden%20Development%20Work%20November%201st%2F0404.mp4?alt=media&token=fa8ae22a-61e6-407b-a1cf-d6933f620b66" />
    <FileCard type="pack"/>
    <FileCard type="code"/>
    <FileCard type="text" /> */}

    <FolderCard id="1g" path={pathname} name="Pictures" color='red' />
    <FolderCard id="g2" path={pathname} name="Backup" color='gray' />
    <FolderCard id="3g" path={pathname} name="Football" color='green' />
    <FolderCard id="g4" path={pathname} name="Work" color='blue' />


    
    </DashboardPageSection>)
}