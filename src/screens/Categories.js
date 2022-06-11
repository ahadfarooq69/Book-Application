import {View, Text } from 'react-native'
import React, { useState } from 'react'
//import MyFlatListForHome from '../../Components/MyFlatListForHome';
//import MyFlatListForHome1 from '../../Components/MyFlatListForHome1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import navigationstring from '../constants/navigationstring';
const Categories = props => {
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
              <Text style={{fontSize:25,fontWeight:'bold'}}>Categories</Text></View>
         
      <View style={{margin:0}}>
<Text style={{fontSize:15,fontWeight:'bold'}}>University Course Books</Text>

<View style={{flexDirection:'row'}}>
     <TouchableOpacity 
     style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginTop:moderateVerticalScale(20)}}
     onPress={() => props.navigation.navigate(navigationstring.MECHANICAL)}
     >
<Text>Mechanical Engineering</Text>
</TouchableOpacity>

<TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginTop:moderateVerticalScale(20)}}
 onPress={() => props.navigation.navigate(navigationstring.ELECTRICAL)}>
<Text>Electrical Engineering</Text>
</TouchableOpacity>
</View>



<View style={{flexDirection:'row'}}>
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),margin:moderateVerticalScale(20)}}
     onPress={() => props.navigation.navigate(navigationstring.COMPUTERSCIENCE)}>
     
<Text>Computer Science</Text>
</TouchableOpacity>

<TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),margin:moderateVerticalScale(20)}}
 onPress={() => props.navigation.navigate(navigationstring.CHEMICAL)}>
<Text>Chemical Engineering</Text>
</TouchableOpacity>
</View>


</View>




<View style={{}}>
  <Text  style={{fontSize:15,fontWeight:'bold'}}>Intermediate Books</Text>
  <View style={{flexDirection:'row'}}>
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginVertical:moderateVerticalScale(20)}}
     onPress={() => props.navigation.navigate(navigationstring.PART1)}>
<Text>Part-1 (Books)</Text>
</TouchableOpacity>

<TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginVertical:moderateVerticalScale(20)}}
 onPress={() => props.navigation.navigate(navigationstring.PART2)} >
<Text>Part-2 (Books)</Text>
</TouchableOpacity>
</View>

</View>



<View style={{}}>
  <Text  style={{fontSize:15,fontWeight:'bold'}}>Matric Books</Text>
  <View style={{flexDirection:'row'}}>
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginVertical:moderateVerticalScale(20)}}
     onPress={() => props.navigation.navigate(navigationstring.NINTH)} >
<Text>9th (Books)</Text>
</TouchableOpacity>

<TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginVertical:moderateVerticalScale(20)}}
onPress={() => props.navigation.navigate(navigationstring.TENTH)}  >
<Text>10th (Books)</Text>
</TouchableOpacity>
</View>

</View>



<View style={{}}>
<Text style={{fontSize:15,fontWeight:'bold'}} >Other Books</Text>

<View style={{alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:50,width:160,borderWidth:2,borderColor:'black',borderRadius:50,backgroundColor:'#20b2',marginHorizontal:moderateScale(10),marginTop:moderateVerticalScale(20)}}
    onPress={() => props.navigation.navigate(navigationstring.OTHERBOOKS)}  >
<Text>Other Books</Text>
</TouchableOpacity>


</View>





</View>

    </View>
  )
}

export default Categories