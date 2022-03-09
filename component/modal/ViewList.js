import * as React from "react";
import {
  Modal,
  Portal,
  List,
  Text,
  Button,
  Icon,
  Chip,
  Dialog,
  Paragraph,
  Provider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TagPlusAPI } from "../../service/api";

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
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={hideModal}>
          <Dialog.Content>
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
            {data.length > 0 ? (
              <Button
                style={{
                  backgroundColor: "#6c65df",
                  padding: 8,
                  borderRadius: 15,
                }}
                onPress={handleOrder}
                mode="contained"
              >
                Proceed to order
              </Button>
            ) : (
              <Text>No Tags added to the List</Text>
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Button
        style={{
          backgroundColor: "#6c65df",
          marginTop: 30,
          marginHorizontal: 55,
          padding: 8,
          borderRadius: 15,
        }}
        color="white"
        onPress={showModal}
      >
        Show List
      </Button>
    </Provider>
  );
};

export default ViewList;
