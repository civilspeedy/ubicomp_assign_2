import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { globalColours, globalStyle } from '../Styling/GlobalStyles';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import DisplayTasks from '../Components/Output Components/TaskDisplayComponent';

export default function CompletedTasksPage({ tasks, fetchTasks }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <View>
      <Modal
        visible={isOpen}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setOpen(!isOpen)}
      >
        <View style={globalStyle.pageContainer}>
          <TitleText titleName={'COMPLETED'} />

          <DisplayTasks
            tasks={tasks}
            fetchTasks={tasks}
            displayType={'done'}
          />

          <Pressable onPress={() => setOpen(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setOpen(true)}
      >
        <MaterialIcons
          name='done-all'
          size={70}
          color='black'
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: globalColours.backgroundSecondary,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginHorizontal: 20,
  },
});
