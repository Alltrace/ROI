import React from 'react'
import { Text } from 'react-native-paper'
import { View,Button } from 'react-native'
import Scanner from '../component/scanner/Scanner'
import ViewList from '../component/modal/ViewList'

const TagScreen = () => {
  return (
    <View style={{flex:1}}>
         <Scanner style={{padding:90}} />
       <ViewList/>
    </View>
  )
}

export default TagScreen
