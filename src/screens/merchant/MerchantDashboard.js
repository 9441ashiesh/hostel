import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import MerchantLayout from '../../components/layout/MerchantLayout';

const { width } = Dimensions.get('window');

const MerchantDashboard = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const navigateToPropertyInfo = () => {
    try {
      navigation.navigate('PropertyInfo');
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Navigation Error', error.message);
    }
  };
  const navigateToPropertyAmenities = () => {
    try {
      navigation.navigate('PropertyAmenities');
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Navigation Error', error.message);
    }
  };

  const navigateToRooms = () => {
    try {
      navigation.navigate('Rooms');
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Navigation Error', error.message);
    }
  };
  
  return (
    <MerchantLayout navigation={navigation} currentRoute="Dashboard">
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>Hi Sahgal! 👋</Text>
            <Text style={styles.subGreeting}>Let's Track your Sales</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Access Section */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.quickAccessTitle}>Quick Access</Text>
          
          {/* First Row */}
          <View style={styles.quickAccessRow}>
            <TouchableOpacity 
              style={styles.quickAccessItem}
              onPress={navigateToPropertyInfo}
            >
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🏢</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Property{'\n'}Info</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessItem}
              onPress={navigateToPropertyAmenities}
            >
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🏊‍♂️</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Amenities</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessItem}
              onPress={navigateToRooms}
            >
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🏠</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Rooms</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>📷</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Photos &{'\n'}Videos</Text>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.quickAccessRow}>
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🏠</Text>
              </View>
              <Text style={styles.quickAccessLabel}>HOLIDAYHOME</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🏖️</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Beach Fests</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🎉</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Events</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIcon}>
                <Text style={styles.iconText}>🎯</Text>
              </View>
              <Text style={styles.quickAccessLabel}>Promotions</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Performance Section */}
        <View style={styles.performanceSection}>
          <Text style={styles.performanceTitle}>Today's Performance</Text>
          <Text style={styles.performanceSubtitle}>On MakeMyTrip & Goibibo</Text>
          
          <View style={styles.performanceGrid}>
            {/* First Row */}
            <View style={styles.performanceRow}>
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>10</Text>
                <Text style={styles.performanceLabel}>Room Nights</Text>
                <Text style={styles.performanceDesc}>For last 7 days: 10RN</Text>
              </View>
              
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>₹0</Text>
                <Text style={styles.performanceLabel}>Revenue</Text>
                <Text style={styles.performanceDesc}>For last 7 days: ₹0</Text>
              </View>
            </View>

            {/* Second Row */}
            <View style={styles.performanceRow}>
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>₹0</Text>
                <Text style={styles.performanceLabel}>Average Selling Price</Text>
                <Text style={styles.performanceDesc}>For last 7 days: ₹0</Text>
              </View>
              
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>0</Text>
                <Text style={styles.performanceLabel}>Check-ins</Text>
                <Text style={styles.performanceDesc}>For last 7 days: 0 check ins</Text>
              </View>
            </View>

            {/* Third Row */}
            <View style={styles.performanceRow}>
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>16</Text>
                <Text style={styles.performanceLabel}>Property Visits</Text>
                <Text style={styles.performanceDesc}>For last 7 days: 100 day visits</Text>
              </View>
              
              <View style={styles.performanceCard}>
                <Text style={styles.performanceValue}>0%</Text>
                <Text style={styles.performanceLabel}>Conversion</Text>
                <Text style={styles.performanceDesc}>For last 7 days: 0 %</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </MerchantLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 45,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '400',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 18,
  },
  
  // Quick Access Section
  quickAccessSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  quickAccessTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 20,
  },
  quickAccessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAccessItem: {
    alignItems: 'center',
    flex: 1,
  },
  quickAccessIcon: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconText: {
    fontSize: 26,
  },
  quickAccessLabel: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 14,
  },
  
  // Performance Section
  performanceSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  performanceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  performanceSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 20,
  },
  performanceGrid: {
    gap: 15,
  },
  performanceRow: {
    flexDirection: 'row',
    gap: 15,
  },
  performanceCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  performanceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  performanceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  performanceDesc: {
    fontSize: 11,
    color: '#9CA3AF',
    lineHeight: 14,
  },
  
  // Statistics Cards (removed)
  // Calendar Section (removed)
  // Period Headers (removed)
  // Revenue Display (removed) 
  // Chart Section (removed)
  
  // Bottom Section
  bottomSpace: {
    height: 20,
  },
});

export default MerchantDashboard;
