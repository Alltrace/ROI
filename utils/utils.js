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

export const testDuplicate = (values) => {
  var hasDuplicate = false;
  const uniqueValues = new Set(values.map((v) => v.tag));
  if (uniqueValues.size < values.length) {
    hasDuplicate = true;
  }
  return hasDuplicate;
};
