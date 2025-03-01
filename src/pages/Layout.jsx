import AppSideBar from "@/components/AppSideBar";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { SquareChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import useProjectStore from "@/store/useProjectStore";
import useTaskStore from "@/store/useTaskStore";
import TaskCard from "@/components/TaskCard";
import Board from "@/components/Board";
import useAuthStore from "@/store/useAuthStore";
import AddProjectDialog from "@/components/AddProjectDialog";
import AddTaskDialog from "@/components/AddTaskDialog";

const Layout = () => {
  const [selectedProjectId, setSelectedProjectId] = useState();
  const [openTask, setOpenTask] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const { getAllTask, tasks } = useTaskStore();
  const { getAllUsers } = useAuthStore();
  const { getAllProject, projects } = useProjectStore();

  const taskStatuses = ["To Do", "In Progress", "Completed"];

  useEffect(() => {
    getAllTask();
    getAllProject();
    getAllUsers();
  }, []);

  return (
    <div>
      <SidebarProvider>
        <AppSideBar toggleProjectDialog={() => setOpenProject(true)}>
          {/* lsit-Project */}
          {projects.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                asChild
                onClick={() => setSelectedProjectId(item.id)}
                className="cursor-pointer"
              >
                <div>
                  <SquareChevronRight />
                  <span>{item.projectName}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </AppSideBar>
        <main className="w-full ">
          <SidebarTrigger />
          {selectedProjectId ? (
            <div className="flex">
              {taskStatuses.map((status) => (
                <Board
                  boardName={status}
                  key={status}
                  onclick={() => setOpenTask(true)}
                >
                  {/* list-Task */}
                  {tasks
                    .filter(
                      (t) =>
                        t.status === status && t.projectId === selectedProjectId
                    )
                    .map((t) => (
                      <TaskCard
                        key={t.id}
                        date={t.date}
                        projectName={"CodeEval Ai"}
                        taskName={t.task}
                        createdAt={t.createdAt}
                        priority={t.priority}
                        dueDate={t.dueDate.replace(",", "")}
                        photoURL={t.assignTo.photoURL}
                      />
                    ))}
                </Board>
              ))}
              <AddTaskDialog
                onOpen={openTask}
                inert
                onClose={setOpenTask}
                projectId={selectedProjectId}
              />
              <AddProjectDialog
                onOpen={openProject}
                inert
                onClose={setOpenProject}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500">
              Select a project to view Boards
              <AddProjectDialog
                onOpen={openProject}
                inert
                onClose={setOpenProject}
              />
            </div>
          )}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
