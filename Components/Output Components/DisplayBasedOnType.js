import { StyleSheet, Text, View } from "react-native";
import CustomLabel from "./LabelComponent";
import { globalColours } from "../../Styling/GlobalStyles";

export default function DisplayBasedOnType({ task }) {
    if (task.format == 'Project' || task.format == 'Report' || task.form == 'Essay') {
        return (
            <View style={styles.infoContainer}>
                <CustomLabel text={'Start Date: '} />
                <Text>{task.start_date}</Text>
            </View>
        );
    };
    if (task.format == 'Presentation') {
        return (
            <View>
                <CustomLabel text={'Start Date: '} />
            </View>
        );
    } else {
        return (
            <View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    infoContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});