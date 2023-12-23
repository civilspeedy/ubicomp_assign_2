import { TextInput, View } from "react-native";
import { globalStyle } from "../Styling/GlobalStyles";

export default function CustomTextInput({ value, setValue, placeholder }) {
    return (
        <View >
            <TextInput style={globalStyle.input}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder} />
        </View>
    );
};