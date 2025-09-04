import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const PropertyInfo = ({ navigation }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAddProperty = () => {
    // Navigate to Property Location Details
    navigation.navigate('PropertyLocationDetails');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Property Info</Text>
      </View>

      <View style={styles.content}>
        {/* Active Properties Dropdown */}
        <TouchableOpacity 
          style={styles.dropdownContainer}
          onPress={toggleDropdown}
        >
          <Text style={styles.dropdownText}>Active Properties (0)</Text>
          <Text style={[styles.dropdownIcon, dropdownOpen && styles.dropdownIconOpen]}>▼</Text>
        </TouchableOpacity>

        {/* Empty State */}
        <View style={styles.emptyStateContainer}>
          <View style={styles.emptyStateIcon}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </View>
          
          <Text style={styles.emptyStateTitle}>No active Properties</Text>
          <Text style={styles.emptyStateSubtitle}>
            Complete your listing soon and make{'\n'}your inactive properties active
          </Text>
          
          <TouchableOpacity 
            style={styles.addPropertyButton}
            onPress={handleAddProperty}
          >
            <Text style={styles.addPropertyText}>+ List New Property</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('MerchantDashboard')}
        >
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>🏠</Text>
          </View>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>📊</Text>
          </View>
          <Text style={styles.navLabel}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.centerNavItem}>
          <View style={styles.centerNavButton}>
            <Text style={styles.centerNavIcon}>+</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>💰</Text>
          </View>
          <Text style={styles.navLabel}>Revenue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>👤</Text>
          </View>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E40AF',
    borderBottomWidth: 1,
    borderBottomColor: '#1E40AF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  
  // Content
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  // Dropdown Styles
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 40,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  dropdownIcon: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  dropdownIconOpen: {
    transform: [{ rotate: '180deg' }],
  },
  
  // Empty State Styles
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  emptyStateIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  infoIcon: {
    fontSize: 32,
    color: '#E91E63',
    fontWeight: 'bold',
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  
  // Add Property Button
  addPropertyButton: {
    backgroundColor: '#FF5722',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addPropertyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // Bottom Navigation
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  centerNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navIconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginBottom: 4,
  },
  centerNavButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    marginBottom: -8,
  },
  navIcon: {
    fontSize: 22,
    color: '#94A3B8',
  },
  centerNavIcon: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
});

export default PropertyInfo;
