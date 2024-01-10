/**
 * @file contains Number Input component
 * @module NumberInput
 */
import { TextInput } from 'react-native';
import { globalStyle } from '../../GlobalStyles';

/**
 * A customised TextInput made specifically for number input
 * @param {number} value - the value to be changed, passed to be displayed in placeholder
 * @param {function} setValue - function to change a value
 * @param {string} placeholder - placeholder to be displayed inside TextInput
 * @returns {TextInput}
 */
export default function NumberInput({ value, setValue, placeholder }) {
  return (
    <TextInput
      style={globalStyle.input}
      onChangeText={setValue}
      keyboardType='numeric'
      placeholder={placeholder}
    />
  );
}
