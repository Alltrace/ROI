import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { gridPage as data } from "../../constant/constant";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
const Grid = () => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View key={item.title} style={[styles.itemInvisible]} />;
    }
    return (
      <Card
        key={item.title}
        style={styles.item}
        onPress={() => navigation.navigate(item.path)}
      >
        <IconButton
          icon={item.icon}
          size={40}
          onPress={() => navigation.navigate(item.path)}
        />
        <Text style={styles.itemIcon}> {item.title}</Text>
      </Card>
    );
  };
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      onPress={() => navigation.navigate(item.path)}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 10,
    height: 130,
    width: "45%",
    backgroundColor: "#e2e1f9",
    borderWidth: 2,
    margin: 10,
    borderColor: "#6c65df",

    alignItems: "center",
    justifyContent: "center",
    // approximate a square
  },
  itemIcon: {
    fontSize: 20,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
  },
});

export default Grid;
