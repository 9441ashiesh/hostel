import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your admin phone number');
      return;
    }

    // Simple admin phone number check (in real app, this would be API call)
    if (phoneNumber === '3') {
      setLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const adminData = {
          id: 'admin_001',
          name: 'Admin User',
          phone: phoneNumber,
          role: 'admin',
        };
        
        login(adminData, 'admin');
        setLoading(false);
      }, 1000);
    } else {
      Alert.alert('Error', 'Invalid admin phone number. Use "3" for admin access.');
    }
  };

  const handleBackToUserLogin = () => {
    navigation.navigate('PhoneSignup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackToUserLogin}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Admin Portal</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Logo Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoIcon}>🏢</Text>
            </View>
            <Text style={styles.appName}>Hostel Admin</Text>
            <Text style={styles.tagline}>Manage Users & Merchants</Text>
          </View>

          {/* Login Form */}
          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Admin Login</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Admin Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter admin phone number"
                placeholderTextColor="#9CA3AF"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={10}
                autoCorrect={false}
              />
            </View>

            <TouchableOpacity
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? 'Signing In...' : 'Sign In as Admin'}
              </Text>
            </TouchableOpacity>

            {/* Demo Credentials */}
            <View style={styles.demoCredentials}>
              <Text style={styles.demoTitle}>Demo Admin Access:</Text>
              <Text style={styles.demoText}>Phone Number: 3</Text>
              <Text style={styles.demoText}>For admin portal access</Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleBackToUserLogin}>
              <Text style={styles.footerText}>
                Back to User Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#1F2937',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  placeholder: {
    width: 40,
  },
  
  // Logo Section
  logoSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Form Section
  formSection: {
    flex: 1,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
  },
  loginButton: {
    height: 52,
    backgroundColor: '#DC2626',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // Demo Credentials
  demoCredentials: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  demoText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  
  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 16,
    color: '#DC2626',
    fontWeight: '600',
  },
});

export default AdminLogin;
