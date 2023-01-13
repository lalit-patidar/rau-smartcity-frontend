import React from 'react';
// import {Easing} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyApp from '../../screens/nonAuth/dumy';

import SignInScreen from '../../screens/nonAuth/Sign';
// import RegisterScreen from '../../screens/nonAuth/Register';
// import OtpValidationScreen from '../../screens/nonAuth/otp';

const NonAuth = createStackNavigator();

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 1000,
//     mass: 5,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 300,
//     easing: Easing.cubic,
//   },
// };

const RootStackScreen = () => {
  return (
    <NonAuth.Navigator>
      <NonAuth.Screen name="myApp" component={MyApp} />
      <NonAuth.Screen name="signInScreen" component={SignInScreen} />
      {/* <NonAuth.Screen name="RegisterScreen" component={RegisterScreen} /> */}
    </NonAuth.Navigator>
  );
};

export default RootStackScreen;
