import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../../context/FavoritesContext';

const SearchResultsScreen = ({ navigation, route }) => {
  const { location, checkInDate, checkOutDate } = route.params || {};
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const searchResults = [
    {
      id: 1,
      name: 'Malan Greens',
      location: 'Mumbai, Maharashtra',
      rating: 5.0,
      reviews: 120,
      price: 120,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liked: false,
    },
    {
      id: 2,
      name: 'Sabro Prime',
      location: 'Mumbai, Maharashtra',
      rating: 5.0,
      reviews: 145,
      price: 90,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liked: false,
    },
    {
      id: 3,
      name: 'Ocean View Resort',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      reviews: 98,
      price: 150,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liked: false,
    },
    {
      id: 4,
      name: 'Urban Lodge',
      location: 'Mumbai, Maharashtra',
      rating: 4.7,
      reviews: 203,
      price: 110,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liked: false,
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggleFavorite = (hostel) => {
    toggleFavorite(hostel);
  };

  const renderHostelCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.hostelCard}
      onPress={() => navigation.navigate('HostelDetailScreen', { hostel: item })}
    >
      <View style={styles.hostelImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.hostelImage}
          resizeMode="cover"
        />
        <TouchableOpacity 
          style={styles.likeButton}
          onPress={() => handleToggleFavorite(item)}
        >
          <Ionicons 
            name={isFavorite(item.id) ? "heart" : "heart-outline"} 
            size={20} 
            color={isFavorite(item.id) ? "#ef4444" : "#ffffff"} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.hostelInfo}>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons 
              key={index}
              name="star" 
              size={14} 
              color="#fbbf24" 
            />
          ))}
          <Text style={styles.ratingText}>{item.rating} ({item.reviews} Reviews)</Text>
        </View>
        
        <Text style={styles.hostelName}>{item.name}</Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={14} color="#6b7280" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        
        <Text style={styles.hostelPrice}>${item.price}/night</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{location || 'Mumbai'}</Text>
        <View style={styles.placeholder} />
      </View>

      {checkInDate && checkOutDate && (
        <View style={styles.searchInfo}>
          <Text style={styles.searchInfoText}>
            📅 {checkInDate} - {checkOutDate}
          </Text>
        </View>
      )}

      <View style={styles.resultsHeader}>
        {/* Clean header - no text needed */}
      </View>

      <FlatList
        data={searchResults}
        renderItem={renderHostelCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  placeholder: {
    width: 40,
  },
  searchInfo: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  searchInfoText: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
  },
  resultsHeader: {
    height: 0,
    backgroundColor: '#f8f9fa',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  hostelCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  hostelImageContainer: {
    height: 200,
    position: 'relative',
    backgroundColor: '#e5e7eb',
  },
  hostelImage: {
    width: '100%',
    height: '100%',
  },
  likeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    padding: 8,
  },
  likeIcon: {
    fontSize: 16,
  },
  hostelInfo: {
    padding: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  hostelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#9ca3af',
    fontWeight: '500',
  },
  hostelPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  checkedBox: {
    backgroundColor: '#f0f9ff',
    borderColor: '#1f2937',
  },
});

export default SearchResultsScreen;
