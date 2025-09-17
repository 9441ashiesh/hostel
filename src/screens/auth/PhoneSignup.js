import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

const PhoneSignup = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleContinue = () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your mobile number');
      return;
    }

    if (phoneNumber.length < 1) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }

    setIsLoading(true);
    
    // Simulate phone verification and direct login
    setTimeout(() => {
      setIsLoading(false);
      
      // Determine user type automatically based on phone number
      const determineUserType = (phone) => {
        // Simple logic: 1 = user, 2 = merchant, 3 = admin
        if (phone === '1') {
          return 'user';
        } else if (phone === '2') {
          return 'merchant';
        } else if (phone === '3') {
          return 'admin';
        } else {
          // Default to user for all other numbers
          return 'user';
        }
      };
      
      const userType = determineUserType(phoneNumber);
      
      // Mock user data
      const userData = {
        phone: phoneNumber,
        type: userType,
        verified: true,
      };

      login(userData, userType);
      
      // No need to manually navigate, the AppNavigator will handle the route change automatically
    }, 1000);
  };

  const handleGoogleSignup = () => {
    Alert.alert('Google Signup', 'Google signup will be implemented here');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9ff" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Signup</Text>
            <Text style={styles.subtitle}>
              Let's start with your phone number
            </Text>
            <Text style={styles.roleInfo}>
              Enter 1 for User, 2 for Merchant, 3 for Admin
            </Text>
          </View>

          {/* Phone Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter your mobile number"
              placeholderTextColor="#9ca3af"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={[styles.continueButton, isLoading && styles.disabledButton]}
            onPress={handleContinue}
            disabled={isLoading}
          >
            <Text style={styles.continueButtonText}>
              {isLoading ? 'Loading...' : 'Continue'}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignup}
          >
            <Text style={styles.googleButtonText}>🔍 Continue with google</Text>
          </TouchableOpacity>

          {/* Registration Link */}
          <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.linkText}>Don't have an account? Register</Text>
          </TouchableOpacity>
          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing, you accept our Policy, Conditions.
            </Text>
          </View>
        </View>

        {/* Bottom Indicator */}
        <View style={styles.bottomIndicator} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#6366f1',
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },
  roleInfo: {
    fontSize: 14,
    color: '#8b5cf6',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: 24,
  },
  phoneInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  continueButton: {
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#8b5cf6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  disabledButton: {
    backgroundColor: '#d1d5db',
    shadowOpacity: 0,
    elevation: 0,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#9ca3af',
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 40,
  },
  googleButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 3,
    marginBottom: 8,
  },
});

export default PhoneSignup;
