import { SidebarComponent } from "../components/Sidebar/SidebarComponent";

export const DashboardPage = () => {
  return (
    <div className="flex space-x-0 min-h-screen ">
      <SidebarComponent />
      <div className="bg-slate-200 w-4/5 rounded-2xl">
        <div className="p-10">
        <h1>Dashboard</h1>
        </div>
        
      </div>
    </div>
  );
}
