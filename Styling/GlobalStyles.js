import { LayoutAnimation, StyleSheet } from 'react-native';

export function smoothExpansionAnimation() {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

export const globalColours = {
  primary: '#3abfef',
  secondary: '#3e5ba9',
  tertiary: '#70c6a4',
  backgroundPrimary: '#D0F1FE',
  backgroundSecondary: '#9EE2FC',
};

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
