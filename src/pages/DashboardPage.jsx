import { SidebarComponent } from "../components/Sidebar/SidebarComponent";
import { CardLgComponent } from "../components/Card/CardLgComponent";
import { CardXlComponent } from "../components/Card/CardXlComponent";
import { CardLg2Component } from "../components/Card/CardLg2Component";

export const DashboardPage = () =>
{
  return (
    <div className="flex ">
      <SidebarComponent />
      <div className="bg-slate-200 w-full rounded-2xl p-10">
        <div className="flex  ">
          <CardLgComponent />
          <CardLg2Component />
          
        </div>
        <div className="">
        <CardXlComponent/>
        </div>


      </div>
    </div>
  );
}
