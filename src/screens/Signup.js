import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Picker} from '@react-native-picker/picker';
import {imgx} from '../constants/Images';
import MyTextInput from '../components/MyTextInput';
import MyTouchableOpacity from '../components/MyTouchableOpacity';
import navigationstring from '../constants/navigationstring';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {font} from '../constants/font';
import { COLORX } from '../constants/AppConstants';
import { URL } from '../constants/URLS';
const Signup = props => {
  const [state, setstate] = useState({
    iSloding: true,
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    PhoneNumber:''
  });
  const {iSloding,Image, FirstName, LastName, Email, Password,PhoneNumber} = state;

  const updateState = data => setstate(state => ({...state, ...data}));

  const UploadData = () => {
    const url = URL.My_Database_Url+'users';
    if(Image==""||FirstName==""||LastName==""||Email==""||PhoneNumber==""||Password=="")
      {
        console.log("return")
        return;
      }
    else{
      console.log("Into api")
      const UploadDataCredentials = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        PhoneNumber:PhoneNumber,
        Password: Password,
        isAdmin:"false"
      
      };
      console.log(JSON.stringify(UploadDataCredentials))
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
          console.log('responseData', responseData);
          if (responseData.status == 200) {
            console.log('Data Posted Successfully');
            updateState({
              FirstName:"",
              LastName:"",
              Email:"",
              PhoneNumber:"",
              Password:"",
              
            })
            props.navigation.navigate(navigationstring.LOGIN)
          } else {
            console.log('fail');
          }
        })
        .catch(error => {
          console.log(error, 'error from APi UploadData1212');
        });
    }
    // hit api
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginVertical: moderateVerticalScale(40),
            flex: 1,
          }}>
          <View>
            <Text
              style={{
                marginTop: moderateVerticalScale(20),
                fontSize: scale(font.heading_font),
                fontWeight: '700',
                color: 'black',
              }}>
              Register new account
            </Text>
          </View>
          <View style={{marginTop: moderateVerticalScale(10)}}>
            <Text
              style={{
                fontSize: scale(font.text_font),
                color: 'grey',
                fontWeight: '400',
              }}>
              Please Enter Your Correct Information for safety and security of
              your account
            </Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              flex: 1,
            }}>
              
            <MyTextInput
              mylabel="First Name"
              placeholder="first name"
              autoFocus={false}
              backgroundColor="#eeee"
              color="black"
              keyboardType="name-phone-pad"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({FirstName: e})}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              flex: 1,
            }}>
            <MyTextInput
              mylabel="Last Name"
              placeholder="last name"
              autoFocus={false}
              backgroundColor="#eeee"
              color="black"
              keyboardType="name-phone-pad"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({LastName: e})}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              flex: 1,
            }}>
            <MyTextInput
              mylabel="Email"
              placeholder="example@gmail.com"
              autoFocus={false}
              backgroundColor="#eeee"
              color="black"
              keyboardType="email-address"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({Email: e})}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              flex: 1,
            }}>
            <MyTextInput
              mylabel="Phone Number"
              placeholder="Phone Number"
              autoFocus={false}
              backgroundColor="#eeee"
              color="black"
              keyboardType="numeric"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({PhoneNumber: e})}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              flex: 1,
            }}>
            <MyTextInput
              mylabel="Password"
              placeholder="*******"
              autoFocus={false}
              backgroundColor="#eeee"
              color="black"
              keyboardType="visible-password"
              placeholderTextColor="silver"
              myonchangetext={e => updateState({Password: e})}
              secureTextEntry={true}
            />
          </View>
        </View>




        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: moderateScale(15),
              marginVertical: moderateVerticalScale(10),
              marginBottom:moderateVerticalScale(30),
              flex: 1,
            }}>
            <View style={{  paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(7)}}>
            <Text style={{color:'black'}}>Select Type</Text>
            </View>

          <Picker
          style={{width:320,height:50,backgroundColor:'#eeee',borderRadius: scale(100),borderColor: 'black',}}
        onValueChange={e => updateState({SellType: e})}
        >
        <Picker.item label = "Seller" value = "Seller"/>
        <Picker.item label = "Buyer" value = "Buyer"/>

        </Picker>
          </View>
        </View>



        <View style={{flex: 1,marginVertical:moderateVerticalScale(10)}}>
          <MyTouchableOpacity
            myText="Signup"
            // mycss={{borderRadius: 10}}
            mymulticolor={[
              '#20b2aa',
              '#20b2aa',
              '#20b2aa'
            ]}
            myonpress={() => {
              const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
              const nameRegex = /^[a-zA-Z]{3,10}$/;
              const phoneRegex = /^[0-9]{11,11}$/;
              const phoneRegexwithcode = /^(\+92)+[0-9]{10,10}$/;
              if (
                emailRegex.test(Email) &&
                nameRegex.test(FirstName) &&
                nameRegex.test(LastName) &&
                (phoneRegex.test(PhoneNumber) || phoneRegexwithcode.test(PhoneNumber)) &&
                Password.length >= 7
              ) {
              
                UploadData();
              } else{
                alert('Please Enter Correct Values')
              }
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            marginVertical: moderateVerticalScale(10),
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                color: 'grey',
                fontSize: scale(font.link_font),
                fontWeight: '300',
              }}>
              Already have an Account?{' '}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(navigationstring.LOGIN)}>
              <Text
                style={{
                  fontSize: scale(font.link_font),
                  fontWeight: '500',
                  color: '#20b2aa',
                }}>
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
