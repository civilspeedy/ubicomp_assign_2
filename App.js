import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect, useState } from 'react';

import CalendarPage from './Pages/CalendarPage';
import TodayPage from './Pages/TodayPage';
import { globalColours } from './Styling/GlobalStyles';
import {
  createPointsTable,
  createTaskTable,
  dropPointsTable,
  getPoints,
  getTasks,
} from './Logic/Database/DatabaseManipulation';
import StartPage from './Pages/StartPage';
import Pagination from './Components/PaginationComponent';
import { welcomeToast } from './Logic/Cheerleader';

welcomeToast();
dropPointsTable();
createTaskTable();
createPointsTable();
export default function App() {
  const [points, setPoints] = useState(0);
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

  const fetchPoints = async () => {
    try {
      const fetchedPoints = await getPoints();
      const pointsInt = fetchedPoints[0]?.points || 0; //gpt
      setPoints(pointsInt);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchPoints();
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
          {(props) => (
            <TodayPage
              fetchTasks={fetchTasks}
              tasks={tasks}
              setPage={setCurrentPage}
              points={points}
              fetchPoints={fetchPoints}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='Calendar'>
          {(props) => (
            <CalendarPage
              fetchTasks={fetchTasks}
              tasks={tasks}
              setPage={setCurrentPage}
              points={points}
              fetchPoints={fetchPoints}
            />
          )}
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
