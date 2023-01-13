import React, {useRef} from 'react';
import {Picker} from '@react-native-picker/picker';

const SelectPicker = (props: any) => {
  const pickerRef: any = useRef();

  function open() {
    pickerRef.current.focus();
  }

  //   function close() {
  //     pickerRef.current.blur();
  //   }
  return (
    <Picker
      ref={pickerRef}
      onAccessibilityTap={open}
      selectedValue={props.selectedLanguage}
      onValueChange={(itemValue: string) =>
        props.setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default SelectPicker;
