import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.title}>Welcome to EV Companion</Text>
        <Text style={styles.subtitle}>Your ultimate guide to Electric Vehicles</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Key Features</Text>
        <Text style={styles.featureText}>• EV Model Comparison</Text>
        <Text style={styles.featureText}>• Charging Station Locator</Text>
        <Text style={styles.featureText}>• EV Range Calculator</Text>
        <Text style={styles.featureText}>• Tips & Maintenance Guide</Text>
      </View>

      {/* Call-to-Action */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Get started with EVs and make a smarter choice today!</Text>
        <Button 
          title="Explore More" 
          onPress={() => navigation.navigate('Models')} // This will navigate to ModelsScreen
          color="#FFD700" 
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 EV Companion. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 28,
    color: '#FFD700', // Gold color
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  featuresContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  featuresTitle: {
    fontSize: 22,
    color: '#FFD700', // Gold color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  ctaContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ctaText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  footer: {
    marginTop: 40,
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
