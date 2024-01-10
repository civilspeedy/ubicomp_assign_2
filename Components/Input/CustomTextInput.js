/**
 * @file contains Custom Text Input component
 * @module CustomTextInput
 */

import { TextInput, View } from 'react-native';
import { globalStyle } from '../../GlobalStyles';

/**
 * A customised text input
 * @param {string} value - the value to be changed
 * @param {function} setValue - function to change a value
 * @param {string} placeholder - placeholder text to be displayed
 * @returns {TextInput}
 */
export default function CustomTextInput({ value, setValue, placeholder }) {
  return (
    <TextInput
      style={globalStyle.input}
      onChangeText={setValue}
      value={value}
      placeholder={placeholder}
    />
  );
}
