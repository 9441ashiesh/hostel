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
import { useFavorites } from '../../context/FavoritesContext';

const LikesScreen = ({ navigation }) => {
  const { likedHotels, removeFavorite } = useFavorites();

  const goBack = () => {
    navigation.goBack();
  };

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  const renderHostelCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.hostelCard}
      onPress={() => navigation.navigate('HostelDetailScreen', { hostel: item })}
    >
      <View style={styles.hostelImageContainer}>
        <Text style={styles.hostelImage}>🏨</Text>
        <TouchableOpacity 
          style={styles.likeButton}
          onPress={() => handleRemoveFavorite(item.id)}
        >
          <Text style={styles.likeIcon}>❤️</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.hostelInfo}>
        <View style={styles.hostelHeader}>
          <Text style={styles.hostelName}>{item.name}</Text>
          <Text style={styles.hostelPrice}>₹{item.price}</Text>
        </View>
        
        <View style={styles.hostelStats}>
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statText}>{item.rating}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>�</Text>
            <Text style={styles.statText}>{item.reviews} reviews</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>📍</Text>
            <Text style={styles.statText}>{item.location || 'City'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <UserLayout navigation={navigation} activeTab="likes">
      <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorites</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {likedHotels.length > 0 ? (
          <>
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>
                {likedHotels.length} saved hostel{likedHotels.length !== 1 ? 's' : ''}
              </Text>
            </View>
            
            <FlatList
              data={likedHotels}
              renderItem={renderHostelCard}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
          </>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🤍</Text>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptySubtitle}>
              Start exploring hostels and save your favorites here
            </Text>
            <TouchableOpacity style={styles.exploreButton} onPress={goBack}>
              <Text style={styles.exploreButtonText}>Explore Hostels</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
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
  statsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  listContainer: {
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
    top: 8,
    right: 8,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  exploreButton: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default LikesScreen;
