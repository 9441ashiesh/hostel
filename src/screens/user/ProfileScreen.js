import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => logout(),
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={16} color="#9ca3af" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileContent}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b787?w=150&h=150&fit=crop&crop=face' }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>Hasna Azlya</Text>
              <Text style={styles.userEmail}>hasnaazlya@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfileScreen')}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Privacy and Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Privacy and Security</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PasswordSecurityScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="shield-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Password and Security</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyProfileScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Privacy Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        {/* Preference Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Preference</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CountrySelectionScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="globe-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Country</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.menuItemValue}>USA</Text>
              <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CurrencySelectionScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="card-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Currency</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.menuItemValue}>Dollar</Text>
              <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('LanguageSelectionScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="language-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Language</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.menuItemValue}>English</Text>
              <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NotificationSettingsScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="notifications-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Notification Push</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        {/* Help Center Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Help Center</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FAQScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="help-circle-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>FAQ</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CustomerServiceScreen')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="headset-outline" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Customer Service</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#9ca3af',
  },
  profileSection: {
    marginBottom: 32,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editButtonText: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '500',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
    fontWeight: '500',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemValue: {
    fontSize: 16,
    color: '#6b7280',
    marginRight: 8,
  },
  bottomSpace: {
    height: 100,
  },
});

export default ProfileScreen;