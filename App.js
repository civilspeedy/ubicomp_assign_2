import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodayPage from './Pages/TodayPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarPage from './Pages/CalendarPage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StreakPage from './Pages/StreakPage';
import ScoreStorePage from './Pages/ScoreStorePage';


export default function App() {
  const Stack = createMaterialTopTabNavigator(); // https://reactnavigation.org/docs/material-top-tab-navigator


  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ //https://reactnavigation.org/docs/material-top-tab-navigator/#options
        "tabBarStyle": {
          "display": "none"
        }
      }}>
        <Stack.Screen name='Today' component={TodayPage} />
        <Stack.Screen name='Calendar' component={CalendarPage} />
        <Stack.Screen name="Streak" component={StreakPage} />
        <Stack.Screen name="ScoreStore" component={ScoreStorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
});
