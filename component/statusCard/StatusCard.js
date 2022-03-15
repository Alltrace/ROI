import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const StatusCard = ({ productName, quantity, rfid, status }) => {
  return (
    <Card
      style={{
        margin: 10,
        elevation: 5,

        borderRadius: 15,
      }}
    >
      <Card.Content>
        <View>
          <Title style={styles.title}>Tags : {productName}</Title>
          <Paragraph style={styles.Parao}>RFID :{rfid}</Paragraph>
          <Paragraph style={styles.Parat}>QTY :{quantity}</Paragraph>

          <Paragraph style={{ textAlign: "right" }}>{status}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  Parao: {
    fontSize: 13,
  },
  Parat: {
    fontSize: 12,
  },
});

export default StatusCard;
