import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="bg-primary text-light vh-100 d-flex justify-content-center align-items-center ">
            <div className="shadow-lg  rounded p-3">
              <h1>Welcome Back!</h1>
              <p>Login to our system and take controll of your transactions</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center ">
            <div className="shadow-lg p-3 border rounded">
              <h2>Login Now</h2>
              <hr />
              <LoginForm />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
