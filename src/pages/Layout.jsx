import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Layout = ({ children, toggleProjectDialog }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar toggleProjectDialog={toggleProjectDialog} />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
