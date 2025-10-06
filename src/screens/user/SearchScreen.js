import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StatusBar,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserLayout from '../../components/layout/UserLayout';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({ navigation, route }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Get values returned from other screens
  useEffect(() => {
    if (route.params?.selectedLocation !== undefined) {
      setSelectedLocation(route.params.selectedLocation);
    }
    if (route.params?.selectedDate !== undefined) {
      setSelectedDate(route.params.selectedDate);
    }
  }, [route.params]);

  const handleLocationPress = () => {
    navigation.navigate('LocationSelectionScreen', {
      currentDate: selectedDate,
      currentLocation: selectedLocation
    });
  };

  const handleDatePress = () => {
    navigation.navigate('DateSelectionScreen', {
      currentLocation: selectedLocation,
      currentDate: selectedDate
    });
  };

  const handleSearch = () => {
    // Navigate to search results with selected parameters
    navigation.navigate('SearchResultsScreen', {
      location: selectedLocation,
      date: selectedDate,
    });
  };
  const popularHotels = [
    {
      id: 1,
      name: 'The Dreamland by Young Villas',
      location: 'Kuta, Denpasar, Bali',
      price: 34,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400',
    },
    {
      id: 2,
      name: 'Paradise Hotel',
      location: 'Kuta, Denpasar, Bali',
      price: 37,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400',
    },
  ];

  return (
    <UserLayout navigation={navigation} activeTab="search">
      <SafeAreaView 
        style={styles.safeArea}
        edges={['top']}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        
        <ScrollView 
          style={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hey Hasna👋</Text>
              <Text style={styles.welcomeText}>Let's start your journey!</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={24} color="#1F2937" />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </View>

          {/* Search Form Card */}
          <View style={styles.searchCard}>
            {/* Location */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <TouchableOpacity 
                style={styles.inputWrapper}
                onPress={handleLocationPress}
              >
                <Ionicons name="location-outline" size={20} color="#B0B0B0" style={styles.inputIcon} />
                <Text style={selectedLocation ? styles.inputText : styles.placeholderText}>
                  {selectedLocation || 'Enter your destination'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Date */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity 
                style={styles.inputWrapper}
                onPress={handleDatePress}
              >
                <Ionicons name="calendar-outline" size={20} color="#B0B0B0" style={styles.inputIcon} />
                <Text style={selectedDate ? styles.inputText : styles.placeholderText}>
                  {selectedDate || 'Select Date'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Search Button */}
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* Popular Hotel Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Hotel</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hotelsContent}
            >
              {popularHotels.map((hotel) => (
                <TouchableOpacity key={hotel.id} style={styles.hotelCard}>
                  <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
                  <TouchableOpacity style={styles.heartButton}>
                    <Ionicons name="heart-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                  <View style={styles.hotelInfo}>
                    <Text style={styles.hotelName} numberOfLines={1}>{hotel.name}</Text>
                    <View style={styles.locationRow}>
                      <Ionicons name="location-outline" size={14} color="#6B7280" />
                      <Text style={styles.locationText} numberOfLines={1}>{hotel.location}</Text>
                    </View>
                    <View style={styles.bottomRow}>
                      <Text style={styles.price}>
                        ${hotel.price}<Text style={styles.priceUnit}>/night</Text>
                      </Text>
                      <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={14} color="#FFB800" />
                        <Text style={styles.ratingText}>{hotel.rating}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  searchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '500',
  },
  placeholderText: {
    flex: 1,
    fontSize: 14,
    color: '#B0B0B0',
  },
  searchButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  section: {
    marginTop: 24,
    paddingBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  seeAll: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
  },
  hotelsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  hotelCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  hotelImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  hotelInfo: {
    padding: 12,
  },
  hotelName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
    flex: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3b82f6',
  },
  priceUnit: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6B7280',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 4,
  },
});

export default SearchScreen;