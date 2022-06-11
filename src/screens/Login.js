import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {imgx} from '../constants/Images';
import {URL} from '../constants/URLS';
import MyTextInput from '../components/MyTextInput';
import MyTextInputForPassword from '../components/MyTextInputForPassword';
import MyTouchableOpacity from '../components/MyTouchableOpacity';
import {COLORX, Font, FONT} from '../constants/AppConstants';
import navigationstring from '../constants/navigationstring';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = props => {
  const [state, setstate] = useState({
    TogglePassView: true,
    Email: '',
    Password: '',
    IsLoading: false,
    IsPressed: false,
    Data: [],
  });
  const {Email, Password, TogglePassView, IsLoading, Data, IsPressed} = state;

  const updateState = data => setstate(state => ({...state, ...data}));

  const SaveUser = async user => {
    try {
      const myuser = JSON.stringify(user);
      await AsyncStorage.setItem('@UserData', myuser).then(() => {
        console.log('user Updated');
      });
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const VerifyUser = () => {
      const url = URL.My_Database_Url + 'userLogin';

      console.log('Into api');

      if (Email == '' || Password == '') {
        updateState({IsLoading: false});
      } else {
        const UploadDataCredentials = {
          Email,
          Password,
        };
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(UploadDataCredentials),
        })
          .then(response => response.text())
          .then(async responseText => {
            let responseData = JSON.parse(responseText);
            if (responseData.status == 200) {
              console.log(responseData.user)
              SaveUser(responseData.user);

              props.navigation.replace(navigationstring.BOTTOMTABHOME);
            } else {
              updateState({IsLoading: false});

              Alert.alert('Invalid Email or Password');
            }
          })
          .catch(error => {
            console.log(error, 'error from APi Check User');
          });
      }
   
  };




  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
       

        <View>
  <ImageBackground
  source={{uri:'https://www.protocol.com/media-library/librarians-depend-on-libby-but-they-also-worry-that-its-newfound-popularity-could-seriously-strain-their-budgets.jpg?id=25634798&width=1245&quality=85&coordinates=0%2C230%2C0%2C230&height=700'}}
  style={{height:moderateScale(250),
    width:'100%',
    justifyContent:'center',
    alignItems:'center'}}>
  <Text style={{fontSize:scale(35),
           color:'white',
           fontWeight:'bold'}}>LOGIN</Text>
  </ImageBackground>
</View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(30),
              marginTop: moderateVerticalScale(15),
              flex: 1,
            }}>
            <MyTextInput
              mylabel="Email"
              placeholder="Email Address"
              autoFocus={false}
              backgroundColor="white"
              color="black"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({Email: e})}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(30),
              marginTop: moderateVerticalScale(15),

              flex: 1,
            }}>
            <MyTextInputForPassword
              mylabel="Enter Password"
              // img={ShowPass}
              myicon2={TogglePassView ? imgx.hide_pass : imgx.show_pass}
              placeholder="••••••••"
              autoFocus={false}
              backgroundColor="white"
              color="black"
              placeholderTextColor="silver"
              iconpress={() => {
                updateState({TogglePassView: !TogglePassView});
              }}
              myonchangetext={e => updateState({Password: e})}
              secureTextEntry={TogglePassView}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginHorizontal: moderateScale(30),
            marginTop: moderateVerticalScale(15),
            flexDirection: 'row-reverse',
          }}
          onPress={() =>
            props.navigation.navigate(navigationstring.FORGOTPASSWORD)
          }>
          <Text style={{color: '#20b2aa' , fontSize: 12}}>ForgetPassword?</Text>
        </TouchableOpacity>
        <View style={{flex: 1, marginVertical: moderateVerticalScale(30)}}>
          <MyTouchableOpacity
            myText="Login As a Buyer"
            // mycss={{borderRadius: 10}}
            mymulticolor={
              IsLoading ? ['#20b2aa', '#20b2aa', '#20b2aa'] : ['#20b2aa', '#20b2aa', '#20b2aa']
            }
            
            myonpress={() => {
             props.navigation.navigate(navigationstring.BOTTOMTABHOME)
            
             // VerifyUser()
           }}
           >

           </MyTouchableOpacity>
        </View>


        <View style={{flex: 1, marginBottom: moderateVerticalScale(0)}}>
          <MyTouchableOpacity
            myText="Login As a Seller"
            // mycss={{borderRadius: 10}}
            mymulticolor={
              IsLoading ? ['#20b2aa', '#20b2aa', '#20b2aa'] : ['#20b2aa', '#20b2aa', '#20b2aa']
            }
            
            myonpress={() => {
             props.navigation.navigate(navigationstring.ADMINBOTTOMTAB)
            
             // VerifyUser()
           }}
           >

           </MyTouchableOpacity>
           </View>
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'row',
          // backgroundColor:"red",
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              color: 'grey',
              fontSize: scale(12),
              fontWeight: '300',
            }}>
            Do not have an Account?{' '}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(navigationstring.SIGNUP)}>
            <Text
              style={{
                fontSize: scale(12),
                fontWeight: '500',
                color: '#20b2aa' ,
              }}>
              Signup Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
