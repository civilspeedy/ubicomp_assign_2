import AsyncStorage from '@react-native-async-storage/async-storage';


export const getStreak = async () => {
    try {
        const streakValue = await AsyncStorage.getItem("streak");
        return streakValue != null ? JSON.parse(streakValue) : null;
    }
    catch (e) {
        console.error("Err in getStreak -> ", e);
    };
};

export const setStreak = async (streakValue) => {
    try {
        await AsyncStorage.setItem("streak", streakValue);
    }
    catch (e) {
        console.error("Err in setStreak -> ", e);
    }
};