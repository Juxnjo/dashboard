import { SidebarComponent } from "../components/Sidebar/SidebarComponent";
import { CardLgComponent } from "../components/Card/CardLgComponent";
import { CardXlComponent } from "../components/Card/CardXlComponent";
import { CardLg2Component } from "../components/Card/CardLg2Component";
import { CardSmComponent } from "../components/Card/CardSmComponent";

export const DashboardPage = () =>
{
  return (
    <div className="flex ">
      <SidebarComponent />
      <div className="bg-slate-200 w-full rounded-2xl pt-10 pl-10">
        <div className="flex  ">
          <CardLgComponent />
          <CardLg2Component />
        </div>
        <CardXlComponent />
        <div className=""> 
      <CardSmComponent />
    </div>
      </div>

    </div>
  );
}
