import TitleText from "../Components/Output Components/TitleTextComponent";
import { View } from "react-native";
import { globalStyle } from "../Styling/GlobalStyles";

export default function ScoreStorePage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"SCORE STORE"} />
        </View>
    );
};