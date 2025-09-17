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

const SignupScreen = ({ navigation }) => {
  const handleGoToLogin = () => {
    navigation.navigate('PhoneSignup');
  };
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!phone.trim() && !email.trim()) {
      Alert.alert('Error', 'Please enter your phone number or email');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Error', 'Please enter a password');
      return;
    }
    setIsLoading(true);
    try {
      const response = await authService.registerUser({ phone, email, password });
      if (response && response.user) {
        Alert.alert('Signup Successful', 'You can now log in.');
        navigation.goBack();
      } else {
        Alert.alert('Signup Failed', response?.message || 'Could not register');
      }
    } catch (error) {
      Alert.alert('Network Error', error.message || 'Could not register');
    }
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9ff" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Email or number "
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.signupButton, isLoading && styles.disabledButton]}
            onPress={handleSignup}
            disabled={isLoading}
          >
            <Text style={styles.signupButtonText}>
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={handleGoToLogin}>
            <Text style={styles.linkText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    marginTop: 24,
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#d1d5db',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignupScreen;
