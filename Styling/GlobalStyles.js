import { StyleSheet } from "react-native";

export const globalColours = {
    primary: '#00C3FF',
    secondary: '#0043FF',
    tertiary: '#00FFBC',
    backgroundPrimary: '#D0F1FE',
    backgroundSecondary: '#9EE2FC'
};

export const globalStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: globalColours.backgroundPrimary
    },
})