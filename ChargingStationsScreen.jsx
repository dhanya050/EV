import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../theme/colors";

const stations = [
  { id: "1", name: "Station A", distance: "2 km" },
  { id: "2", name: "Station B", distance: "5 km" },
  { id: "3", name: "Station C", distance: "7 km" },
];

const ChargingStationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Charging Stations</Text>
      <FlatList
        data={stations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.stationCard}>
            <Text style={styles.stationName}>{item.name}</Text>
            <Text style={styles.stationDistance}>{item.distance}</Text>
          </View>
        )}
      />
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
  stationCard: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  stationName: {
    color: colors.text,
    fontSize: 18,
  },
  stationDistance: {
    color: colors.muted,
    fontSize: 14,
  },
});

export default ChargingStationsScreen;
