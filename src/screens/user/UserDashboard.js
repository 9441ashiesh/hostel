import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import UserLayout from '../../components/layout/UserLayout';

const UserDashboard = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Budget', 'Premium', 'Family', 'Solo'];

  const hostels = [
    {
      id: 1,
      name: 'Backpacker Heaven',
      price: '$25/night',
      year: '2023',
      rating: 4.5,
      guests: 6,
      image: '🏠',
      location: 'Downtown',
      liked: false,
    },
    {
      id: 2,
      name: 'Mountain View Hostel',
      price: '$35/night',
      year: '2022',
      rating: 4.8,
      guests: 4,
      image: '🏔️',
      location: 'Hills',
      liked: true,
    },
    {
      id: 3,
      name: 'City Center Lodge',
      price: '$30/night',
      year: '2023',
      rating: 4.3,
      guests: 8,
      image: '🏢',
      location: 'Central',
      liked: false,
    },
  ];

  const handleLogout = () => {
    logout();
    // No need to reset navigation, the AppNavigator will handle the route change
  };

  const toggleLike = (id) => {
    // Handle like functionality
  };

  return (
    <UserLayout navigation={navigation} activeTab="home">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>Indonesia</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Good Morning,</Text>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>Maria</Text>
              <Text style={styles.waveEmoji}>👋</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.profileContainer} onPress={handleLogout}>
          <View style={styles.profileImage}>
            <Text style={styles.profileText}>M</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategory
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Hostels Section */}
        <Text style={styles.sectionTitle}>Popular hostels</Text>

        {/* Hostels List */}
        <View style={styles.hostelsContainer}>
          {hostels.map((hostel) => (
            <TouchableOpacity 
              key={hostel.id} 
              style={styles.hostelCard}
              onPress={() => navigation.navigate('HostelDetailScreen', { hostel })}
            >
              <View style={styles.hostelImageContainer}>
                <Text style={styles.hostelImage}>{hostel.image}</Text>
                <TouchableOpacity 
                  style={styles.likeButton}
                  onPress={() => toggleLike(hostel.id)}
                >
                  <Text style={styles.likeIcon}>
                    {hostel.liked ? '❤️' : '🤍'}
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.hostelInfo}>
                <View style={styles.hostelHeader}>
                  <Text style={styles.hostelName}>{hostel.name}</Text>
                  <Text style={styles.hostelPrice}>{hostel.price}</Text>
                </View>
                <Text style={styles.hostelYear}>{hostel.year}</Text>
                
                <View style={styles.hostelStats}>
                  <View style={styles.statItem}>
                    <Text style={styles.statIcon}>⭐</Text>
                    <Text style={styles.statText}>{hostel.rating}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statIcon}>👥</Text>
                    <Text style={styles.statText}>{hostel.guests}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#f8f9fa',
  },
  headerLeft: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 4,
  },
  locationText: {
    fontSize: 20,
    color: '#6b7280',
    marginRight: 4,
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#6b7280',
  },
  greetingContainer: {
    marginTop: 4,
  },
  greetingText: {
    fontSize: 40,
    color: '#9ca3af',
    fontWeight: '400',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1f2937',
    marginRight: 8,
  },
  waveEmoji: {
    fontSize: 24,
  },
  profileContainer: {
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedCategory: {
    backgroundColor: '#1f2937',
    borderColor: '#1f2937',
  },
  categoryText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  hostelsContainer: {
    paddingBottom: 100,
  },
  hostelCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hostelImageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingVertical: 20,
  },
  hostelImage: {
    fontSize: 60,
  },
  likeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
  },
  likeIcon: {
    fontSize: 20,
  },
  hostelInfo: {
    flex: 1,
  },
  hostelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  hostelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  hostelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  hostelYear: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  hostelStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  statText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
});

export default UserDashboard;
