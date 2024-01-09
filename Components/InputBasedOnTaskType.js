import { View } from 'react-native';
import { smoothExpansionAnimation } from '../GlobalStyles';
import NumberInput from './Input/NumberInput';
import CustomTextInput from './Input/CustomTextInput';
import DateSlector from './Input/DateSelector';

/**
 * A component to display different types of data entry based on the type of task the user is trying to create
 * @param {string} type - the format/type of task
 * @param {number} maxWords - the maximum amount of words execpted for the task
 * @param {function} setMaxWords - function to change the value of maxWords
 * @param {number} maxPages - the value for the maximum amount of pages for the task
 * @param {function} setMaxPages - function to change the value of maxPages
 * @param {string} subject - the type of subject the task is under
 * @param {function} setSubject - function to change the value of subject
 * @param {number} slides - the amount of slides for the task
 * @param {function} setSlides - function to change the value of slides
 * @param {string} startDate - the start date of the task
 * @param {function} setStartDate - function to change the value of startDate
 * @returns {View}
 */
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
  smoothExpansionAnimation();
  if (type == 'Essay' || type == 'Report' || type == 'Project') {
    // word count, page count,
    return (
      <View>
        <DateSlector
          date={startDate}
          setDate={setStartDate}
          placeholder={'Select A Start Date'}
        />

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
        <DateSlector
          date={startDate}
          setDate={setStartDate}
          placeholder={'Select A Start Date'}
        />

        <NumberInput
          value={slides}
          setValue={setSlides}
          placeholder={'How many slides?'}
        />
      </View>
    );
  } else {
    return <View></View>;
  }
}
