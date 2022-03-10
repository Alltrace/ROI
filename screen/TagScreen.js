import React from "react";
import { Text, Divider } from "react-native-paper";
import { View, Button } from "react-native";
import Scanner from "../component/scanner/Scanner";
import ViewList from "../component/modal/ViewList";
import { testDuplicate } from "../utils/utils";

const TagScreen = () => {
  const [list, setList] = React.useState([]);

  const handleQRData = ({ type: type, data: data }) => {
    const tempList = { tag: data };
    const checkDuplicate = [...list, tempList];
    const duplicate = testDuplicate(checkDuplicate);
    if (!duplicate) setList([...list, tempList]);
  };

  const handleDeleteTag = (index) => {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  };
  return (
    <View style={{ flex: 1 }}>
      <Scanner handleChange={handleQRData} style={{ padding: 90 }} />
      <ViewList handleDelete={handleDeleteTag} data={list} />
    </View>
  );
};

export default TagScreen;
