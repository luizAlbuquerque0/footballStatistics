import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/routes/router';
import { AuthProvider } from './src/contexts/AuthContext';
import { MatchProvider } from './src/contexts/matchContext';

export default function App() {
  return (
    <AuthProvider>
      <MatchProvider>
        <Router/>
        </MatchProvider>
    </AuthProvider>
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
