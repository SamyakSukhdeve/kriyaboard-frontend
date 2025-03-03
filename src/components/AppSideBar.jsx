import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import UserInfo from "./UserInfo";
import FooterSidebar from "./FooterSidebar";

const AppSideBar = ({ toggleProjectDialog, children }) => {
  return (
    <div>
      <Sidebar>
        <SidebarHeader className="p-0 m-0 gap-0">
          <UserInfo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <h3 className="font-semibold text-[14px]">Projects</h3>
            </SidebarGroupLabel>
            <SidebarGroupAction
              title="Add Project"
              className="h-5 w-5 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              asChild
            >
              <div
                onClick={toggleProjectDialog}
                className="flex flex-row justify-center  items-center gap-2 cursor-pointer"
              >
                <span className="font-normal text-sm">New </span>
                <Plus className="h-4 w-4" />{" "}
                <span className="sr-only">Add Project</span>
              </div>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>{children}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <FooterSidebar />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
export default AppSideBar;
