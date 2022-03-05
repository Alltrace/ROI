import React from 'react'
import { Text } from 'react-native-paper'
import { SafeAreaView, StyleSheet, TextInput,Button, View } from "react-native";
import Grid from '../component/grid/Grid';
import Overview from './Overview';
import TagScreen from './TagScreen';

const Dashboard = () => {
    
  return (
   <SafeAreaView style={{ flex: 1 }}>
           <Grid/>
   </SafeAreaView>
  )
}

export default Dashboard