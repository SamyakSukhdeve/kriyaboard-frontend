import Board from "@/components/Board";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";
import AddTaskDialog from "../components/AddTaskDialog";
import useTaskStore from "@/store/useTaskStore";
import AddProjectDialog from "@/components/AddProjectDialog";
import useProjectStore from "@/store/useProjectStore";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [openProject, setProject] = useState(false);

  const [tasks, setTask] = useState([]);

  const { getAllTask } = useTaskStore();
  const { getAllUsers } = useProjectStore();
  
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getAllTask();
      setTask(task);
    };
    fetchTask();
    getAllUsers();
  }, []);

  return (
    <Layout toggleProjectDialog={() => setProject(true)}>
      <Board boardName={"To Do"} onclick={() => setOpen(true)}>
        {tasks.map((t) => (
          <TaskCard
            key={t.id}
            date={t.date}
            projectName={"CodeEval Ai"}
            taskName={t.task}
            priority={t.priority}
            dueDate={t.dueDate.replace(",", "")}
          />
        ))}
        <AddTaskDialog onOpen={open} onClose={setOpen} />
        <AddProjectDialog onOpen={openProject} onClose={setProject} />
      </Board>
    </Layout>
  );
};

export default Dashboard;
