import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import TitleText from '../Components/Text/TitleTextComponent';
import { globalColours, globalStyle } from '../GlobalStyles';
import { useState } from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DisplayTasks from '../Components/Display/DisplayTasks';

export default function CompletedTasksPage({ tasks, fetchTasks }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={isOpen}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setOpen(!isOpen)}
      >
        <View style={globalStyle.pageContainer}>
          <TitleText titleName={'COMPLETED'} />

          <DisplayTasks tasks={tasks} fetchTasks={fetchTasks} displayType={'done'} />

          <Pressable onPress={() => setOpen(false)} style={styles.closeButton}>
            <MaterialCommunityIcons name='cancel' size={70} />
          </Pressable>
        </View>
      </Modal>
      <Pressable style={globalStyle.squareButton} onPress={() => setOpen(true)}>
        <MaterialIcons name='done-all' size={70} color='black' />
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
