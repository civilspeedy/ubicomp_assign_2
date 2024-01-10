/**
 * @file constains the custom calendar component
 * @module CalendarWithTasks
 */

import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { globalColours } from '../GlobalStyles';
import DisplayTasks from './Display/DisplayTasks';
import DateTimePicker from 'react-native-ui-datepicker';

/**
 * A calendar and display that will show tasks related to the selected date
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {Array} tasks - an array containing all tasks
 * @param {Number} points - the current points the user has
 * @param {function} fetchPoints - a function to that updates points via fetching from the database
 * @returns {View}
 */
export default function CustomCanendar({ fetchTasks, tasks, points, fetchPoints }) {
  const [date, setDate] = useState(null);

  /**
   * updates the date value with passed date and calls fetch tasks
   * @param {string} day - a date string
   */
  const pressHandler = (day) => {
    setDate(day);
    fetchTasks();
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <DateTimePicker
          value={date}
          mode='date'
          onValueChange={(justSelected) => pressHandler(justSelected)}
          selectedItemColor={globalColours.secondary}
          headerButtonStyle={styles.calendarNextPageButtons}
          headerButtonColor='black'
          headerTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text>Long press a task for options</Text>
      </View>

      <DisplayTasks
        tasks={tasks}
        date={date}
        fetchTasks={fetchTasks}
        displayType={'both'}
        points={points}
        fetchPoints={fetchPoints}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  calendar: {
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: globalColours.backgroundSecondary,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
});
