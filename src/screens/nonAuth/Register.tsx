import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../../components/logo';
import SignupForm from '../../components/forms/Register';

const SignUp = (props: any) => {
  // const {isSignedUp} = props.user;
  useEffect(() => {
    // if (isSignedUp) {
    //   props.navigation.navigate('validationScreen');
    // }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.formWrapper}>
        <SignupForm navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    flex: 1,
    width: '100%',
    height: '70%',
    paddingHorizontal: 20,
  },
});

export default SignUp;
