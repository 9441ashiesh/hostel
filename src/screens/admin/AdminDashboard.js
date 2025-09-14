import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [stats] = useState({
    totalUsers: 1247,
    totalMerchants: 89,
    totalProperties: 156,
    pendingApprovals: 12,
    activeBookings: 234,
    totalRevenue: 45680,
  });

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: logout },
      ]
    );
  };

  const navigateToUsers = () => {
    navigation.navigate('UserManagement');
  };

  const navigateToMerchants = () => {
    navigation.navigate('MerchantManagement');
  };

  const navigateToProperties = () => {
    navigation.navigate('PropertyManagement');
  };

  const navigateToBookings = () => {
    navigation.navigate('BookingManagement');
  };

  const navigateToReports = () => {
    navigation.navigate('Reports');
  };

  const navigateToSettings = () => {
    navigation.navigate('AdminSettings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>Hi Admin! 👋</Text>
            <Text style={styles.subGreeting}>Welcome to Admin Portal</Text>
          </View>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Platform Statistics</Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalUsers}</Text>
              <Text style={styles.statLabel}>Total Users</Text>
              <Text style={styles.statChange}>+12% this month</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalMerchants}</Text>
              <Text style={styles.statLabel}>Merchants</Text>
              <Text style={styles.statChange}>+5% this month</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalProperties}</Text>
              <Text style={styles.statLabel}>Properties</Text>
              <Text style={styles.statChange}>+8% this month</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.pendingApprovals}</Text>
              <Text style={styles.statLabel}>Pending Approvals</Text>
              <Text style={styles.statChangeUrgent}>Needs attention</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.activeBookings}</Text>
              <Text style={styles.statLabel}>Active Bookings</Text>
              <Text style={styles.statChange}>+15% this month</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>₹{stats.totalRevenue}</Text>
              <Text style={styles.statLabel}>Total Revenue</Text>
              <Text style={styles.statChange}>+22% this month</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <View style={styles.actionsGrid}>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToUsers}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>👥</Text>
              </View>
              <Text style={styles.actionTitle}>User Management</Text>
              <Text style={styles.actionSubtitle}>View & manage users</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToMerchants}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>🏪</Text>
              </View>
              <Text style={styles.actionTitle}>Merchant Management</Text>
              <Text style={styles.actionSubtitle}>Approve & manage merchants</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToProperties}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>🏠</Text>
              </View>
              <Text style={styles.actionTitle}>Property Management</Text>
              <Text style={styles.actionSubtitle}>Manage all properties</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToBookings}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>📅</Text>
              </View>
              <Text style={styles.actionTitle}>Booking Management</Text>
              <Text style={styles.actionSubtitle}>Monitor all bookings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToReports}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>📊</Text>
              </View>
              <Text style={styles.actionTitle}>Reports & Analytics</Text>
              <Text style={styles.actionSubtitle}>View detailed reports</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={navigateToSettings}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>⚙️</Text>
              </View>
              <Text style={styles.actionTitle}>Settings</Text>
              <Text style={styles.actionSubtitle}>Platform settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>New merchant registration</Text>
            <Text style={styles.activitySubtitle}>Hotel Paradise - 2 hours ago</Text>
          </View>
          
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>Property approved</Text>
            <Text style={styles.activitySubtitle}>Sunshine Hostel - 4 hours ago</Text>
          </View>
          
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>User reported issue</Text>
            <Text style={styles.activitySubtitle}>Payment issue - 6 hours ago</Text>
          </View>
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  logoutButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderRadius: 20,
  },
  logoutIcon: {
    fontSize: 20,
    color: '#DC2626',
  },
  
  // Sections
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  
  // Statistics
  statsSection: {
    marginBottom: 30,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  statChange: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
  statChangeUrgent: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '600',
  },
  
  // Quick Actions
  quickActionsSection: {
    marginBottom: 30,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Recent Activities
  recentSection: {
    marginBottom: 30,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  
  // Bottom Space
  bottomSpace: {
    height: 20,
  },
});

export default AdminDashboard;
