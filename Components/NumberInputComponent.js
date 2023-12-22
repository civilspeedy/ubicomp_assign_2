import { View, TextInput } from "react-native"
import { globalStyle } from "../Styling/GlobalStyles"

export default function NumberInput({ value, setValue, placeholder }) {
    return (
        <View>
            <TextInput style={globalStyle.input}
                keyboardType='numeric'
                value={value}
                onTextInput={() => { setValue(value) }}
                placeholder={placeholder} />
        </View>
    )
};