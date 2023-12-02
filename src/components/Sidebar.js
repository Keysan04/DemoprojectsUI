import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/dashboard.css";
const Sidebar = () => {
  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            My Projects
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/staticntdl">Not To Do List</Dropdown.Item>
            <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
            <Dropdown.Item href="/dynamicntdl">DynamicNtdl</Dropdown.Item>
            <Dropdown.Item href="/prankcalculator">Calculator</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default Sidebar;
