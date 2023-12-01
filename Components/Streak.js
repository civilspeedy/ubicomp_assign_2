import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Streak() {
    const KEY = "@streak";
    const [streak, setStreak] = useState(0);

    const storeStreak = async (streak) => {
        try {
            await AsyncStorage.setItem(KEY, streak.toString());
            console.log("Streak has been saved as ", streak);
        } 
        catch (e) {
            console.error("err in storeStreak ", e);
        };
    }

    const resetStreak = async () => {
        try {
            await AsyncStorage.setItem(KEY, '0');
            console.log("Streak has been reset")
        }
        catch (e) {
            console.error("err in resetStreak ", e );
        };
    };

    const readStreak = async () => {
        try {
            const streak = await AsyncStorage.getItem(KEY);
            if (streak !== null) {
                setStreak(parseInt(streak));
                console.log("reading Streak was succesfull ", streak);
            }
        }
        catch (e) {
            console.error("err in readStreak ", e);
        };
    };

    const clearStorage = async () => {
        try{
            await AsyncStorage.clear();
            console.log("AsyncStorage has been cleared");
        }
        catch (e) {
            console.error("err in clearStreak() ", e);
        }
    };
    
    const updateStreak = () => {
        const newStreak = (parseInt(streak) + 1).toString();
        storeStreak(newStreak);
        console.log("new streak ", newStreak);
        readStreak();
    };

    useEffect(() => {
        readStreak();
    }, []);

    return (
        <Text>{streak}</Text>
    );
};