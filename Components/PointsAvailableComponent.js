import { StyleSheet, View, Text } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";


export default function PointsAvailable({ points }) {
    if (points == 0) {
        return (<View></View>)
    } else {
        return (
            <View style={styles.pointsView}>
                <Text style={styles.headerText}>Points Available:</Text>
                <Text style={styles.pointsText}>{points} <AntDesign name='star' size={20} color={'gold'} /></Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    pointsView: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: globalColours.secondary
    },
    pointsText: {
        backgroundColor: globalColours.tertiary,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        fontSize: 20
    },
});