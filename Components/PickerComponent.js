import { PureComponent, useState } from "react";
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";

export default function Picker({ pickerLabel, items, setValue }) {
    const [expanded, setexpanded] = useState(false);
    const [label, setLabel] = useState(pickerLabel);


    return (
        <View >
            <Pressable style={styles.button}
                onPress={() => {
                    smoothExpansionAnimation();
                    setexpanded(!expanded);
                }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>{label}</Text>
            </Pressable>
            {expanded && (
                <View style={{ marginTop: -4, marginBottom: 5 }}>
                    {items.map((type, index) => (
                        <Pressable
                            key={index}
                            style={styles.dropDownElement}
                            onPress={() => {
                                setValue(type);
                                setLabel(type);
                                smoothExpansionAnimation();
                                setexpanded(!expanded);
                            }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{type}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: globalColours.tertiary,
        marginHorizontal: 20,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
    },
    dropDownElement: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#3d6e5b',
    },
});