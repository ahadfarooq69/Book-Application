import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  View,
  Text,
} from 'react-native';
const Buy = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{margintop:100}}>
      <Text>Search Your Favorite Books</Text>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};

export default Buy;