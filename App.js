import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect, useState } from 'react';

import CalendarPage from './Pages/CalendarPage';
import TodayPage from './Pages/TodayPage';
import { globalColours } from './Styling/GlobalStyles';
import StartPage from './Pages/StartPage';
import { createTaskTable, dropTaskTable, getTasks } from './Logic/Database/DatabaseManipulation';

export default function App() {
  createTaskTable(); //seems to be called every fetchTask() call but isn't causing issues for now
  const [tasks, setTasks] = useState([]);

  const Stack = createMaterialTopTabNavigator();
  // https://reactnavigation.org/docs/material-top-tab-navigator

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style='auto' />
      <Stack.Navigator
        screenOptions={{
          //https://reactnavigation.org/docs/material-top-tab-navigator/#options
          tabBarStyle: {
            display: 'none',
          },
        }}
        style={{ flex: 1 }}
      >
        <Stack.Screen name='Today'>
          {(props) => <TodayPage fetchTasks={fetchTasks} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name='Calendar'>
          {
            //chatGPT
            (props) => <CalendarPage fetchTasks={fetchTasks} tasks={tasks} />
          }
        </Stack.Screen>
        <Stack.Screen name='Start' component={StartPage} />
      </Stack.Navigator>
      <View style={styles.lowerScreen}>
        <Text style={{ textAlign: 'center' }}>Hello</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColours.backgroundPrimary,
  },
  lowerScreen: {
    backgroundColor: globalColours.backgroundPrimary,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.02,
    width: '100%',
  },
});
