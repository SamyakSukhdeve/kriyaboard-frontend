import React from "react";
import useAuthStore from "../store/useAuthStore";

const Dashboard = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;
