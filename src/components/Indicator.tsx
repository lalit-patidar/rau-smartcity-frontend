import React from 'react';
import {View, ActivityIndicator} from 'react-native';

function Indicator(props: any) {
  return (
    <View style={props.style}>
      <ActivityIndicator
        size={props.size ? props.size : 'large'}
        color="#808080"
      />
    </View>
  );
}

export default Indicator;
