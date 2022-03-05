import React from 'react'
import { Text } from 'react-native-paper'
import { View } from 'react-native'
import StatusCard from '../component/statusCard/StatusCard'
import { overviewAPI } from '../service/api'

const Overview = () => {
  const [tags, setTags] = React.useState([]);

  React.useEffect(async () => {
    const res = await overviewAPI()
    console.log(res.tags, 'overview res');
    setTags(res?.tags);
  }, [])
  
  return (
    <View>
      {tags.map((tag) => (
          <StatusCard productName={tag.product_name} quantity={tag.quantity} rfid={tag.rfid} status={tag.status}/>
      ))}
   
    </View>
  )
}

export default Overview