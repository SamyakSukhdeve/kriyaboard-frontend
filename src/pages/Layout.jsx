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
import { DndContext, closestCorners } from "@dnd-kit/core";
import Draggable from "@/components/Draggable";
import Droppable from "@/components/Droppable";

const Layout = () => {
  const [selectedProject, setSelectedProject] = useState({
    id: "",
    projectName: "",
  });
  const [openTask, setOpenTask] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const { getAllTask, tasks, updateTaskStatus } = useTaskStore();
  const { getAllUsers } = useAuthStore();
  const { getAllProject, projects } = useProjectStore();

  const getProjectMembers = projects.filter((f) => {
    if (selectedProject.id === f.id) {
      return f;
    }
  });

  const taskStatuses = ["To Do", "In Progress", "Completed"];

  useEffect(() => {
    getAllTask();
    getAllProject();
    getAllUsers();
  }, [getAllProject, getAllTask, getAllUsers]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const taskId = String(active.id);
      const newStatus = String(over.id);

      updateTaskStatus(taskId, newStatus);
      
    }
  };

  return (
    <div>
      <SidebarProvider>
        <AppSideBar toggleProjectDialog={() => setOpenProject(true)}>
          {/* lsit-Project */}
          {projects.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                asChild
                onClick={() =>
                  setSelectedProject((prev) => ({
                    ...prev,
                    id: item.id,
                    projectName: item.projectName,
                  }))
                }
                className={`cursor-pointer ${
                  selectedProject.id == item.id ? "bg-amber-100" : ""
                } hover:bg-amber-100`}
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
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <SidebarTrigger />
            {selectedProject.id ? (
              <div className="flex">
                {taskStatuses.map((status) => (
                  <Droppable key={status} id={status}>
                    <Board boardName={status} onclick={() => setOpenTask(true)}>
                      {/* list-Task */}
                      {tasks
                        .filter(
                          (t) =>
                            t.status === status &&
                            t.project.id === selectedProject.id
                        )
                        .map((t) => (
                          <Draggable key={t.id} id={t.id}>
                            <TaskCard
                              date={t.date}
                              projectName={t.project.projectName}
                              taskName={t.task}
                              createdAt={t.createdAt}
                              priority={t.priority}
                              dueDate={t.dueDate.replace(",", "")}
                              photoURL={t.assignTo.photoURL}
                            />
                          </Draggable>
                        ))}
                    </Board>
                  </Droppable>
                ))}
                <AddTaskDialog
                  onOpen={openTask}
                  members={getProjectMembers}
                  inert
                  onClose={setOpenTask}
                  projectData={JSON.stringify(selectedProject)}
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
          </DndContext>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
