import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';

const { width } = Dimensions.get('window');

const HostelDetailScreen = ({ navigation, route }) => {
  const { hostel } = route.params;
  const { toggleFavorite, isFavorite } = useFavorites();

  const goBack = () => {
    navigation.goBack();
  };

  const handleToggleFavorite = () => {
    toggleFavorite(hostel);
  };

  const handleBookNow = () => {
    // Navigate to booking screen with hostel data
    navigation.navigate('BookingScreen', { 
      hostel: hostel,
      checkIn: '26 Jan',
      checkOut: '28 Feb', 
      guests: hostel.guests 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton} onPress={handleToggleFavorite}>
              <Text style={styles.likeIcon}>
                {isFavorite(hostel.id) ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Hostel Image */}
          <View style={styles.imageContainer}>
            <View style={styles.hostelImagePlaceholder}>
              <Text style={styles.hostelImageIcon}>{hostel.image}</Text>
            </View>
            
            {/* Image indicators */}
            <View style={styles.imageIndicators}>
              <View style={[styles.indicator, styles.activeIndicator]} />
              <View style={styles.indicator} />
              <View style={styles.indicator} />
            </View>
          </View>

          {/* Hostel Info */}
          <View style={styles.hostelInfo}>
            <View style={styles.titleRow}>
              <Text style={styles.hostelName}>{hostel.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.starIcon}>⭐</Text>
                <Text style={styles.rating}>{hostel.rating}</Text>
              </View>
            </View>
            <Text style={styles.year}>{hostel.year}</Text>
          </View>

          {/* Technical Specifications */}
          <View style={styles.specificationsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Facility specifications</Text>
              <TouchableOpacity onPress={() => navigation.navigate('FacilitiesScreen', { hostel })}>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.specificationsGrid}>
              <View style={styles.specItem}>
                <View style={styles.specIcon}>
                  <Text style={styles.specIconText}>🛏️</Text>
                </View>
                <Text style={styles.specTitle}>Beds</Text>
                <Text style={styles.specValue}>{hostel.guests}</Text>
                <Text style={styles.specSubtext}>Available</Text>
              </View>

              <View style={styles.specItem}>
                <View style={styles.specIcon}>
                  <Text style={styles.specIconText}>🏢</Text>
                </View>
                <Text style={styles.specTitle}>Rooms</Text>
                <Text style={styles.specValue}>12</Text>
                <Text style={styles.specSubtext}>Total</Text>
              </View>

              <View style={styles.specItem}>
                <View style={styles.specIcon}>
                  <Text style={styles.specIconText}>⚡</Text>
                </View>
                <Text style={styles.specTitle}>WiFi</Text>
                <Text style={styles.specValue}>Free</Text>
                <Text style={styles.specSubtext}>High Speed</Text>
              </View>
            </View>
          </View>

          {/* Location Map */}
          <View style={styles.mapSection}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapText}>🗺️ {hostel.location}</Text>
              <View style={styles.mapOverlay}>
                <View style={styles.mapGrid}>
                  <View style={[styles.mapBlock, { backgroundColor: '#22c55e' }]} />
                  <View style={[styles.mapBlock, { backgroundColor: '#3b82f6' }]} />
                  <View style={[styles.mapBlock, { backgroundColor: '#f59e0b' }]} />
                  <View style={[styles.mapBlock, { backgroundColor: '#ef4444' }]} />
                  <View style={[styles.mapBlock, { backgroundColor: '#8b5cf6' }]} />
                  <View style={[styles.mapBlock, { backgroundColor: '#06b6d4' }]} />
                </View>
              </View>
            </View>
          </View>

          {/* Amenities */}
          <View style={styles.amenitiesSection}>
            <Text style={styles.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesList}>
              <View style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>🅿️</Text>
                <Text style={styles.amenityText}>Free Parking</Text>
              </View>
              <View style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>🍳</Text>
                <Text style={styles.amenityText}>Kitchen Access</Text>
              </View>
              <View style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>🚿</Text>
                <Text style={styles.amenityText}>Clean Bathrooms</Text>
              </View>
              <View style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>🔒</Text>
                <Text style={styles.amenityText}>Lockers</Text>
              </View>
            </View>
          </View>

          {/* Bottom Space for fixed booking bar */}
          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* Fixed Booking Bar */}
        <View style={styles.bookingBar}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{hostel.price}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 18,
    color: '#1f2937',
    fontWeight: 'bold',
  },
  likeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  likeIcon: {
    fontSize: 18,
  },
  imageContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  hostelImagePlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: '#e5e7eb',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  hostelImageIcon: {
    fontSize: 80,
  },
  imageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#1f2937',
    width: 20,
  },
  hostelInfo: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  hostelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  starIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400e',
  },
  year: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 5,
  },
  specificationsSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  seeAllText: {
    fontSize: 14,
    color: '#22c55e',
    fontWeight: '500',
  },
  specificationsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  specIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0fdf4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  specIconText: {
    fontSize: 20,
  },
  specTitle: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 5,
  },
  specValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  specSubtext: {
    fontSize: 10,
    color: '#9ca3af',
  },
  mapSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mapText: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 10,
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  mapGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapBlock: {
    width: '33.33%',
    height: '50%',
  },
  amenitiesSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  amenitiesList: {
    marginTop: 15,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  amenityIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  amenityText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  bottomSpace: {
    height: 120,
  },
  bookingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 34,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 12,
  },
  priceContainer: {
    flex: 0,
  },
  priceLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
    fontWeight: '400',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  priceUnit: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6b7280',
  },
  bookButton: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 30,
    minWidth: 160,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HostelDetailScreen;
