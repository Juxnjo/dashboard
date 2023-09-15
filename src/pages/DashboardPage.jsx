import { SidebarComponent } from "../components/Sidebar/SidebarComponent";
import { CardLgComponent } from "../components/Card/CardLgComponent";
import { CardXlComponent } from "../components/Card/CardXlComponent";
import { CardLg2Component } from "../components/Card/CardLg2Component";

export const DashboardPage = () =>
{
  return (
    <div className="flex  ">
      <SidebarComponent />
      <div className="bg-slate-200 w-full rounded-2xl p-10">
        <div className="flex space-x-10  ">
          <CardLgComponent />
          <CardLg2Component />
          
        </div>
        <div className="mt-10">
        <CardXlComponent/>
        </div>


      </div>
    </div>
  );
}
