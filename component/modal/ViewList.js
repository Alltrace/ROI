import * as React from "react";
import {
  Modal,
  Portal,
  List,
  Text,
  Button,
  Card,
  Icon,
  Chip,
  Dialog,
  Paragraph,
  Provider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TagPlusAPI } from "../../service/api";
import { ScrollView } from "react-native";

const ViewList = ({ data, handleDelete }) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const navigation = useNavigation();
  const containerStyle = { backgroundColor: "white" };

  const handleOrder = async () => {
    const res = await TagPlusAPI(data);
    navigation.navigate("Dashboard");
    console.log(res, "res order");
  };
  return (
    <ScrollView style={{ margin: 15 }}>
      <List.Section style={{ maxHeight: 150 }}>
        {data.map((list, index) => (
          <List.Item
            key={index}
            title={list.tag}
            right={() => (
              <Button
                icon="delete"
                onPress={() => handleDelete(index)}
              ></Button>
            )}
          />
        ))}
      </List.Section>

      {data.length > 0 ? (
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
        <Card style={{ margin: 15 }}>
          <Text style={{ textAlign: "center", padding: 10 }}>
            No Tags added to the List
          </Text>
        </Card>
      )}
    </ScrollView>
  );
};

export default ViewList;
