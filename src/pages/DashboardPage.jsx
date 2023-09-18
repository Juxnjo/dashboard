import { SidebarComponent } from "../components/Sidebar/SidebarComponent";
import { CardLgComponent } from "../components/Card/CardLgComponent";
import { CardXlComponent } from "../components/Card/CardXlComponent";
import { CardLg2Component } from "../components/Card/CardLg2Component";
import { CardSmComponent } from "../components/Card/CardSmComponent";
import { CardSm2Components } from "../components/Card/CardSm2Components";

export const DashboardPage = () =>
{
  return (
    <div className="flex ">
      <SidebarComponent />
      <div className="bg-slate-200 w-full rounded-2xl pt-10 pl-10 ">

        <div className="flex flex-row ">
          <CardLgComponent />
          <CardLg2Component />

          <CardSmComponent />
          <CardSm2Components />

        </div>

        <CardXlComponent />
      </div>

    </div>
  );
}
