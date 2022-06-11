import {View, Text } from 'react-native'
import React, { useState } from 'react'
//import MyFlatListForHome from '../../Components/MyFlatListForHome';
//import MyFlatListForHome1 from '../../Components/MyFlatListForHome1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import navigationstring from '../../constants/navigationstring';
const Charity = props => {
     const [state, setstate] = useState({
       DataFetched: false,
       Data: [],
       temp: [],
     });
     const {Data, DataFetched} = state;
     const updateState = data => setstate(state => ({...state, ...data}));
  return (
    <View style={{flex: 1}}>
         <View style={{alignItems:'center',justifyContent:'center',margin:moderateVerticalScale(20)}}>
              <Text style={{fontSize:25,fontWeight:'bold'}}>Charity Books</Text></View>
         
     

<View style={{alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginTop:moderateVerticalScale(20)}}
    onPress={() => props.navigation.navigate(navigationstring.DISPLAY)}  >
<Text>Charity</Text>
</TouchableOpacity>


</View>



</View>

  )
}

export default Charity