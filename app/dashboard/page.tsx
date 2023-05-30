"use client";

import { useContext } from "react";
import { AuthContext } from "@auth/context";

const Dashboard = () => {
  const { accessToken } = useContext(AuthContext);

  return <div>Dashboard {accessToken}</div>;
};

export default Dashboard;
