import React from 'react'
import { Text,Card,Title,Paragraph } from 'react-native-paper'
import { View } from 'react-native'

const StatusCard = () => {
  return (
    <Card>
    <Card.Content>
        <View >
        <Title>Card title</Title>
        <Paragraph >Card content</Paragraph>
        <Paragraph style={{textAlign:'right',}}>Card content</Paragraph>
        </View>
    
    </Card.Content>
  </Card>
  )
}

export default StatusCard