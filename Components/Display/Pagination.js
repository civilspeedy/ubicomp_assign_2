/**
 * @file contains the pagination component
 * @module Pagination
 */
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { impactAsync } from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';

/**
 * A component to show what page is currently being viewed as well as allows for fast navigation to another page.
 * Fragments from https://reactnavigation.org/docs/use-navigation/
 * @param {number} pageNumber - a number value representing what page is being viewed
 * @returns
 */
export default function Pagination({ pageNumber }) {
  const [dotOneSize, setDotOneSize] = useState(20);
  const [dotTwoSize, setDotTwoSize] = useState(20);
  const [dotThreeSize, setDotThreeSize] = useState(20);

  const navigater = useNavigation();

  const goToToday = () => {
    navigater.navigate('Today');
  };

  const gotToCalendar = () => {
    navigater.navigate('Calendar');
  };

  const gotToStart = () => {
    navigater.navigate('Start');
  };

  useEffect(() => {
    impactAsync();
    if (pageNumber == 1) {
      setDotOneSize(60);
      setDotTwoSize(40);
      setDotThreeSize(40);
    }
    if (pageNumber == 2) {
      setDotOneSize(40);
      setDotTwoSize(60);
      setDotThreeSize(40);
    }
    if (pageNumber == 3) {
      setDotOneSize(40);
      setDotTwoSize(40);
      setDotThreeSize(60);
    }
  }, [pageNumber]);

  return (
    <View style={styles.dotsContainer}>
      <Pressable onPress={goToToday}>
        <Entypo
          name='dot-single'
          size={dotOneSize}
        />
      </Pressable>

      <Pressable onPress={gotToCalendar}>
        <Entypo
          name='dot-single'
          size={dotTwoSize}
        />
      </Pressable>

      <Pressable onPress={gotToStart}>
        <Entypo
          name='dot-single'
          size={dotThreeSize}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  dotsContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
