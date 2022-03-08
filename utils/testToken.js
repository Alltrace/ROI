import * as SecureStore from "expo-secure-store";
import { UUID } from "../constant/constant";

export const isAliveToken = async () => {
  const uuid = await SecureStore.getItemAsync(UUID);
  if (uuid) {
    return true;
  } else {
    return false;
  }
};
