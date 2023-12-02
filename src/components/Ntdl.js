import React from "react";
import { useState } from "react";
function Ntdl() {
  const [form, setForm] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [ttlCounthrs, setTotalCount] = useState(20);
  const hoursWk = 24 * 7;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };
  const randomStr = () => {
    const charLength = 6;
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let id = "";
    for (let i = 0; i < charLength; i++) {
      const randNum = Math.round(Math.random() * (str.length - 1));
      id += str[randNum];
    }
    return id;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...form,
      type: "entry",
      id: randomStr(),
    };
    console.log(obj);
    setTaskList([...taskList, obj]);
    console.log(taskList);
    // setTotalCount();
  };

  const handleOnDelete = (id, task) => {
    if (window.confirm(`Are you sure want to delete ${task}?`));
    const filteredArg = taskList.filter((item) => item.id !== id);
    setTaskList(filteredArg);
  };

  const switchTask = (id, type) => {
    console.log("clicked");
    debugger;
    const arg = taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          type,
        };
      }
      return item;
    });
    setTaskList(arg);
  };

  const entry = taskList.filter((item) => item.type === "entry");
  const bad = taskList.filter((item) => item.type === "bad");
  //const totalttlHrPerWeekhrs = 24 * 7;
  // const ttlhr = taskList.map((item) => {
  //   debugger;
  //   if (item.hr > totalttlHrPerWeekhrs) {
  //     return alert("Can not exceed the total hours by one item");
  //   } else {
  //     let y = "";
  //     y += item.hr;
  //     setTotalCount(y);
  //   }

  // });
  const totalHrs = 24;
  //   taskList.reduce((acc, item) => acc + +item.hr);

  // if (entry.hr > ttlHrPerWeek) {
  //   return alert(
  //     "Sorry boos not enough time let to fit this task from last week"
  //   );
  // } else {
  //   const ttlBadHr = badListOnly.reduce((acc, item) => acc + item.hr, 0);
  //   setTotalCount(ttlBadHr);
  // }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row g-2">
          <div className="col mt-5 text center">
            <h1>Not to do List Practice</h1>
          </div>
        </div>

        <form
          action=""
          onSubmit={handleOnSubmit}
          className="mt-5 border p-5 rounded shadow-lg bg-transparent"
        >
          <div className="row g-2">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder=".."
                aria-label="First Name"
                name="task"
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                min="1"
                className="form-contol"
                placeholder="num"
                aria-label="Number"
                name="hr"
                required
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="grid">
              <button className="btn btn-primary">Add Task</button>
            </div>
          </div>
        </form>

        <div className="row mt-5 pt-2">
          <div className="col-md">
            <h3>Task Entry List</h3>
            <hr />
            <table className="table table-striped table-hover border opacity">
              <tbody id="entry">
                {entry.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr} hr</td>
                    <td className="text-end">
                      <button
                        onClick={() => handleOnDelete(item.id, "entry")}
                        className="btn btn-danger"
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                      <button
                        onClick={() => switchTask(item.id, "bad")}
                        className="btn btn-success"
                      >
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Total hrs: {totalHrs}</p>
          </div>
          <div className="col-md">
            <h3>Bad List</h3>
            <hr />
            <table className="table table-striped table-hover border opacity">
              <tbody id="bad">
                {bad.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr} hr</td>
                    <td className="text-end">
                      <button
                        onClick={() => switchTask(item.id, "entry")}
                        className="btn btn-success"
                      >
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        onClick={() => handleOnDelete(item.id, "bad")}
                        className="btn btn-danger"
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="alert alert-info">
              You could have save =<span id="badHr">{}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ntdl;
