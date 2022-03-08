import * as SecureStore from "expo-secure-store";
import { UUID } from "../constant/constant";

export const isAliveToken = async () => {
  const res = await SecureStore.getItemAsync(UUID);
  if (res) {
    return true;
  } else {
    return false;
  }
};
