import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const userApi = rootAPI + "/user";
const apiEp = rootAPI + "/task";

const getUserId = () => {
  const userJson = sessionStorage.getItem("user");
  const userObj = JSON.parse(userJson);
  return userObj?._id || null;
};

export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
export const loginUser = async (userObj) => {
  try {
    const test = await axios.post(userApi + "/login", userObj);
    console.log(test);
    return test.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
export const postData = async (obj) => {
  try {
    const userId = getUserId();
    alert("where");
    console.log(userId);
    console.log(obj, userId);
    if (!userId) {
      return {
        status: "error",
        message: "User not found log out and log in again",
      };
    }

    const { data } = await axios.post(apiEp, obj, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const userId = getUserId();
    console.log(userId);
    if (!userId) {
      return {
        status: "error",
        message: "UserId not found",
      };
    }
    const { data } = await axios.get(apiEp, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
export const updateTasks = async (obj) => {
  try {
    alert("axios");
    console.log(obj);
    const { data } = await axios.patch(apiEp, obj);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTasks = async (taskArg) => {
  try {
    console.log(taskArg);
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "userId not foud, log out and log in again.",
      };
    }
    const { data } = await axios.delete(apiEp, {
      data: taskArg,
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteManyTasks = async (taskArg) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "userId not foud, log out and log in again.",
      };
    }
    const { data } = await axios.delete(apiEp, {
      data: taskArg,
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
