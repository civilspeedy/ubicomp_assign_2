import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Today from './Pages/Today';
import { createStreakScoreTable } from './database/Database';


export default function App() {
  createStreakScoreTable();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Today />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
