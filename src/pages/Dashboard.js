import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "../components/TopNav";
import Portfolio from "./Portfolio";
import DynamicNtdl from "../components/DynamicNtdl";
import Side from "../components/Sidebar";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div>
      {}

      {/* navbar  */}
      <TopNav />
      <Container fluid>
        {/* form */}
        This is dashboard bro
        <div className="text-end"></div>
        <Sidebar />
        <DynamicNtdl />
        {/* <Portfolio /> */}
        {/* table */}
      </Container>
    </div>
  );
};

export default Dashboard;
