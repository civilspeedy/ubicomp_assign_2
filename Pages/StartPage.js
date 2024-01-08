import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { globalColours, globalStyle, smoothExpansionAnimation } from '../Styling/GlobalStyles';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { minutesToSeconds, timeFormat } from '../Logic/DateFormater';
import { useState } from 'react';

export default function StartPage() {
  const [timerActive, setTimer] = useState(false);
  const [duration, setDuration] = useState(minutesToSeconds(25));
  const [firstStart, setFirstStart] = useState(true);
  const [key, setKey] = useState(0);

  const timerCycle = () => {
    if (duration === minutesToSeconds(25)) {
      setTimer(false);
      setDuration(minutesToSeconds(5));
      setKey((prevKey) => prevKey + 1);
    } else if (duration === minutesToSeconds(5)) {
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
              onPress={() => setTimer(false)}
            >
              <Text style={styles.buttonText}>Pause Timer</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => {
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
              if (firstStart) {
                // TODO: create modal asking how long the user wants the timer to be
              }
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
