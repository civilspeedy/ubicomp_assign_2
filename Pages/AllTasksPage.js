/**
 * @file file containing the all tasks page component
 * @module AllTasksPage
 */

import { useState } from 'react';
import { Modal, Pressable, StyleSheet, View, Text } from 'react-native';
import { globalStyle } from '../GlobalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TitleText from '../Components/Text/TitleTextComponent';
import DisplayTasks from '../Components/Display/DisplayTasks';

/**
 * A page for view all undone tasks
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {Array} tasks - an array containing all tasks
 */
export default function AllTasksPage({ tasks, fetchTasks }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={isOpen}
        onRequestClose={() => setOpen(!isOpen)}
        animationType='slide'
      >
        <View style={globalStyle.pageContainer}>
          <TitleText titleName={'ALL'} />
          <DisplayTasks
            tasks={tasks}
            fetchTasks={fetchTasks}
            displayType={'all'}
          />

          <Pressable
            onPress={() => setOpen(false)}
            style={styles.closeButton}
          >
            <MaterialCommunityIcons
              name='cancel'
              size={70}
            />
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={globalStyle.squareButton}
        onPress={() => setOpen(true)}
      >
        <MaterialCommunityIcons
          name='format-list-bulleted'
          size={70}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    alignSelf: 'center',
    width: 70,
    height: 70,
    margin: 10,
  },
});