import SideBar from "./_components/Sidebar";
import NavBar from "./_components/Navbar";
import FoldersBreadcrumbs from "./_components/FoldersBreadcrumbs";

interface Props {
    children: React.ReactNode,
    params:any
}

export default async function DashboardRootLayout({ children,params }: Readonly<Props>) {
    // const au = await getServerSession();

    // if(!au?.user){
    //     // if he's not authenticated it returns him to the home page 
    //     return redirect('/')
    // }

    console.log(params);

    return (<div className="grid min-h-screen h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* sidebar */}
        <SideBar selected="home" />
        {children}
    </div>)
}