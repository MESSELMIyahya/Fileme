import FoldersBreadcrumbs from "../_components/FoldersBreadcrumbs";
import NavBar from "../_components/Navbar";
import FavPage from "../_pages/fav";
import HomePage from "../_pages/home";
import TrashPage from "../_pages/trash";



interface Props {
    params:{
        paths:string[];
    }
}

export default function PathsRootPage ({params}:Props){
    const page = params.paths[0] as 'home' | 'fav' | 'trash' ;

    return (<>
     {/* page */}

     <div className="w-full min-h-screen flex flex-col">
            <div className="w-full flex flex-col">
            <NavBar />
            <FoldersBreadcrumbs path={params.paths} steps={[]}/>
            </div>
                 <div className="flex flex-1 h-full overflow-hidden overflow-y-scroll flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {page == 'home' ? <HomePage path={params.paths} /> : page == 'trash' ? <TrashPage/> : <FavPage/>}             
                 </div>
        </div>
    
    </>)    
}