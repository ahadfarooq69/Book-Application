import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {imgx} from '../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {font} from '../constants/font';
import Header from '../components/Header';
import navigationstring from '../constants/navigationstring';
import {COLORX} from '../constants/AppConstants';
const ItemDetailScreen = props => {
  const [state, setstate] = useState({
    quantity: 1,
    item: [],
    itemsize: [],
    itemlength: [],
    price: 0,
    instruction: '',
    selected_item_type: [],
    cartlist: [],
  });
  const {
    quantity,
    cartlist,
    instruction,
    selected_item_type,
    price,
    itemlength,
    itemsize,
    item,
  } = state;
  const updateState = data => setstate(state => ({...state, ...data}));
  useEffect(() => {
    updateState({
      item: props.route.params,
      itemsize: item.size,
    });
    updateState({itemlength: []});
    itemsize
      ? itemsize.map((val, index) => {
          itemlength.push(false);
        })
      : updateState({itemlength: []});
    updateState({price: item.price});
  }, [itemsize]);

  const CartToken = async (id, name, image, size, price, quantity) => {
    try {
      const value = await AsyncStorage.getItem('@StoreData');
      if (value == null) {
        try {
          const item = [{id, name, image, size, price, quantity}];
          const newitem = JSON.stringify(item);
          await AsyncStorage.setItem('@StoreData', newitem);
          console.log('Data Added');
        } catch (error) {
          console.log('set 1st item error', error.message);
        }
      } else {
        const item = {id, name, image, size, price, quantity};
        const storeitems = JSON.parse(value);
        let itemexist = false;
        storeitems.map(storeitem => {
          if (storeitem.id == item.id && storeitem.size == item.size) {
            itemexist = true;
            storeitem.quantity = storeitem.quantity + item.quantity;
          }
        });
        if (!itemexist) {
          storeitems.push(item);
        }
        try {
          const newitem = JSON.stringify(storeitems);
          AsyncStorage.setItem('@StoreData', newitem);
        } catch (error) {
          console.log('new item error', error.message);
        }
      }
      props.navigation.goBack();
    } catch (error) {
      console.log('get item error', error.message);
    }
  };
  const Number = '+92 3056804219'
  const url = "https://web.facebook.com/?_rdc=1&_rdr"
  const openUrl = async (url)=>
  {
    const issupported = await Linking.canOpenURL(url);
    if (issupported)
    {
      await Linking.openurl(url);
    }
    else
    {
Alert.alert('Dont know  how to open : ${url}')
    }
 
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <ImageBackground
            style={{height: moderateScale(400)}}
            source={{uri: item.image}}>
            <View style={{paddingHorizontal: moderateScale(20)}}>
              <Header
                Is_left_icon={true}
                left_icon={imgx.goBack}
                left_style={{
                  tintColor: 'white',
                  height: moderateScale(20),
                  width: moderateScale(20),
                }}
                left_onpress={() => {
                  props.navigation.goBack();
                }}
                Is_header_center={false}
                Is_right_icon={true}
                right_icon={imgx.add_to_cart}
                right_style={{
                  tintColor: 'white',
                  height: moderateScale(20),
                  width: moderateScale(20),
                }}
                right_onpress={() => {
                  props.navigation.navigate(navigationstring.ADDTOCART);
                }}
              />
            </View>
          </ImageBackground>

          <View
            style={{
              marginTop: moderateVerticalScale(20),
              marginHorizontal: moderateScale(20),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: scale(25),
                  fontWeight: '700',
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: scale(15),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Rs {price}
              </Text>
            </View>
            {itemsize ? (
              <View>
             
                <View
                  style={{
                    paddingTop: moderateVerticalScale(20),
                    paddingRight: moderateScale(0),
                    flexDirection: 'column',
                  }}>
                  {itemsize.map((value, index) => (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      key={index}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: moderateVerticalScale(10),
                      }}
                      onPress={() => {
                        itemlength.map((e, i) => {
                          itemlength[i] = false;
                        });

                        itemlength[index] = true;

                        updateState({
                          selected_item_type: value,
                          price: value[1],
                        });
                      }}>
                      <Image
                        style={{
                          marginRight: moderateScale(10),
                          width: moderateScale(30),
                          tintColor: '#20b2aa',
                          height: moderateScale(30),
                        }}
                        source={
                          itemlength[index]
                            ? imgx.radio_button_on
                            : imgx.radio_button_off
                        }
                      />
                      <Text
                        style={{
                          flex: 1,
                          fontSize: scale(14),
                          fontWeight: '600',
                          color: 'black',
                        }}>
                        {value[0]}
                      </Text>
                      <Text
                        style={{
                          paddingRight: moderateScale(10),
                          fontSize: scale(14),
                          fontWeight: '600',
                          color: 'black',
                        }}>
                        Rs {value[1]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ) : (
              <View></View>
            )}
           
            <View style={{top: -15}}>
              <Text
                style={{
                  paddingTop: moderateVerticalScale(20),
                  color: 'black',
                  fontSize: scale(16),
                  fontWeight: '600',
                }}>
                About {item.name}
              </Text>
              <Text
                style={{
                  color: COLORX.gray04,
                }}>
                {item.info}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{alignItems:'center',justifyContent:'center',bottom:10}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORX.gray00,
          borderTopRightRadius: scale(20),
          borderTopLeftRadius: scale(20),
          paddingLeft: moderateScale(10),
        }}>
       
        <TouchableOpacity
          style={{
            height:40,
            width:160,
            marginHorizontal: moderateScale(50),
            marginVertical: moderateVerticalScale(5),
            borderRadius: scale(10),
            backgroundColor: '#20b2aa',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (selected_item_type.length == 2) {
              CartToken(
                item.id,
                item.name,
                item.image,
                selected_item_type[0],
                parseInt(selected_item_type[1]),
                quantity,
              );
            } else {
              alert('Please Select the buying type.');
            }
          }}>
            <View
             onPress={()=>{
               Linking.openURL('whatsapp ://send?phone=${contact}&text=${message}')
             }}
            >
          <Text
            style={{
              textAlign: 'center',
              fontSize: scale(15),
              color: 'white',
              fontWeight: '600',
            }}>
            Go To Whatsapp
          </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  image_view_style: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(20),
    alignItems: 'center',
    width: '100%',
    // backgroundColor:"red"
  },
});
