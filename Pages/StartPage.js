/**
 * @file contains the start page component
 * @module StartPage
 */

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { globalColours, globalStyle, smoothExpansionAnimation } from '../GlobalStyles';
import TitleText from '../Components/Text/TitleTextComponent';
import { minutesToSeconds, timeFormat } from '../Logic/DateFormater';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { impactAsync } from 'expo-haptics';

/**A page containing a timer that lasts for 25 minutes and then for 5 and repeats
 * @param {function} setPage- function that is passes an number value corisponding to current active page
 * @returns {View}
 */
export default function StartPage({ setPage }) {
  const [timerActive, setTimer] = useState(false);
  const [duration, setDuration] = useState(minutesToSeconds(25));
  const [key, setKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      console.log('start page is being looked at');
      setPage(3);
    }, [])
  );

  /**
   * Function to reset the timer's duration based on the previous duration, going from 25 to 5 and vice versa.
   */
  const timerCycle = () => {
    if (duration == minutesToSeconds(25)) {
      setTimer(false);
      setDuration(minutesToSeconds(5));
      setKey((prevKey) => prevKey + 1);
    } else if (duration == minutesToSeconds(5)) {
      setTimer(false);
      setDuration(minutesToSeconds(25));
      setKey((prevKey) => prevKey + 1);
    }
  };

  smoothExpansionAnimation();
  return (
    <View style={globalStyle.pageContainer}>
      <TitleText titleName={'START'} />
      <View style={styles.timerContainer}>
        <CountdownCircleTimer
          key={key}
          isPlaying={timerActive}
          duration={duration}
          onComplete={timerCycle}
          colors={[globalColours.secondary, globalColours.tertiary]}
        >
          {({ remainingTime }) => (
            <Text style={styles.countdownText}>{timeFormat(remainingTime)}</Text>
          )}
        </CountdownCircleTimer>

        {timerActive ? (
          <View style={styles.timerControls}>
            <Pressable
              style={styles.pauseButton}
              onPress={() => {
                setTimer(false);
                impactAsync();
              }}
            >
              <Text style={styles.buttonText}>Pause Timer</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => {
                impactAsync();
                setTimer(false);
                setKey((prevKey) => prevKey + 1);
              }}
            >
              <Text style={styles.buttonText}>Cancel Timer</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={styles.startButton}
            onPress={() => {
              impactAsync();
              setTimer(true);
            }}
          >
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  countdownText: {
    fontWeight: 'bold',
    color: globalColours.secondary,
    fontSize: 50,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 20,
  },
  currentTaskHeader: {
    fontSize: 30,
    color: globalColours.secondary,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: globalColours.tertiary,
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  pauseButton: {
    backgroundColor: '#f65026',
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  timerControls: {
    flexDirection: 'row',
  },
});
