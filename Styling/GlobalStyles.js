import { LayoutAnimation, StyleSheet } from "react-native";

export function smoothExpansionAnimation() { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); }

export const globalColours = {
    primary: '#3abfef',
    secondary: '#3e5ba9',
    tertiary: '#70c6a4',
    backgroundPrimary: '#D0F1FE',
    backgroundSecondary: '#9EE2FC'
};

export const globalStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: globalColours.backgroundPrimary
    },
});

