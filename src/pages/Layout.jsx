import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Layout = ({ children, ref }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar ref={ref} />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
