import Footer from "@/components/Footer"
import Header from "@/components/Header"



interface Props {
    children:React.ReactNode
}

export default function LandingLayout({ children }:Readonly<Props>){


    return (<>
    
    <Header/>

    {children}

    <Footer/>
    
    </>)
}