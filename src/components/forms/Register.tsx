import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {connect} from 'react-redux';
// import * as actions from '../Store/actions/index';
import Indicator from '../Indicator';
import {useNetInfo} from '@react-native-community/netinfo';
import InputClear from '../InputClear';
import InputError from '../error/InputError';
import SelectPicker from './SelectColonyName';

const {height} = Dimensions.get('window');

const AnimatedSignupForm = (props: any) => {
  // const [showPassword, setShowPassword] = useState(true);
  // const {formValues, formValidity, formErrors} = props.userSignupForm;
  const textInput: any = useRef();
  const netInfo = useNetInfo();

  const onSubmitForm = () => {
    if (Object.values(formValidity).every(Boolean)) {
      props.onSignUp(formValues);
      // props.onReset();
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          text: formValues[key],
        };
        props.handleValidation(target);
      }
    }
  };

  return (
    <ScrollView style={styles.formWrapper}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#808080"
          onChangeText={text => {
            props.onTextInputChange(text, 'userName');
          }}
          maxLength={18}
          placeholder="UserName"
          autoCapitalize="none"
        />
      </View>
      {props.formErrors.userName && (
        <InputError error={props.formErrors.userName} style={styles.errors} />
      )}

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#808080"
          onChangeText={text => {
            props.onTextInputChange(text, 'phoneNumber');
          }}
          keyboardType="numeric"
          maxLength={10}
          placeholder="PhoneNumber"
          autoCapitalize="none"
          ref={textInput}
        />

        {formValues.phoneNumber.length > 0 && (
          <InputClear
            style={styles.passwordIcon}
            onPress={props.clearInputText}
          />
        )}
      </View>
      {props.formErrors.phoneNumber && (
        <InputError
          error={props.formErrors.phoneNumber}
          style={styles.errors}
        />
      )}

      <View style={styles.inputView}>
        <SelectPicker />
      </View>
      {props.formErrors?.colonyName && (
        <InputError
          error={props.formErrors?.colonyName}
          style={styles.errors}
        />
      )}

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#808080"
          onChangeText={text => {
            props.onTextInputChange(text, 'houseNo');
          }}
          maxLength={18}
          placeholder="houseNo"
          autoCapitalize="none"
        />
      </View>
      {props?.formErrors?.houseNo && (
        <InputError error={props?.formErrors?.houseNo} style={styles.errors} />
      )}

      {netInfo.isConnected ? (
        !props.isLoading ? (
          <TouchableOpacity style={styles.button} onPress={onSubmitForm}>
            <Text style={styles.buttonText} allowFontScaling={false}>
              SignUp
            </Text>
          </TouchableOpacity>
        ) : (
          <Indicator />
        )
      ) : (
        <TouchableOpacity style={styles.errorButton}>
          <Text style={styles.buttonText} allowFontScaling={false}>
            No Connection!
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.SignupWrapper}>
        <Text style={styles.linkWrapper} allowFontScaling={false}>
          Already have an account? {'  '}
          <Text
            style={styles.link}
            allowFontScaling={false}
            onPress={() => props.navigation.navigate('signInScreen')}>
            SignIn
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  inputView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    color: 'black',
    backgroundColor: 'white',
    zIndex: 5,
  },
  passwordIcon: {
    marginHorizontal: 5,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#1aa1a5',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  errorButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#DC143C',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
  },
  labels: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: 'Lato_700Bold',
    color: 'black',
  },
  errors: {
    color: 'red',
    marginVertical: 5,
    fontSize: 12,
    fontFamily: 'Lato_400Regular',
  },
  SignupWrapper: {
    width: '100%',
    height: 50,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    marginBottom: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height >= 760 ? '60%' : height >= 720 ? '50%' : '25%',
  },
  linkWrapper: {
    marginLeft: 30,
    color: 'grey',
    fontFamily: 'Nunito-Light',
  },
  link: {
    fontSize: 15,
    color: '#1aa1a5',
    fontFamily: 'Nunito-Bold',
  },
});

export default AnimatedSignupForm;
