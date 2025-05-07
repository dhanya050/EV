import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const CompareScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EV vs. Petrol/Diesel</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Savings</Text>
        <Text style={styles.cardValue}>₹5,000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Annual Savings</Text>
        <Text style={styles.cardValue}>₹60,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  cardTitle: {
    color: colors.accent,
    fontSize: 18,
    marginBottom: 10,
  },
  cardValue: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default CompareScreen;
