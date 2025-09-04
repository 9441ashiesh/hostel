import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import MerchantLayout from '../../components/layout/MerchantLayout';

const { width } = Dimensions.get('window');

const Rooms = ({ navigation }) => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'Deluxe Room',
      type: 'AC',
      capacity: '2 Adults',
      price: '₹2,500',
      status: 'Available',
      count: 10,
    },
    {
      id: 2,
      name: 'Standard Room',
      type: 'Non-AC',
      capacity: '2 Adults',
      price: '₹1,800',
      status: 'Available',
      count: 15,
    },
    {
      id: 3,
      name: 'Suite Room',
      type: 'AC',
      capacity: '4 Adults',
      price: '₹4,000',
      status: 'Occupied',
      count: 5,
    },
  ]);

  const handleAddRoom = () => {
    // Navigate to add room screen or show modal
    console.log('Add new room');
  };

  const handleEditRoom = (roomId) => {
    console.log('Edit room:', roomId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return '#10B981';
      case 'Occupied':
        return '#EF4444';
      case 'Maintenance':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  return (
    <MerchantLayout navigation={navigation} currentRoute="Rooms">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Rooms</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>30</Text>
              <Text style={styles.statLabel}>Total Rooms</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>25</Text>
              <Text style={styles.statLabel}>Available</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Occupied</Text>
            </View>
          </View>
        </View>

        {/* Rooms List */}
        <ScrollView style={styles.roomsList} showsVerticalScrollIndicator={false}>
          <View style={styles.roomsHeader}>
            <Text style={styles.roomsTitle}>Room Categories</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleAddRoom}>
              <Text style={styles.addButtonText}>+ Add Room</Text>
            </TouchableOpacity>
          </View>

          {rooms.map((room) => (
            <View key={room.id} style={styles.roomCard}>
              <View style={styles.roomCardHeader}>
                <View style={styles.roomInfo}>
                  <Text style={styles.roomName}>{room.name}</Text>
                  <Text style={styles.roomType}>{room.type} • {room.capacity}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(room.status) + '20' }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(room.status) }]}>
                    {room.status}
                  </Text>
                </View>
              </View>

              <View style={styles.roomDetails}>
                <View style={styles.roomDetailItem}>
                  <Text style={styles.roomDetailLabel}>Price per night</Text>
                  <Text style={styles.roomDetailValue}>{room.price}</Text>
                </View>
                <View style={styles.roomDetailItem}>
                  <Text style={styles.roomDetailLabel}>Total Rooms</Text>
                  <Text style={styles.roomDetailValue}>{room.count}</Text>
                </View>
              </View>

              <View style={styles.roomActions}>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => handleEditRoom(room.id)}
                >
                  <Text style={styles.editButtonText}>Edit Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View Bookings</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Empty State */}
          {rooms.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🏠</Text>
              <Text style={styles.emptyTitle}>No rooms created yet</Text>
              <Text style={styles.emptySubtitle}>
                Start by creating your first room{'\n'}Create your first Room
              </Text>
              <TouchableOpacity style={styles.createButton} onPress={handleAddRoom}>
                <Text style={styles.createButtonText}>+ Create Your First Room</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </MerchantLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#3B82F6',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerRight: {
    width: 40,
  },
  statsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  roomsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  roomsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  roomsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  addButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  roomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  roomCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  roomInfo: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  roomType: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  roomDetails: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  roomDetailItem: {
    flex: 1,
  },
  roomDetailLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  roomDetailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  roomActions: {
    flexDirection: 'row',
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  createButton: {
    backgroundColor: '#F97316',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Rooms;