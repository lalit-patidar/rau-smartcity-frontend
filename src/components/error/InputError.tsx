import React from 'react';
import {Text} from 'react-native';

const InputError = (props: any) => {
  return (
    <Text style={props.style} allowFontScaling={false}>
      {props.error}
    </Text>
  );
};

export default InputError;
