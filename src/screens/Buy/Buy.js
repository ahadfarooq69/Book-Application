import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  View,
  Text,
} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
const Buy = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <View style={{top:scale(40)}}>
    <View style={{marginVertical:moderateVerticalScale(20),left:moderateScale(20)}}>
      <Text>Search Your Favorite Books</Text>
      </View>
      <View style={{alignContent:'center',marginLeft:moderateScale(20)}}>
    <Searchbar
    style={{height:60,width:320,borderRadius:100}}
      placeholder="Enter Book Name"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    </View>
    </View>
  );
};

export default Buy;