import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { loginUser } from "../helper/axiosHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resp, setResp] = useState({});

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setResp({});
    setIsLoading(true);
    // if (!email || !password) {
    //   return toast.error("Both input field must be filled");
    // }
    const result = await loginUser(form);
    const { status, message } = result;
    toast[status](message);
    alert(message);
    //console.log(result);
    //if login is success then redirect user to dashboard
    setIsLoading(false);
    if (result?.status === "success") {
      //store user in session storage
      sessionStorage.setItem("user", JSON.stringify(result.user));

      //redirect user
      navigate("/dashboard");
    } else {
      setResp(result);
    }

    //else show error message on the page
  };

  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@emial.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "xxxxxx",
    },
  ];
  return (
    <Form onSubmit={handleOnSubmit}>
      {resp.message && <Alert variant="danger">{resp.message}</Alert>}

      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleOnChange} />
      ))}

      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner animation="border" /> : "Submit"}
        </Button>
      </div>

      <div className="text-end mt-4">
        Are you new here? <a href="/signup">Signup</a> now
      </div>
    </Form>
  );
};
