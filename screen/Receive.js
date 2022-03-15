import React from "react";
import { Text, Card, Button } from "react-native-paper";
import { View } from "react-native";
import Scanner from "../component/scanner/Scanner";
import ViewList from "../component/modal/ViewList";
import { TagPlusAPI } from "../service/api";
import { testDuplicate } from "../utils/utils";
import { useNavigation } from "@react-navigation/native";

const Receive = () => {
  const [list, setList] = React.useState([]);
  const navigation = useNavigation();

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
  const handleOrder = async () => {
    const res = await TagPlusAPI(list);
    navigation.navigate("Dashboard");
  };

  return (
    <View style={{ flex: 1 }}>
      <Scanner handleChange={handleQRData} style={{ padding: 90 }} />
      <ViewList handleDelete={handleDeleteTag} data={list} />
      {list.length > 0 ? (
        <Button
          style={{
            backgroundColor: "#6c65df",
            padding: 8,
            borderRadius: 15,
            marginHorizontal: 10,
            marginBottom: 10,
          }}
          onPress={handleOrder}
          mode="contained"
        >
          Proceed to order
        </Button>
      ) : (
        <Card style={{ margin: 25, marginBottom: 250 }}>
          <Text style={{ textAlign: "center", padding: 10 }}>
            No Tags added to the List
          </Text>
        </Card>
      )}
    </View>
  );
};

export default Receive;
