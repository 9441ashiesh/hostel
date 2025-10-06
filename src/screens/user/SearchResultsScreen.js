import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserLayout from '../../components/layout/UserLayout';
import { useFavorites } from '../../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const SearchResultsScreen = ({ navigation, route }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { 
    location = 'Hyderabad', 
    guests = 1, 
    checkIn = '26 Jan - 28 Feb'
  } = route.params || {};

  // Search Results Data (matching your attached image)
  const searchResults = [
    {
      id: 1,
      name: 'Executive Plaza & Serviced Apartments',
      rating: 4.2,
      reviews: 1250,
      price: '2500',
      originalPrice: 3000,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      discount: '17% off',
      amenities: ['Free WiFi', 'Pool', 'Spa'],
    },
    {
      id: 2,
      name: 'The President Hotel',
      rating: 4.5,
      reviews: 980,
      price: '1800',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      amenities: ['Free WiFi', 'Restaurant', 'Gym'],
    },
    {
      id: 3,
      name: 'Hotel Asia International',
      rating: 4.3,
      reviews: 756,
      price: '2200',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      amenities: ['Business Center', 'Restaurant', 'Parking'],
    },
    {
      id: 4,
      name: 'Brij Villa Resort',
      rating: 4.0,
      reviews: 532,
      price: '1950',
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      amenities: ['Pool', 'Garden', 'Restaurant'],
    },
    {
      id: 5,
      name: 'Grand Plaza Hotel',
      rating: 4.4,
      reviews: 1100,
      price: '2800',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      amenities: ['Luxury Spa', 'Fine Dining', 'Concierge'],
    },
    {
      id: 6,
      name: 'City Center Hotel',
      rating: 4.1,
      reviews: 890,
      price: '2100',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: location,
      amenities: ['Free WiFi', 'Conference Room', 'Parking'],
    },
  ];

    const handleGoBack = () => {
    navigation.goBack();
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity 
      style={styles.searchResultCard}
      onPress={() => navigation.navigate('HostelDetailScreen', { hostel: item })}
    >
      <View style={styles.searchResultImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.searchResultImage}
          resizeMode="cover"
        />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(item)}
          activeOpacity={0.7}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite(item.id) ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
        {item.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        )}
      </View>
      <View style={styles.searchResultInfo}>
        <Text style={styles.searchResultName}>{item.name}</Text>
        <View style={styles.searchResultRating}>
          <Text style={styles.ratingStars}>⭐ {item.rating}</Text>
          <Text style={styles.reviewCount}>({item.reviews} reviews)</Text>
        </View>
        <Text style={styles.searchResultLocation}>📍 {item.location}</Text>
        {item.amenities && (
          <Text style={styles.amenitiesText}>• {item.amenities.join(' • ')}</Text>
        )}
        <View style={styles.priceContainer}>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
          )}
          <Text style={styles.priceText}>₹{item.price}</Text>
          <Text style={styles.priceLabel}>/night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <UserLayout navigation={navigation} activeTab="search">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleGoBack}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Search Results</Text>
            <Text style={styles.headerSubtitle}>{searchResults.length} hotels in {location}</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Search Summary */}
        <View style={styles.searchSummary}>
          <Text style={styles.summaryText}>📍 {location} • {checkIn} • {guests} {guests === 1 ? 'Guest' : 'Guests'}</Text>
        </View>

        {/* Results List */}
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultsList}
        />
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
  },
  
  // Search Summary
  searchSummary: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  summaryText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Results List
  resultsList: {
    paddingTop: 8,
    paddingBottom: 100,
  },
  searchResultCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchResultImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  searchResultImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 14,
  },
  discountTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  searchResultInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchResultName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  searchResultRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  ratingStars: {
    fontSize: 14,
    color: '#F59E0B',
  },
  reviewCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  searchResultLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  amenitiesText: {
    fontSize: 12,
    color: '#10B981',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  originalPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  priceLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
});

export default SearchResultsScreen;
