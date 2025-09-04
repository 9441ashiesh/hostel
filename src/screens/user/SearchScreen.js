import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import UserLayout from '../../components/layout/UserLayout';

const SearchScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Hotels');
  const [checkIn, setCheckIn] = useState('26 Jan - 28 Feb');
  const [guests, setGuests] = useState('1 Room, 1 Guest');
  const [location, setLocation] = useState('Hyderabad');

  const tabs = ['Hotels', 'Resorts', 'Hourstay'];

  const nearbyHotels = [
    {
      id: 1,
      name: 'BeachSide Resort',
      rating: 4.2,
      reviews: 1520,
      price: 950,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true,
    },
    {
      id: 2,
      name: 'Coral Resorts',
      rating: 4.5,
      reviews: 850,
      price: 890,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true,
    },
    {
      id: 3,
      name: 'Palm Beach Hotel',
      rating: 4.3,
      reviews: 1205,
      price: 1200,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true,
    },
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Hotel Best Auto Hopper',
      rating: 4.8,
      reviews: 850,
      price: 990,
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Delhi',
    },
    {
      id: 2,
      name: 'Deco Boutique Hotel',
      rating: 4.5,
      reviews: 1205,
      price: 900,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Mumbai',
    },
    {
      id: 3,
      name: 'Kenting Amanda Hotel',
      rating: 4.2,
      reviews: 750,
      price: 750,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Bangalore',
    },
    {
      id: 4,
      name: 'Le Dommarin Hotel',
      rating: 4.0,
      reviews: 650,
      price: 430,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Chennai',
    },
  ];

  const renderNearbyHotel = ({ item }) => (
    <TouchableOpacity style={styles.nearbyCard}>
      <View style={styles.nearbyImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.nearbyImageStyle}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteIcon}>🤍</Text>
        </TouchableOpacity>
        <View style={styles.priceTag}>
          <Text style={styles.priceTagText}>₹{item.price}</Text>
        </View>
      </View>
      <View style={styles.nearbyInfo}>
        <Text style={styles.nearbyName}>{item.name}</Text>
        <View style={styles.nearbyRating}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.reviewsText}>({item.reviews})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderRecommendation = ({ item }) => (
    <TouchableOpacity style={styles.recommendationCard}>
      <View style={styles.recommendationImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.recommendationImageStyle}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.favoriteButtonSmall}>
          <Text style={styles.favoriteIconSmall}>🤍</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendationInfo}>
        <Text style={styles.recommendationName}>{item.name}</Text>
        <View style={styles.recommendationRating}>
          <Text style={styles.ratingStars}>⭐ {item.rating}</Text>
          <Text style={styles.reviewCount}>({item.reviews} reviews)</Text>
        </View>
        <Text style={styles.recommendationLocation}>📍 {item.location}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>₹{item.price}</Text>
          <Text style={styles.priceLabel}>/night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <UserLayout navigation={navigation} activeTab="search">
      <SafeAreaView style={styles.container}>
        {/* Blue Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.locationText}>📍 {location} ▼</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.headerIcon}>
                <Text style={styles.iconText}>📋</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon}>
                <Text style={styles.iconText}>🔔</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Tabs */}
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  selectedTab === tab && styles.activeTab
                ]}
                onPress={() => setSelectedTab(tab)}
              >
                <Text style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText
                ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Search Card */}
          <View style={styles.searchCard}>
            <View style={styles.searchRow}>
              <View style={styles.searchField}>
                <Text style={styles.searchLabel}>Select location</Text>
                <TouchableOpacity style={styles.locationSelector}>
                  <Text style={styles.locationIcon}>📍</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.searchRow}>
              <View style={styles.dateField}>
                <Text style={styles.dateText}>{checkIn}</Text>
                <Text style={styles.nightsText}>5 Nights</Text>
              </View>
              <View style={styles.guestField}>
                <Text style={styles.guestText}>{guests}</Text>
                <Text style={styles.guestSubText}>1 Adults</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Hotel Nearby */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hotel Nearby</Text>
            <FlatList
              data={nearbyHotels}
              renderItem={renderNearbyHotel}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.nearbyList}
            />
          </View>

          {/* Recommendation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            {recommendations.map((item) => (
              <View key={item.id}>
                {renderRecommendation({ item })}
              </View>
            ))}
          </View>

          {/* Bottom Space for Navigation */}
          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  // Header with Blue Background
  header: {
    backgroundColor: '#4A90E2',
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  locationText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  
  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    marginRight: 12,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4A90E2',
  },
  
  // Search Card
  searchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchField: {
    flex: 1,
  },
  searchLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  locationIcon: {
    fontSize: 18,
    color: '#4A90E2',
  },
  dateField: {
    flex: 1,
    marginRight: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  nightsText: {
    fontSize: 14,
    color: '#6B7280',
  },
  guestField: {
    flex: 1,
  },
  guestText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  guestSubText: {
    fontSize: 14,
    color: '#6B7280',
  },
  searchButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // Content
  content: {
    flex: 1,
    paddingTop: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  
  // Nearby Hotels - Updated for horizontal cards with images
  nearbyList: {
    paddingHorizontal: 20,
  },
  nearbyCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nearbyImageContainer: {
    height: 140,
    position: 'relative',
  },
  nearbyImageStyle: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 16,
  },
  priceTag: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#4A90E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  priceTagText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  nearbyInfo: {
    padding: 12,
  },
  nearbyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  nearbyRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#F59E0B',
  },
  reviewsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  
  // Recommendations
  recommendationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
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
  recommendationImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  recommendationImageStyle: {
    width: '100%',
    height: '100%',
  },
  favoriteButtonSmall: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIconSmall: {
    fontSize: 12,
  },
  recommendationInfo: {
    flex: 1,
  },
  recommendationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  recommendationRating: {
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
  recommendationLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
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
  
  // Bottom Space
  bottomSpace: {
    height: 100,
  },
});

export default SearchScreen;
