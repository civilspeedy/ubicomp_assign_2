/**
 * @file contains custom label component
 * @module Label
 */
import { Text, View } from 'react-native';

/**
 * Bold large text to be used as labels for other components
 * @param {string} text
 * @returns {View}
 */
export default function CustomLabel({ text }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
        }}
      >
        {text}
      </Text>
    </View>
  );
}
