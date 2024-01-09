import { View, TextInput } from 'react-native';
import { globalStyle } from '../../GlobalStyles';

export default function NumberInput({ value, setValue, placeholder }) {
  return (
    <TextInput
      style={globalStyle.input}
      onChangeText={setValue}
      value={value}
      keyboardType='numeric'
      placeholder={placeholder}
    />
  );
}
