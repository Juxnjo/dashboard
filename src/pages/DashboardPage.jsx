import { SidebarComponent } from "../components/Sidebar/SidebarComponent";
import { CardLgComponent } from "../components/Card/CardLgComponent";

export const DashboardPage = () => {
  return (
    <div className="flex space-x-0 min-h-screen ">
      <SidebarComponent />
      <div className="bg-slate-200 w-4/5 rounded-2xl">
        <div className="p-10">
        <CardLgComponent/>
        </div>
        
      </div>
    </div>
  );
}
