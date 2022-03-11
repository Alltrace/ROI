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

import { ScrollView } from "react-native";

const ViewList = ({ data, handleDelete }) => {
  const [visible, setVisible] = React.useState(false);
  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  const navigation = useNavigation();
  const containerStyle = { backgroundColor: "white" };

  return (
    <ScrollView style={{ margin: 15 }}>
      <List.Section>
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
    </ScrollView>
  );
};

export default ViewList;
