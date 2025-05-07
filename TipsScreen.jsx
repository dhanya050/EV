import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EV Tips Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFD700',
    fontSize: 20,
  },
});

export default TipsScreen; // ✅ default export
