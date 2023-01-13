import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';

const InputClear = (props: any) => {
  return (
    <TouchableOpacity
      style={props.styles}
      onPress={() => {
        props.textInput.current.clear();
        props.clearInputText('phoneNumber');
      }}>
      {/* <Entypo name="cross" size={25} color="#bbb" /> */}
      <Text>x</Text>
    </TouchableOpacity>
  );
};

export default InputClear;
