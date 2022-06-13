import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../SplashScreen'
import { moderateScale } from 'react-native-size-matters'

const AdminHome = () => {
  return (
    <View  style={{flex:1}}>

 <View  style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Welcome To Intelligence Online</Text>
</View>

      <View  style={{alignItems:'center',top:moderateScale(30)}}>
 <Text style={{fontSize:24}}>Here you can Add, Delete and Modify your Books You Want to.........</Text>
   </View>
</View>
  )
}

export default AdminHome