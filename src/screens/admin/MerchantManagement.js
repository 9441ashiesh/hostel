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

const MerchantManagement = ({ navigation }) => {
  const { logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const [merchants] = useState([
    {
      id: '1',
      name: 'Hotel Paradise',
      ownerName: 'Rajesh Kumar',
      email: 'rajesh@hotelparadise.com',
      phone: '+91 9876543210',
      status: 'Active',
      approvalStatus: 'Approved',
      joinDate: '2024-01-15',
      totalProperties: 3,
      totalBookings: 156,
      revenue: 45000,
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Sunshine Hostel',
      ownerName: 'Priya Sharma',
      email: 'priya@sunshinehostel.com',
      phone: '+91 9876543211',
      status: 'Active',
      approvalStatus: 'Approved',
      joinDate: '2024-02-10',
      totalProperties: 1,
      totalBookings: 89,
      revenue: 25000,
      rating: 4.2,
    },
    {
      id: '3',
      name: 'City Lodge',
      ownerName: 'Amit Patel',
      email: 'amit@citylodge.com',
      phone: '+91 9876543212',
      status: 'Suspended',
      approvalStatus: 'Approved',
      joinDate: '2024-01-20',
      totalProperties: 2,
      totalBookings: 45,
      revenue: 12000,
      rating: 3.8,
    },
    {
      id: '4',
      name: 'Mountain View Inn',
      ownerName: 'Sarah Wilson',
      email: 'sarah@mountainview.com',
      phone: '+91 9876543213',
      status: 'Active',
      approvalStatus: 'Pending',
      joinDate: '2024-03-05',
      totalProperties: 1,
      totalBookings: 0,
      revenue: 0,
      rating: 0,
    },
    {
      id: '5',
      name: 'Coastal Resort',
      ownerName: 'David Brown',
      email: 'david@coastalresort.com',
      phone: '+91 9876543214',
      status: 'Inactive',
      approvalStatus: 'Rejected',
      joinDate: '2024-01-30',
      totalProperties: 0,
      totalBookings: 0,
      revenue: 0,
      rating: 0,
    },
  ]);

  const filterOptions = ['All', 'Active', 'Inactive', 'Suspended', 'Pending Approval'];

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

  const handleMerchantAction = (merchant, action) => {
    Alert.alert(
      'Merchant Action',
      `${action} merchant ${merchant.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => console.log(`${action} ${merchant.name}`) },
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

  const getApprovalStatusColor = (status) => {
    switch (status) {
      case 'Approved': return '#10B981';
      case 'Pending': return '#F59E0B';
      case 'Rejected': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const filteredMerchants = merchants.filter(merchant => {
    const matchesSearch = merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         merchant.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         merchant.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = false;
    if (selectedFilter === 'All') {
      matchesFilter = true;
    } else if (selectedFilter === 'Pending Approval') {
      matchesFilter = merchant.approvalStatus === 'Pending';
    } else {
      matchesFilter = merchant.status === selectedFilter;
    }
    
    return matchesSearch && matchesFilter;
  });

  const renderMerchant = ({ item }) => (
    <View style={styles.merchantCard}>
      <View style={styles.merchantHeader}>
        <View style={styles.merchantInfo}>
          <Text style={styles.merchantName}>{item.name}</Text>
          <Text style={styles.ownerName}>Owner: {item.ownerName}</Text>
          <Text style={styles.merchantEmail}>{item.email}</Text>
          <Text style={styles.merchantPhone}>{item.phone}</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
            <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
              {item.status}
            </Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: getApprovalStatusColor(item.approvalStatus) + '20' }]}>
            <Text style={[styles.statusText, { color: getApprovalStatusColor(item.approvalStatus) }]}>
              {item.approvalStatus}
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.merchantStats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.totalProperties}</Text>
          <Text style={styles.statLabel}>Properties</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.totalBookings}</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>₹{item.revenue}</Text>
          <Text style={styles.statLabel}>Revenue</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.rating || 'N/A'}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
      
      <View style={styles.merchantActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleMerchantAction(item, 'View Details')}
        >
          <Text style={styles.actionButtonText}>View</Text>
        </TouchableOpacity>
        
        {item.approvalStatus === 'Pending' && (
          <>
            <TouchableOpacity 
              style={[styles.actionButton, styles.approveButton]}
              onPress={() => handleMerchantAction(item, 'Approve')}
            >
              <Text style={[styles.actionButtonText, styles.approveButtonText]}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.actionButton, styles.rejectButton]}
              onPress={() => handleMerchantAction(item, 'Reject')}
            >
              <Text style={[styles.actionButtonText, styles.rejectButtonText]}>Reject</Text>
            </TouchableOpacity>
          </>
        )}
        
        {item.status === 'Active' ? (
          <TouchableOpacity 
            style={[styles.actionButton, styles.suspendButton]}
            onPress={() => handleMerchantAction(item, 'Suspend')}
          >
            <Text style={[styles.actionButtonText, styles.suspendButtonText]}>Suspend</Text>
          </TouchableOpacity>
        ) : item.status === 'Suspended' ? (
          <TouchableOpacity 
            style={[styles.actionButton, styles.activateButton]}
            onPress={() => handleMerchantAction(item, 'Activate')}
          >
            <Text style={[styles.actionButtonText, styles.activateButtonText]}>Activate</Text>
          </TouchableOpacity>
        ) : null}
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
        <Text style={styles.headerTitle}>Merchant Management</Text>
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
          placeholder="Search merchants by name, owner, or email"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterOptions.map((filter) => {
            let count = 0;
            if (filter === 'All') {
              count = merchants.length;
            } else if (filter === 'Pending Approval') {
              count = merchants.filter(m => m.approvalStatus === 'Pending').length;
            } else {
              count = merchants.filter(m => m.status === filter).length;
            }
            
            return (
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
                  {filter} ({count})
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Merchants List */}
      <FlatList
        data={filteredMerchants}
        renderItem={renderMerchant}
        keyExtractor={item => item.id}
        style={styles.merchantsList}
        contentContainerStyle={styles.merchantsListContent}
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
  
  // Merchants List
  merchantsList: {
    flex: 1,
  },
  merchantsListContent: {
    padding: 20,
  },
  merchantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  merchantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  merchantInfo: {
    flex: 1,
  },
  merchantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  ownerName: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 2,
  },
  merchantEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  merchantPhone: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusContainer: {
    alignItems: 'flex-end',
    gap: 4,
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
  
  // Merchant Stats
  merchantStats: {
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
  
  // Merchant Actions
  merchantActions: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  actionButton: {
    flex: 1,
    minWidth: 80,
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
  approveButton: {
    borderColor: '#10B981',
    backgroundColor: '#D1FAE5',
  },
  approveButtonText: {
    color: '#10B981',
  },
  rejectButton: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  rejectButtonText: {
    color: '#EF4444',
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
});

export default MerchantManagement;
