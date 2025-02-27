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
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import { SquareChevronRight } from "lucide-react";
import UserInfo from "./UserInfo";
import FooterSidebar from "./FooterSidebar";

const AppSideBar = ({ ref, toggleProjectDialog }) => {
  const items = [
    {
      title: "Code Eval Ai",
      url: "#",
      icon: SquareChevronRight,
    },
    {
      title: "JCD App",
      url: "#",
      icon: SquareChevronRight,
    },
    {
      title: "Attire Store",
      url: "#",
      icon: SquareChevronRight,
    },
    {
      title: "Kriya Board",
      url: "#",
      icon: SquareChevronRight,
    },
  ];

  return (
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
            className="h-5 w-5 px-3 py-1 bg-gray-200 hover:bg-gray-300"
            asChild
          >
            <div
              onClick={toggleProjectDialog}
              className="flex flex-row justify-center items-center gap-2 cursor-pointer"
            >
              <span className="font-medium text-sm">New </span>
              <Plus className="h-4 w-4" />{" "}
              <span className="sr-only">Add Project</span>
            </div>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <FooterSidebar />
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSideBar;
