import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "../components/SignUpForm";
import { toast } from "react-toastify";
const SignUp = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="bg-info text-light vh-100 d-flex justify-content-center align-items-center ">
            <div className="shadow-lg  rounded p-3">
              <h1>Task Management System</h1>
              <p>Be uptodate with the task and follow it as you mention</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center ">
            <div className="shadow-lg p-3 border rounded">
              <h2>Signup Now</h2>
              <SignUpForm />
              <hr />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
