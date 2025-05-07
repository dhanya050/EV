import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';

// Update the require paths to match your directory structure
const vehicles = [
  // Cars
  {
    id: "1",
    type: "Car",
    name: "Tesla Model S",
    range: "650 km",
    price: "₹1,00,00,000",
    features: "Autopilot, Premium Interior, Fast Charging",
    image: require('../assets/images/tesla_model_s.png'),
  },
  {
    id: "2",
    type: "Car",
    name: "Nissan Leaf",
    range: "370 km",
    price: "₹35,00,000",
    features: "Smart Rearview Camera, ProPILOT Assist, Eco Mode",
    image: require('../assets/images/nissan_leaf.png'),
  },
  {
    id: "3",
    type: "Car",
    name: "Tata Nexon EV",
    range: "312 km",
    price: "₹15,00,000",
    features: "Regenerative Braking, ZConnect, Fast Charging",
    image: require('../assets/images/tata_nexon_ev.png'),
  },
  {
    id: "4",
    type: "Car",
    name: "MG ZS EV",
    range: "419 km",
    price: "₹22,00,000",
    features: "Smart Connectivity, Automatic Parking, i-Smart Technology",
    image: require('../assets/images/mg_zs_ev.png'),
  },
  {
    id: "5",
    type: "Car",
    name: "Hyundai Kona Electric",
    range: "452 km",
    price: "₹23,00,000",
    features: "Wireless Charging, Lane Keep Assist, Smart Regenerative Braking",
    image: require('../assets/images/hyundai_kona_electric.png'),
  },

  // Bikes
  {
    id: "6",
    type: "Bike",
    name: "Revolt RV400",
    range: "150 km",
    price: "₹1,00,000",
    features: "AI-enabled features, fast charging, mobile app connectivity",
    image: require('../assets/images/revolt_rv400.png'),
  },
  {
    id: "7",
    type: "Bike",
    name: "Ather 450X",
    range: "85 km",
    price: "₹1,30,000",
    features: "4G Connectivity, Fast Charging, Over-the-Air Updates",
    image: require('../assets/images/ather_450x.png'),
  },
  {
    id: "8",
    type: "Bike",
    name: "Bajaj Chetak Electric",
    range: "95 km",
    price: "₹1,20,000",
    features: "Smart Connect, Fast Charging, Reverse Mode",
    image: require('../assets/images/bajaj_chetak.png'),
  },

  // Three-Wheelers
  {
    id: "9",
    type: "Three-Wheeler",
    name: "Mahindra Treo",
    range: "130 km",
    price: "₹2,75,000",
    features: "Regenerative Braking, Digital Dashboard, Comfortable Ride",
    image: require('../assets/images/mahindra_treo.png'),
  },
];

const ModelsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {vehicles.map((vehicle) => (
        <View key={vehicle.id} style={styles.card}>
          <Image source={vehicle.image} style={styles.carImage} />
          <Text style={styles.name}>{vehicle.name}</Text>
          <Text style={styles.details}>Range: {vehicle.range}</Text>
          <Text style={styles.details}>Price: {vehicle.price}</Text>
          <Text style={styles.details}>Features: {vehicle.features}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#1c1c1c',
    margin: 10,
    padding: 20,
    borderRadius: 8,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: '#FFD700',
  },
  details: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
});

export default ModelsScreen;
