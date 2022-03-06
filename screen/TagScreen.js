import React from 'react'
import { Text } from 'react-native-paper'
import { View,Button } from 'react-native'
import Scanner from '../component/scanner/Scanner'
import ViewList from '../component/modal/ViewList'

const TagScreen = () => {
  const [list, setList] = React.useState([{}])
  const handleQRData = ({type: type, data: data}) => {
    console.log(type,'--',data, 'QR data');
    const tempList = {tag: data}
    setList([...list, tempList]);
  }
  return (
    <View style={{flex:1}}>
         <Scanner handleChange={handleQRData} style={{padding:90}} />
       <ViewList data={list}/>
    </View>
  )
}

export default TagScreen
