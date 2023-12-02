import { useEffect, useState } from "react";
import React from "react";
import "../App.css";
import {
  getAllTasks,
  postData,
  updateTasks,
  deleteTasks,
  deleteManyTasks,
} from "../helper/axiosHelper";
const initialState = { task: "", hr: "" };
const DynamicNtdl = () => {
  const [form, setForm] = useState({});
  const [taskLists, setTaskLists] = useState([]);
  const [resp, setResp] = useState();
  const [checkedVal, setCheckedVal] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);
  const [submitButton, setSubmitButton] = useState(true);
  const [idsToDelete, setIdsToDelete] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    const data = await getAllTasks();

    data.status === "success" && setTaskLists(data.taskList);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // const handleOnUpdatedSubmit = async (form) => {
  //   const data = await postData(form);

  //   getTasks();
  //   data?.status === "success" && setForm(initialState);
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await postData(form);
    getTasks();
    data?.status === "success" && setForm(initialState);
  };

  // const handleOnDelete = async (_id, task) => {
  //   console.log(taskLists);
  //   console.log("delete test");
  //   if (window.confirm(`Are you sure you want to update  ${task}?`)) {
  //     // calling api to delete the data
  //     // fetching api to pull all the data

  //     const result = await deleteTasks({ ids: [_id] });
  //     setResp(result);

  //     result?.status === "success" && getTasks();
  //   }
  // };

  const handleOnUpdate = async (obj) => {
    // console.log(obj.task, obj.hr);
    // send update to the server

    setForm(obj);
    setUpdateButton(true);
    setSubmitButton(false);
  };
  const handleOnUpdateTask = async (e) => {
    // const result = await updateTasks(e);

    // setResp(result);
    // result.status === "success" && getTasks();

    const { _id, type, task, hr } = form;

    const obj = { _id, type, task, hr };
    const result = await updateTasks(obj);
    console.log(result);

    //handleOnDelete(_id);

    //handleOnUpdatedSubmit(form);

    getTasks();
    setUpdateButton(false);
    setSubmitButton(true);
  };

  const handleOnSelectAll = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    setCheckedVal(true);
    if (checked) {
      const taskArg = taskLists.map(({ _id }) => _id);
      console.log(taskArg);
      setIdsToDelete(taskArg);
    } else {
      setCheckedVal(false);

      setIdsToDelete([]);
    }
  };
  const handleOnItemSelect = (e) => {
    // setCheckedVal(false);
    const { checked, value } = e.target;
    console.log(checked, value);
    // setCheckedVal(false);

    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
      console.log(idsToDelete);
    } else {
      setIdsToDelete(idsToDelete.filter((item) => item._id !== value));

      console.log(idsToDelete);
    }

    // if (checked) {

    // }
  };
  const handleOnDeleteAll = async () => {
    console.log(idsToDelete);

    if (
      window.confirm("Are you sure want to delete all the tasks selected ??")
    ) {
      const result = await deleteManyTasks(idsToDelete);
      setResp(result);
      console.log(result);
      if (result?.status === "success") {
        getTasks();
        setIdsToDelete([]);
      }
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row g-2">
          <div className="col mt-5 text-center">
            <h1>Form</h1>
          </div>
        </div>
        <p></p>
        <form className="mt-5 border p-5 rounded shadow-lg bg-transparent">
          <div className="row g-2">
            <div className="row">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coding.."
                  aria-label="First name"
                  name="task"
                  value={form.task}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  placeholder="23"
                  aria-label="Last name"
                  name="hr"
                  value={form.hr}
                  onChange={handleOnChange}
                  required
                />
              </div>
              {submitButton ? (
                <div className="col-md-3">
                  <div className="d-grid">
                    <button
                      className="btn btn-primary"
                      onClick={handleOnSubmit}
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              ) : (
                <div className="col-md-3"></div>
              )}
            </div>
          </div>
        </form>
        {updateButton ? (
          <div className="col-md-3">
            <div className="d-grid">
              <button className="btn btn-info" onClick={handleOnUpdateTask}>
                Update Task
              </button>
            </div>
          </div>
        ) : (
          <div className="col-md-3"></div>
        )}
        <div class="row mt-5 pt-2">
          {/* <!-- 2. bad list  --> */}
          <div class="col-md">
            <h3 class="text-center">List</h3>
            <hr />
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="allEntry"
                // checked={checkedVal}
                onChange={handleOnSelectAll}
              />{" "}
              <label htmlFor="allEntry">Select All Entry</label>
            </div>

            <table class="table table-striped table-hover border opacity">
              <tbody id="entry">
                {taskLists.map((item, i) => (
                  <tr key={item._id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={item._id}
                        value={item._id}
                        checked={idsToDelete.includes(item._id)}
                        onChange={handleOnItemSelect}
                      />{" "}
                      {/* <label htmlFor={_id}>{task}</label> */}
                    </td>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}hr</td>
                    <td class="text-end">
                      <button
                        onClick={() => handleOnUpdate(item)}
                        class="btn btn-success"
                      >
                        Update <i class="fa-solid fa-pen fa-shake"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {idsToDelete?.length > 0 && (
              <button
                onClick={() => handleOnDeleteAll()}
                class="btn btn-danger"
              >
                <i class="fa-solid fa-trash"></i>Delete Selected items
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicNtdl;
