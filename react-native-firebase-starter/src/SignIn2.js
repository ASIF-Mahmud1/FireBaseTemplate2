import React from 'react';
import {View, Text} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class SignIn extends React.Component{
state= {
  userInfo: 'Fook'
}
async  componentDidMount()
  {
    //////////////////////////////////////////////////
    try {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // google services are available
} catch (err) {
  console.error('play services are not available');
}
    //////////////////////////////////////////////////
    /////////////////////////////////////////////////////

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '819263454190-mpstuar45s8btq2plmk6iiqsiuipokjq.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });
    ////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////
    _signIn = async () => {
     try {
       await GoogleSignin.hasPlayServices();
       const userInfo = await GoogleSignin.signIn();
       this.setState({ userInfo: userInfo },()=>{console.log('Loola ',userInfo)});
     } catch (error) {
       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
         // user cancelled the login flow
       } else if (error.code === statusCodes.IN_PROGRESS) {
         // operation (f.e. sign in) is in progress already
       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
         // play services not available or outdated
       } else {
         // some other error happened
       }
     }
   }

    ///////////////////////////////////////////////////////////
  }

  render()
  {
    console.log('LAlal', this.state.userInfo)
    return(
      <View>
        <Text>Google SignIn Naah  </Text>
        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}

        />
      </View>
    )
  }
}

export default SignIn;
