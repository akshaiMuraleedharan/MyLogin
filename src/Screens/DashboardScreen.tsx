import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DashboardScreen: React.FC<{ route: any }> = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>User Details:</Text>
      <Text style={styles.details}>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
