import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    width: 300,
    height: 200,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Logo;
