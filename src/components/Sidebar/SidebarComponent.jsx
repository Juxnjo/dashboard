import { LuClock2 } from "react-icons/lu";

export const SidebarComponent = () =>
{
    return (
        <div className="bg-slate-50 w-1/5 pt-6 ">
            <div className="p-6 ">
                <h1 className="flex font-bold">Dashboard</h1>
                
                <div className="flex items-center p-6 ">
                    <span><LuClock2/></span>
                    <p className="pl-4"> Dashboard</p>
                </div>
                
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>
            
            
        </div>
    )
}
