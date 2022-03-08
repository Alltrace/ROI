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
import { TagPlusAPI } from "../../service/api";

const ViewList = ({ data }) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white" };

  const handleOrder = async () => {
    const res = await TagPlusAPI(data);
    console.log(res, "res order");
  };

  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={hideModal}>
          <Dialog.Content>
            {data.map((list, index) => (
              <>
                {console.log(list, "map-list-check")}
                <List.Item
                  title={list.tag}
                  right={(props) => <List.Icon {...props} icon="delete" />}
                />
              </>
            ))}
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
