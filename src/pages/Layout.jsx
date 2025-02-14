import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
