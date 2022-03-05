import React from 'react'
import { Text,Card,Title,Paragraph } from 'react-native-paper'
import { View } from 'react-native'

const StatusCard = ({productName, quantity, rfid, status}) => {
  return (
    <Card>
    <Card.Content>
        <View >
        <Title>{productName}</Title>
        <Paragraph >{rfid}</Paragraph>
        <Paragraph >{quantity}</Paragraph>
        <Paragraph style={{textAlign:'right',}}>{status}</Paragraph>
        </View>
    
    </Card.Content>
  </Card>
  )
}

export default StatusCard