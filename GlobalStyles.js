/**
 * @file This file is used to host style and UI elements that are used in a multitude of modules and components.
 * @module GlobalStyles
 */

import { LayoutAnimation, StyleSheet } from 'react-native';

/**Calles the LayoutAnimation library for a smooth transition as a component changes.
 * https://reactnative.dev/docs/layoutanimation/
 */
export function smoothExpansionAnimation() {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

/**A globally accessable object containing colour hexes to be used throughout the app. */
export const globalColours = {
  primary: '#3abfef',
  secondary: '#3e5ba9',
  tertiary: '#70c6a4',
  backgroundPrimary: '#D0F1FE',
  backgroundSecondary: '#9EE2FC',
};
/**A globally accessable StyleSheet to be used in multiple components. */
export const globalStyle = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: globalColours.backgroundPrimary,
  },
  input: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  squareButton: {
    backgroundColor: globalColours.backgroundSecondary,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginHorizontal: 20,
  },
});
