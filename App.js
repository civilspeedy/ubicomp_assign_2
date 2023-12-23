import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CalendarPage from './Pages/CalendarPage';
import TodayPage from './Pages/TodayPage';
import StreakPage from './Pages/StreakPage';
import ScoreStorePage from './Pages/ScoreStorePage';
import { globalColours } from './Styling/GlobalStyles';
import StartPage from './Pages/StartPage';
import CreateTaskPage from './Pages/CreateTaskPage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createTaskTable, dropTaskTable, getTasks } from './Logic/Database/DatabaseManipulation';

export default function App() {
  const Stack = createMaterialTopTabNavigator(); // https://reactnavigation.org/docs/material-top-tab-navigator

  getTasks('test');

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ //https://reactnavigation.org/docs/material-top-tab-navigator/#options
        "tabBarStyle": {
          "display": "none"
        }
      }}>
        <Stack.Screen name='Today' component={TodayPage} />
        <Stack.Screen name='create task' component={CreateTaskPage} />
        <Stack.Screen name='Start' component={StartPage} />
        <Stack.Screen name='Calendar' component={CalendarPage} />
        <Stack.Screen name="Streak" component={StreakPage} />
        <Stack.Screen name="ScoreStore" component={ScoreStorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColours.backgroundPrimary,
  },
});
