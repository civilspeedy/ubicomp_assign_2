import { Text, View } from "react-native";

export default function CustomLabel({ text }) {
    return (
        <View>
            <Text style={{
                fontSize: 25,
                alignSelf: 'center',
                fontWeight: 'bold'
            }}>
                {text}
            </Text>
        </View>
    );
};