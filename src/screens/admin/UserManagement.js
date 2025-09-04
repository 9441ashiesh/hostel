import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const UserManagement = ({ navigation }) => {
  const { logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const [users] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 9876543210',
      status: 'Active',
      joinDate: '2024-01-15',
      totalBookings: 12,
      lastLogin: '2 hours ago',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 9876543211',
      status: 'Active',
      joinDate: '2024-02-10',
      totalBookings: 8,
      lastLogin: '1 day ago',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+91 9876543212',
      status: 'Suspended',
      joinDate: '2024-01-20',
      totalBookings: 5,
      lastLogin: '1 week ago',
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+91 9876543213',
      status: 'Active',
      joinDate: '2024-03-05',
      totalBookings: 15,
      lastLogin: '5 minutes ago',
    },
    {
      id: '5',
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+91 9876543214',
      status: 'Inactive',
      joinDate: '2024-01-30',
      totalBookings: 3,
      lastLogin: '2 weeks ago',
    },
  ]);

  const filterOptions = ['All', 'Active', 'Inactive', 'Suspended'];

  const handleBack = () => {
    navigation.goBack();
  };

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

  const handleUserAction = (user, action) => {
    Alert.alert(
      'User Action',
      `${action} user ${user.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => console.log(`${action} ${user.name}`) },
      ]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10B981';
      case 'Inactive': return '#6B7280';
      case 'Suspended': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.phone.includes(searchQuery);
    const matchesFilter = selectedFilter === 'All' || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userHeader}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
          <Text style={styles.userPhone}>{item.phone}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
          <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>
      </View>
      
      <View style={styles.userStats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.totalBookings}</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.joinDate}</Text>
          <Text style={styles.statLabel}>Joined</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.lastLogin}</Text>
          <Text style={styles.statLabel}>Last Login</Text>
        </View>
      </View>
      
      <View style={styles.userActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleUserAction(item, 'View Details')}
        >
          <Text style={styles.actionButtonText}>View</Text>
        </TouchableOpacity>
        
        {item.status === 'Active' ? (
          <TouchableOpacity 
            style={[styles.actionButton, styles.suspendButton]}
            onPress={() => handleUserAction(item, 'Suspend')}
          >
            <Text style={[styles.actionButtonText, styles.suspendButtonText]}>Suspend</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[styles.actionButton, styles.activateButton]}
            onPress={() => handleUserAction(item, 'Activate')}
          >
            <Text style={[styles.actionButtonText, styles.activateButtonText]}>Activate</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleUserAction(item, 'Delete')}
        >
          <Text style={[styles.actionButtonText, styles.deleteButtonText]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addIcon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users by name, email, or phone"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterOptions.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                selectedFilter === filter && styles.filterTabActive
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive
              ]}>
                {filter} ({filter === 'All' ? users.length : users.filter(u => u.status === filter).length})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Users List */}
      <FlatList
        data={filteredUsers}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        style={styles.usersList}
        contentContainerStyle={styles.usersListContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#DC2626',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  logoutButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FEF2F2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: {
    fontSize: 18,
    color: '#DC2626',
  },
  
  // Search
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
  },
  
  // Filter
  filterContainer: {
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
  },
  filterTabActive: {
    backgroundColor: '#DC2626',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  
  // Users List
  usersList: {
    flex: 1,
  },
  usersListContent: {
    padding: 20,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  userPhone: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  
  // User Stats
  userStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  
  // User Actions
  userActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  suspendButton: {
    borderColor: '#F59E0B',
    backgroundColor: '#FEF3C7',
  },
  suspendButtonText: {
    color: '#F59E0B',
  },
  activateButton: {
    borderColor: '#10B981',
    backgroundColor: '#D1FAE5',
  },
  activateButtonText: {
    color: '#10B981',
  },
  deleteButton: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  deleteButtonText: {
    color: '#EF4444',
  },
});

export default UserManagement;
