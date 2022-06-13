import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import MyTextInput from '../components/MyTextInput';
import {Picker} from '@react-native-picker/picker';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import ImagePicker from 'react-native-image-crop-picker';
import {font} from '../constants/font';
import MyTouchableOpacity from '../components/MyTouchableOpacity';
import {URL} from '../constants/URLS';
import navigationstring from '../constants/navigationstring';
const Sell = props => {
  const [state, setstate] = useState({
    isPictureUploadModalVisible: false,
    userImageProfile: '',
    imageFileProfile: '',
    BookName: '',
    SellType: '',
    Description: '',
    Category: '',
    Price:'',
  });
  const {
    isPictureUploadModalVisible,
    userImageProfile,
    imageFileProfile,
    BookName,
    SellType,
    Description,
    Category,
    Price,
  } = state;

  const updateState = data => setstate(state => ({...state, ...data}));



  galleryActionProfile = () => {
    updateState({isPictureUploadModalVisible: !isPictureUploadModalVisible});

    setTimeout(() => {
      chooseFromPhotoesProfile();
    }, 400);
  };
  const UploadData = () => {
    const url = URL.My_Database_Url+'recent';
    if(BookName==""||SellType==""||Category==""||Description==""||Price=="")
      {
        console.log("return")
        return;
      }
    else{
      console.log("Into api")
      const UploadDataCredentials = {
        book_name: BookName,
        sell_type: SellType,
        image:"https://images-na.ssl-images-amazon.com/images/I/41GWbZj4e8L._SX328_BO1,204,203,200_.jpg",
        category: Category,
        description: Description,
        price:Price,
      
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
            props.navigation.navigate(navigationstring.BOTTOMTABHOME)
            updateState({
              BookName:"",
              SellType:"",
              Description:"",
              Category:"",
              Price:"",

            })
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

  cameraActionProfile = () => {
    updateState({
      isPictureUploadModalVisible: !state.isPictureUploadModalVisible,
    });

    setTimeout(() => {
      captureImageProfile();
    }, 400);
  };

  captureImageProfile = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
      // compressImageQuality: 0.7,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'silver',
    }).then(image => {
      updateState({
        userImageProfile: image.path,
        imageFileProfile: image,
      });
      let imagepath =
        Platform.OS === 'ios' ? `file:///${image.path}` : image.path;
      let imagename =
        Platform.OS === 'ios' ? image.filename : `dlximagefromAndroid.JPG`;
      // this.Uploadimage(imagepath, image.mime, imagename);
    });
  };
  chooseFromPhotoesProfile = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
      // compressImageQuality: 0.7,
    }).then(image => {
      updateState({
        userImageProfile: image.path,
        imageFileProfile: image,
      });
      let imagepath =
        Platform.OS === 'ios' ? `file:///${image.path}` : image.path;
      let imagename =
        Platform.OS === 'ios' ? image.filename : `dlximagefromAndroid.JPG`;
      console.log(imagepath);
      console.log(image.mime);
      console.log(imagename);
      //  Uploadimage(imagepath, image.mime, imagename);
    });
  };

  toggleDatePickerModal = show => {
    updateState({showDate: true});
  };

  togglePictureUploadModal = show => {
    updateState({isPictureUploadModalVisible: show});
  };

 

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Modal
        useNativeDriver
        propagateSwipe
        onBackButtonPress={() => togglePictureUploadModal(false)}
        onBackdropPress={() => togglePictureUploadModal(false)}
        isVisible={state.isPictureUploadModalVisible}
        animationIn={'slideInUp'}
        style={styles.bottomModal}>
        <Toast />
        <View style={styles.scrollableModal}>
          <View style={styles.scrollableModalContent1}>
            <View
              style={{
                marginBottom: 0,
                padding: 20,
                backgroundColor: '#rgba(166,166,166,0.4)',
              }}>
              <ScrollView
                ref={ref => (scrollViewRef = ref)}
                onScroll={this.handleOnScroll}
                scrollEventThrottle={16}>
                <View style={styles.btnParentSection}>
                  <TouchableOpacity
                    onPress={() => galleryActionProfile()}
                    style={styles.btnSection}>
                    <Text style={styles.btnText}>Image Gallery</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => cameraActionProfile()}
                    style={styles.btnSection}>
                    <Text style={styles.btnText}>Camera</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                  <TouchableOpacity
                    onPress={() =>
                      updateState({isPictureUploadModalVisible: false})
                    }
                    style={styles.btnSection}>
                    <Text style={[styles.btnText, {color: 'red'}]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginVertical: moderateVerticalScale(30),
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
              Add Your Book
            </Text>
          </View>
          <View style={{marginTop: moderateVerticalScale(10)}}>
            <Text
              style={{
                fontSize: scale(font.text_font),
                color: 'grey',
                fontWeight: '400',
              }}>
              Please Provide Valid information to avoid any inconvinence
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: moderateVerticalScale(150),
              width: moderateScale(150),
              borderRadius: scale(100),
              
              borderColor: 'black',
            }}
            onPress={() => togglePictureUploadModal(true)}>
            <View>
              <Image
                style={{
                  height: moderateVerticalScale(148),
                  width: moderateScale(148),
                  
                }}
                source={{
                  uri: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
                  // uri:'https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg',
                  // uri:'file:///storage/emulated/0/Android/data/com.spicycottage.arslan/files/Pictures/634c0634-4e64-4b52-a7ac-7d7cce730088.jpg'
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(20),
          }}>
          <MyTextInput
            mylabel="Book Name"
            placeholder="Book Name"
            autoFocus={false}
            backgroundColor="#eeee"
            color="black"
            placeholderTextColor="silver"
            myonchangetext={e => updateState({BookName: e})}
          />
        </View>
        <View
          style={{
            paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(20),
          }}>
             <View style={{  paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(7)}}>
            <Text style={{color:'black'}}>Select Sell Type</Text>
            </View>

          <Picker
          style={{width:320,height:50,backgroundColor:'#eeee',borderRadius: scale(100),borderColor: 'black',}}
        onValueChange={e => updateState({SellType: e})}
        >
        <Picker.item label = "Sell Book" value = "Sell"/>
        <Picker.item label = "Charity Book" value = "Charity"/>

        </Picker>
        </View>
        <View
          style={{
            paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(20),
          }}>

            <View style={{  paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(7)}}>
            <Text style={{color:'black'}}>Select Book Category</Text>
            </View>
          <View style={{}}>
        <Picker
          style={{width:320,height:50,backgroundColor:'#eeee',borderRadius: scale(100),borderColor: 'black',}}
        onValueChange={e => updateState({Category: e})}
        >
        <Picker.item label = "Electrical" value = "EE"/>
        <Picker.item label = "Mechanical" value = "ME"/>
        <Picker.item label = "Chemical" value = "CE"/>
        <Picker.item label = "ComputerScience" value = "CS"/>
        <Picker.item label = "Electrical" value = "EE"/>
        <Picker.Item label="Java" value="java" />
         <Picker.Item label="JavaScript" value="js" />
        </Picker>
</View>
        </View>
        <View
          style={{
            paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(20),
          }}>
          <MyTextInput
            mylabel="Description"
            placeholder="Enter Description"
            autoFocus={false}
            backgroundColor="#eeee"
            color="black"
            placeholderTextColor="silver"
            myonchangetext={e => updateState({Description: e})}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View
          style={{
            paddingVertical: moderateVerticalScale(10),
            paddingHorizontal: moderateScale(20),
            marginBottom:20
          }}>
          <MyTextInput
            mylabel="Book Price"
            placeholder="Enter Price of Book"
            autoFocus={false}
            backgroundColor="#eeee"
            color="black"
            placeholderTextColor="silver"
            myonchangetext={e => updateState({Price: e})}
          />
        </View>

        <MyTouchableOpacity
          myText="Add Book"
          mycss={{borderRadius: 10}}
          mymulticolor={['#20b2aa', '#20b2aa', '#20b2aa']}
          myonpress={() => {
            UploadData();
          }}
        />
        <View style={{height:150}}></View>
      </ScrollView>
    </View>
  );
};


export default Sell;

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 10,
    height: 45,
    width: '100%',
    justifyContent: 'center',
  },
  graphStyle: {
    flex: 1,
    paddingRight: 25,

    marginVertical: 8,
    borderRadius: 16,
  },
  loginScreenContainer: {
    paddingHorizontal: 20,
  },
  image: {
    width: '100%' / 2,
    alignSelf: 'center',
  },
  loginFormView: {
    marginTop: 50,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    backgroundColor: '#EFEEF4',
    paddingHorizontal: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    width: '100%',
    justifyContent: 'center',
  },
  bottomModal: {
    
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 250,
  },
  scrollableModalContent1: {
    backgroundColor: '#fff',
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageProfile: {
    width: 130,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 40,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 45,
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
  },
});