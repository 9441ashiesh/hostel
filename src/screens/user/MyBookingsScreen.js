import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import UserLayout from '../../components/layout/UserLayout';

const MyBookingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('current');

  const currentBookings = [
    {
      id: '1',
      hostelName: 'Urban Hostel Downtown',
      location: 'New York, NY',
      checkIn: '2024-03-15',
      checkOut: '2024-03-18',
      guests: 2,
      status: 'confirmed',
      price: '$89',
      roomType: 'Shared Dorm',
      bookingId: 'BK001234',
    },
    {
      id: '2',
      hostelName: 'Backpacker Paradise',
      location: 'Los Angeles, CA',
      checkIn: '2024-03-25',
      checkOut: '2024-03-27',
      guests: 1,
      status: 'pending',
      price: '$65',
      roomType: 'Private Room',
      bookingId: 'BK001235',
    },
  ];

  const pastBookings = [
    {
      id: '3',
      hostelName: 'Beach Side Hostel',
      location: 'Miami, FL',
      checkIn: '2024-02-10',
      checkOut: '2024-02-15',
      guests: 2,
      status: 'completed',
      price: '$120',
      roomType: 'Ocean View Room',
      bookingId: 'BK001220',
      rating: 4.5,
    },
    {
      id: '4',
      hostelName: 'Mountain View Lodge',
      location: 'Denver, CO',
      checkIn: '2024-01-20',
      checkOut: '2024-01-23',
      guests: 1,
      status: 'completed',
      price: '$95',
      roomType: 'Shared Dorm',
      bookingId: 'BK001215',
      rating: 5.0,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return '#10B981';
      case 'pending':
        return '#F59E0B';
      case 'completed':
        return '#6B7280';
      case 'cancelled':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderBookingCard = ({ item }) => (
    <View style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <View style={styles.bookingTitleContainer}>
          <Text style={styles.hostelName}>{item.hostelName}</Text>
          <Text style={styles.location}>📍 {item.location}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.bookingDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>📅 Check-in:</Text>
          <Text style={styles.detailValue}>{formatDate(item.checkIn)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>📅 Check-out:</Text>
          <Text style={styles.detailValue}>{formatDate(item.checkOut)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>👥 Guests:</Text>
          <Text style={styles.detailValue}>{item.guests}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>🏠 Room:</Text>
          <Text style={styles.detailValue}>{item.roomType}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>💰 Price:</Text>
          <Text style={styles.priceValue}>{item.price}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>🔖 Booking ID:</Text>
          <Text style={styles.detailValue}>{item.bookingId}</Text>
        </View>
        {item.rating && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>⭐ Rating:</Text>
            <Text style={styles.ratingValue}>{item.rating}/5</Text>
          </View>
        )}
      </View>

      <View style={styles.cardActions}>
        {item.status === 'confirmed' && (
          <>
            <TouchableOpacity style={[styles.actionButton, styles.modifyButton]}>
              <Text style={styles.modifyButtonText}>✏️ Modify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
              <Text style={styles.cancelButtonText}>❌ Cancel</Text>
            </TouchableOpacity>
          </>
        )}
        {item.status === 'completed' && (
          <TouchableOpacity style={[styles.actionButton, styles.reviewButton]}>
            <Text style={styles.reviewButtonText}>⭐ Write Review</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.actionButton, styles.detailsButton]}>
          <Text style={styles.detailsButtonText}>📄 View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <UserLayout navigation={navigation} activeTab="profile">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>My Bookings</Text>
          </View>
          <View style={styles.headerRight} />
        </View>

        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'current' && styles.activeTab]}
            onPress={() => setActiveTab('current')}
          >
            <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>
              📋 Current Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'past' && styles.activeTab]}
            onPress={() => setActiveTab('past')}
          >
            <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
              📚 Past Bookings
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bookings List */}
        <View style={styles.content}>
          {activeTab === 'current' && (
            <FlatList
              data={currentBookings}
              renderItem={renderBookingCard}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>📋 No current bookings</Text>
                  <Text style={styles.emptySubtext}>Your upcoming trips will appear here</Text>
                  <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('SearchScreen')}>
                    <Text style={styles.bookNowText}>🏠 Book Your First Stay</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          )}

          {activeTab === 'past' && (
            <FlatList
              data={pastBookings}
              renderItem={renderBookingCard}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>📚 No past bookings</Text>
                  <Text style={styles.emptySubtext}>Your travel history will appear here</Text>
                </View>
              }
            />
          )}
        </View>
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#4A90E2',
    elevation: 4,
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    width: 44,
    height: 44,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4A90E2',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 100,
  },
  bookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  bookingTitleContainer: {
    flex: 1,
  },
  hostelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bookingDetails: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    textAlign: 'right',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
    flex: 1,
    textAlign: 'right',
  },
  ratingValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F59E0B',
    flex: 1,
    textAlign: 'right',
  },
  cardActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  modifyButton: {
    backgroundColor: '#F3F4F6',
  },
  modifyButtonText: {
    color: '#4A90E2',
    fontWeight: '600',
    fontSize: 12,
  },
  cancelButton: {
    backgroundColor: '#FEF2F2',
  },
  cancelButtonText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 12,
  },
  reviewButton: {
    backgroundColor: '#FFFBEB',
  },
  reviewButtonText: {
    color: '#F59E0B',
    fontWeight: '600',
    fontSize: 12,
  },
  detailsButton: {
    backgroundColor: '#EFF6FF',
  },
  detailsButtonText: {
    color: '#4A90E2',
    fontWeight: '600',
    fontSize: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24,
    textAlign: 'center',
  },
  bookNowButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
  },
  bookNowText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MyBookingsScreen;
