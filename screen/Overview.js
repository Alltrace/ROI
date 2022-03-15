import React from "react";
import { Text } from "react-native-paper";
import { View, ScrollView } from "react-native";
import StatusCard from "../component/statusCard/StatusCard";
import { overviewAPI } from "../service/api";

const Overview = () => {
  const [tags, setTags] = React.useState([]);

  React.useEffect(async () => {
    const res = await overviewAPI();
    setTags(res?.tags);
  }, []);

  return (
    <ScrollView>
      {tags.map((tag, index) => (
        <StatusCard
          key={index}
          productName={tag.product_name}
          quantity={tag.quantity}
          rfid={tag.rfid}
          status={tag.status}
        />
      ))}
    </ScrollView>
  );
};

export default Overview;
