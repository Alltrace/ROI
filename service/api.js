import { URL } from "../constant/constant";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const loginAPI = (username , password ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(URL, {
            login: username,
            password: password,
            event: "login",
        
        });  
        resolve(res.data);
        await SecureStore.setItemAsync('uuid',res.data.userid);
        
      } catch (err) {
          console.log(err, 'error')
        reject(err);
      }
    });
  }

  //Heartbeat overview API
  export const overviewAPI = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const uuid = await SecureStore.getItemAsync('uuid');
        const res = await axios.post(URL, {
          userid: uuid,
            event: "hb",
            tags: [
              {}
          ]
        });
        resolve(res.data);
      } catch (err) {
          console.log(err, 'error')
        reject(err);
      }
    });
  }