import { View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles";

export default function StreakPage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"STREAK"} />
        </View>
    );
};