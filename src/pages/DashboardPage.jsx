import { SidebarComponent } from "../components/Sidebar/SidebarComponent";

export const DashboardPage = () => {
  return (
    <div className="flex space-x-0 min-h-screen">
      <SidebarComponent />
      <div className="bg-slate-500 w-4/5 ">
        <div className="p-6">
        <h1>Dashboard</h1>
        </div>
        
      </div>
    </div>
  );
}
