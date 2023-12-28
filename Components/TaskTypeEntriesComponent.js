import { Text, TextInput, View } from "react-native";
import { smoothExpansionAnimation } from "../Styling/GlobalStyles";
import NumberInput from "./NumberInputComponent";
import CustomTextInput from "./CustomTextInputComponent";
import DateSlector from "./DateSelectorComponent";

export default function TaskTypeEntry({
    type, maxWords, setMaxWords, maxPages, setMaxPages, subject, setSubject, slides, setSlides, startDate, setStartDate
}) {
    // https://reactnative.dev/docs/layoutanimation/
    smoothExpansionAnimation();
    if (type == 'Essay' || type == 'Report' || type == 'Project') {
        // word count, page count,
        return (
            <View>
                <DateSlector date={startDate} setDate={setStartDate} />
                <NumberInput value={maxWords} setValue={setMaxWords} placeholder={"What's the Max Word Count?"} />
                <NumberInput value={maxPages} setValue={setMaxPages} placeholder={"What's the Max Page Count?"} />
                <CustomTextInput value={subject} setValue={setSubject} placeholder={"What subject/unit is it for?"} />

            </View>
        );
    }
    if (type == 'Presentation') {
        // slides, words
        return (
            <View>
                <DateSlector date={startDate} setDate={setStartDate} />
                <NumberInput value={slides} setValue={setSlides} placeholder={"How many slides?"} />

            </View>
        )
    }
    else {
        return (
            <View></View>
        )
    };
};
