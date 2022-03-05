import { URL } from "../constant/constant";
import axios from "axios";

export const loginAPI = (username , password ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(URL, {
            login: username,
            password: password,
            event: "login",
        
        });
        resolve(res.data);
      } catch (err) {
          console.log(err, 'error')
        reject(err);
      }
    });
  }

