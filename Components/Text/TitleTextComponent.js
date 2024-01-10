/**
 * @file contains TitleText component
 * @module TitleTextComponent
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Titles for pages. Bold font and blue colour.
 * @param {string} titleName - the title to be displayed
 * @returns {View}
 */
export default function TitleText({ titleName }) {
  return (
    <View style={styles.topView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{titleName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
    color: '#00C3FF',
  },
  topView: {
    width: '100%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    height: '12%',
  },
});
