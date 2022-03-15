import { URL, UUID } from "../constant/constant";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const loginAPI = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL, {
        login: username,
        password: password,
        event: "login",
      });
      if (res.status === 200) {
        resolve(res.data);
        await SecureStore.setItemAsync(UUID, res.data.userid);
      }
    } catch (err) {
      reject(err);
    }
  });
};

//logout API
export const logoutAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await SecureStore.deleteItemAsync(UUID);
    } catch (err) {
      console.log(err, "error");
      reject(err);
    }
  });
};

//Heartbeat overview API
export const overviewAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const uuid = await SecureStore.getItemAsync("uuid");
      const res = await axios.post(URL, {
        userid: uuid,
        event: "hb",
        tags: [{}],
      });
      resolve(res.data);
    } catch (err) {
      console.log(err, "error");
      reject(err);
    }
  });
};

//Order and Recieve API
export const TagPlusAPI = (tags) => {
  return new Promise(async (resolve, reject) => {
    try {
      const uuid = await SecureStore.getItemAsync("uuid");
      const res = await axios.post(URL, {
        userid: uuid,
        event: "tag+",
        tags: tags,
      });
      resolve(res.data);
    } catch (err) {
      console.log(err, "error");
      reject(err);
    }
  });
};
