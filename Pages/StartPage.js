import { Pressable, StyleSheet, Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import TitleText from "../Components/TitleTextComponent";
import { timeFormat } from "../Logic/DateFormater";
import { useState } from "react";
import CurrentTask from "../Components/CurrentTaskComponent";

export default function StartPage() {
    const [currentTask, setCurrentTask] = useState(null);
    const [timerActive, setTimer] = useState(false);
    const [duration, setDuration] = useState(1200);

    const dummyTask = {
        title: 'Essay',
        due: '2023-03-12',
        maxWords: 1000,
        wordCount: 0,
        subject: 'ubi comp',
        type: 'essay',
    }


    // timer from https://www.npmjs.com/package/react-native-countdown-circle-timer
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'START'} />
            <View style={styles.timerContainer}>
                <CountdownCircleTimer
                    isPlaying={timerActive}
                    duration={duration}
                    colors={[globalColours.secondary, globalColours.tertiary]}
                >
                    {({ remainingTime }) => <Text style={styles.countdownText}>{timeFormat(remainingTime)}</Text>}
                </CountdownCircleTimer>

                {timerActive ? (
                    <View style={styles.timerControls}>
                        <Pressable style={styles.pauseButton}
                            onPress={() => setTimer(false)}>
                            <Text style={styles.buttonText}>Pause Timer</Text>
                        </Pressable>

                        <Pressable style={styles.cancelButton}
                            onPress={() => {
                                setTimer(false);
                                setDuration(1200);
                            }}>
                            <Text style={styles.buttonText}>Cancel Timer</Text>
                        </Pressable>


                    </View>
                ) : (
                    <Pressable style={styles.startButton}
                        onPress={() => setTimer(true)}>
                        <Text style={styles.buttonText}>Start Tasks</Text>
                    </Pressable>
                )}

                <View style={styles.tasksContainer}>
                    <Text style={styles.currentTaskHeader}>Current Task:</Text>
                    <CurrentTask task={dummyTask} />
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    timerContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
        fontWeight: 'bold', fontSize: 20
    },
    timerControls: {
        flexDirection: 'row',
    },
});