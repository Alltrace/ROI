import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions,Button } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const data = [{
    title: 'Order',
    icon: 'order',
    path: 'TagScreen'
},
{
    title: 'Receive',
    icon: 'Receive',
    path: 'TagScreen'
},
{
    title: 'Overview',
    icon: 'Overview',
    path: 'Overview'
}
]

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
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
          return <View key={item.title} style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <Card key={item.title}  style={styles.item} onPress={() => navigation.navigate(item.path)}>
          
          <Text> {item.icon}</Text>
          <Text> {item.title}</Text>
          </Card>
        );
      };
  return (
    <FlatList
    data={formatData(data, numColumns)}
    style={styles.container}
    renderItem={renderItem}
    numColumns={numColumns}
  />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default Grid