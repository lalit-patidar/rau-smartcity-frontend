import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props: any) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: '60%',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.6,
    elevation: 6,
    backgroundColor: 'white',
  },
});

export default Card;
