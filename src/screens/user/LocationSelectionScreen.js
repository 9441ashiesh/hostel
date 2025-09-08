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

const LocationSelectionScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const recentSearches = [
    { id: 1, name: 'Gachibowli', type: 'Area' },
    { id: 2, name: 'Shamshabad', type: 'Area' },
    { id: 3, name: 'Kukatpally', type: 'Area' },
    { id: 4, name: 'Madhapur', type: 'Area' },
  ];

  const popularCities = [
    { id: 1, name: 'Delhi' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Kolkata' },
    { id: 4, name: 'Bangalore' },
    { id: 5, name: 'Chennai' },
    { id: 6, name: 'Hyderabad' },
  ];

  const filteredCities = popularCities.filter(city =>
    city.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredRecentSearches = recentSearches.filter(search =>
    search.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleLocationSelect = (locationName) => {
    // Navigate back to search screen with selected location
    navigation.navigate('SearchScreen', { selectedLocation: locationName });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="City, area or Hotel name"
            value={searchText}
            onChangeText={setSearchText}
            autoFocus={true}
          />
          <TouchableOpacity style={styles.searchIconButton}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Near Me Option */}
        <TouchableOpacity 
          style={styles.nearMeContainer}
          onPress={() => handleLocationSelect('Current Location')}
        >
          <View style={styles.nearMeIcon}>
            <Text style={styles.locationIcon}>🎯</Text>
          </View>
          <View style={styles.nearMeText}>
            <Text style={styles.nearMeTitle}>Near me</Text>
            <Text style={styles.nearMeSubtitle}>Properties near your current locations</Text>
          </View>
        </TouchableOpacity>

        {/* Recent Searches */}
        {filteredRecentSearches.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            {filteredRecentSearches.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.locationItem}
                onPress={() => handleLocationSelect(item.name)}
              >
                <Text style={styles.locationName}>{item.name}</Text>
                <Text style={styles.locationType}>{item.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Popular Cities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular cities</Text>
          {filteredCities.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.locationItem}
              onPress={() => handleLocationSelect(item.name)}
            >
              <Text style={styles.locationName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#4A90E2',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  searchIconButton: {
    padding: 4,
  },
  searchIcon: {
    fontSize: 16,
    color: '#6B7280',
  },
  
  // Content
  content: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  
  // Near Me
  nearMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 8,
  },
  nearMeIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  locationIcon: {
    fontSize: 20,
  },
  nearMeText: {
    flex: 1,
  },
  nearMeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  nearMeSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  // Sections
  section: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  
  // Location Items
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  locationName: {
    fontSize: 16,
    color: '#1F2937',
  },
  locationType: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  // Bottom Space
  bottomSpace: {
    height: 50,
  },
});

export default LocationSelectionScreen;
