import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/AuthContext';

const UserTypeSelection = ({ navigation, route }) => {
  const { login } = useAuth();
  const { phoneNumber, verified } = route.params || {};

  const handleUserTypeSelect = () => {
    if (phoneNumber && verified) {
      // Complete the login process
      const userData = {
        phone: phoneNumber,
        type: 'user',
        verified: true,
      };

      login(userData, 'user');
      
      // Navigate to user app
      navigation.reset({
        index: 0,
        routes: [{ name: 'UserApp' }],
      });
    } else {
      // If no phone verification, go to signup
      navigation.navigate('PhoneSignup', { userType: 'user' });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9ff" />
      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to HostelFinder</Text>
        <Text style={styles.subtitle}>Choose your account type</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.typeButton}
            onPress={() => handleUserTypeSelect()}
          >
            <LinearGradient
              colors={['#8b5cf6', '#a855f7']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <Text style={styles.buttonSubtext}>Find and book hostels</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 16,
  },
  typeButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradientButton: {
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  buttonSubtext: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default UserTypeSelection;
