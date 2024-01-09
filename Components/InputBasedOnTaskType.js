import { Text, TextInput, View } from 'react-native';
import { smoothExpansionAnimation } from '../GlobalStyles';
import NumberInput from './Input/NumberInput';
import CustomTextInput from './Input/CustomTextInput';
import DateSlector from './Input/DateSelector';

export default function TaskTypeEntry({
  type,
  maxWords,
  setMaxWords,
  maxPages,
  setMaxPages,
  subject,
  setSubject,
  slides,
  setSlides,
  startDate,
  setStartDate,
}) {
  // https://reactnative.dev/docs/layoutanimation/
  smoothExpansionAnimation();
  if (type == 'Essay' || type == 'Report' || type == 'Project') {
    // word count, page count,
    return (
      <View>
        <DateSlector date={startDate} setDate={setStartDate} placeholder={'Select A Start Date'} />

        <NumberInput
          value={maxWords}
          setValue={setMaxWords}
          placeholder={"What's the Max Word Count?"}
        />

        <NumberInput
          value={maxPages}
          setValue={setMaxPages}
          placeholder={"What's the Max Page Count?"}
        />

        <CustomTextInput
          value={subject}
          setValue={setSubject}
          placeholder={'What subject/unit is it for?'}
        />
      </View>
    );
  }
  if (type == 'Presentation') {
    // slides, words
    return (
      <View>
        <DateSlector date={startDate} setDate={setStartDate} placeholder={'Select A Start Date'} />

        <NumberInput value={slides} setValue={setSlides} placeholder={'How many slides?'} />
      </View>
    );
  } else {
    return <View></View>;
  }
}
