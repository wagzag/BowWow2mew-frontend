import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const post = async (params, bodyData) => {
  try {
    const res = await instance.post(params, bodyData);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const authPost = async (params, bodyData) => {
  try {
    const res = await instance.post(params, bodyData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const get = async (params = "") => {
  try {
    const response = await instance.get(params);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const authGet = async (params = "") => {
  try {
    const response = await instance.get(params, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const put = async (params = "", bodyData) => {
  try {
    const res = await instance.put(params, bodyData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const del = async (params = "") => {
  try {
    const res = await instance.delete(params, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};
