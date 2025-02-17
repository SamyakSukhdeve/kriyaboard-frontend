import Board from "@/components/Board";
import Layout from "./Layout";
import AddProject from "@/components/AddProject";
import { useRef } from "react";
import TaskCard from "@/components/TaskCard";
import AddTask from "@/components/AddTask";

const tasks = [];

const addTask = () => {};

const Dashboard = () => {
  const dialogRef = useRef(null);
  const taskRef = useRef(null);

  const taskToggleDialog = () => {
    if (!taskRef.current) {
      return;
    }

    taskRef.current.hasAttribute("open")
      ? taskRef.current.close()
      : taskRef.current.showModal();
  };

  return (
    <Layout ref={dialogRef}>
      <Board boardName={"To Do"} onclick={taskToggleDialog}>
        <TaskCard
          date={"31 Jul 24"}
          projectName={"CodeEval Ai"}
          taskName={"Optimize Ai of generating code"}
        />
        <AddTask ref={taskRef} handelToggle={taskToggleDialog} />
      </Board>
      <AddProject ref={dialogRef} />
    </Layout>
  );
};

export default Dashboard;
