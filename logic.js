import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';


export const [streak, setStreak] = useState(null);


export const setStreakStorage = async (streakValue) => {
    try {
        AsyncStorage.setItem('streak', streakValue);
        console.log(streakValue, " in AsyncStorage now");
    } catch (e) {
        console.error("err in setStreak [", e, "]");
    };
};

export const getStreak = async () => {
    try {
        const streakValue = await AsyncStorage.getItem("streak");
        if (streakValue != null) {
            setStreak(streakValue);
        };
    }
    catch (e) {
        console.error("eer in getStreak [", e, "]");
    }
};

useEffect(() => {
    getStreak()
}, []);

