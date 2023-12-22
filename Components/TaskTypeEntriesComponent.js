import { Text, TextInput, View } from "react-native";
import { smoothExpansionAnimation } from "../Styling/GlobalStyles";
import NumberInput from "./NumberInputComponent";
import CustomTextInput from "./CustomTextInputComponent";

export default function TaskTypeEntry({
    type, maxWords, setMaxWords, maxPages, setMaxPages, subject, setSubject, slides, setSlides
}) {
    smoothExpansionAnimation();
    if (type == 'Essay' || type == 'Report' || type == 'Project') {
        // word count, page count,
        return (
            <View>
                <NumberInput value={maxWords} setValue={setMaxWords} placeholder={"What's the Max Word Count?"} />
                <NumberInput value={maxPages} setValue={setMaxPages} placeholder={"What's the Max Page Count?"} />
                <CustomTextInput value={subject} setValue={setSubject} placeholder={"What subject/unit is it for?"} />
            </View>
        );
    }
    if (type == 'Presentation') {
        // slides, words
        return (
            <NumberInput value={slides} setValue={setSlides} placeholder={"How many slides?"} />
        )
    }
    else {
        return (
            <View></View>
        )
    };
};
