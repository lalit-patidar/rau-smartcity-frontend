import React from 'react';
import {View, Button, Text} from 'react-native';

export default function MyApp(props: any) {
  return (
    <View>
      <Text>my App ----</Text>
      <Button
        title="click"
        onPress={() => props.navigation.navigate('signInScreen')}
      />
    </View>
  );
}
