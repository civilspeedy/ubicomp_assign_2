import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect, useState } from 'react';

import CalendarPage from './Pages/CalendarPage';
import TodayPage from './Pages/TodayPage';
import { globalColours } from './Styling/GlobalStyles';
import { createTaskTable, getTasks } from './Logic/Database/DatabaseManipulation';
import StartPage from './Pages/StartPage';
import Pagination from './Components/PaginationComponent';
import { welcomeToast } from './Logic/Cheerleader';

welcomeToast();
export default function App() {
  createTaskTable(); //seems to be called every fetchTask() call but isn't causing issues for now
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
          {(props) => <TodayPage fetchTasks={fetchTasks} tasks={tasks} setPage={setCurrentPage} />}
        </Stack.Screen>
        <Stack.Screen name='Calendar'>
          {
            //chatGPT
            (props) => (
              <CalendarPage fetchTasks={fetchTasks} tasks={tasks} setPage={setCurrentPage} />
            )
          }
        </Stack.Screen>
        <Stack.Screen name='Start'>
          {(props) => <StartPage setPage={setCurrentPage} />}
        </Stack.Screen>
      </Stack.Navigator>
      <View style={styles.lowerScreen}>
        <Pagination pageNumber={currentPage} />
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
    width: '100%',
    flex: 0.08,
  },
});
