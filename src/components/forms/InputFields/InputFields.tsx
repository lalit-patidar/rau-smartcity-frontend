import React from 'react';
import {View, TextInput} from 'react-native';

const InputField = (props: any) => {
  <View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#808080"
        onChangeText={(text: string) => {
          props.onTextInputChange(text, 'phoneNumber');
        }}
        keyboardType="numeric"
        maxLength={10}
        placeholder="PhoneNumber"
        autoCapitalize="none"
        ref={props.textInput}
      />

      {formValues.phoneNumber.length > 0 && (
        <InputClear
          style={styles.passwordIcon}
          onPress={props.clearInputText}
        />
      )}
    </View>
    {props.formErrors.phoneNumber && (
      <InputError error={props.formErrors.phoneNumber} style={styles.errors} />
    )}
  </View>;
};

export default InputField;