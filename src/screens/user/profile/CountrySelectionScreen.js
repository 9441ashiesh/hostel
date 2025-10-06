import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CountrySelectionScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Australia', code: 'AU' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'China', code: 'CN' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Italy', code: 'IT' },
    { name: 'Japan', code: 'JP' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Russia', code: 'RU' },
    { name: 'Singapore', code: 'SG' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Vietnam', code: 'VN' },
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCountry = (countryName) => {
    setSelectedCountry(countryName);
    // Here you would typically save the selection
    navigation.goBack();
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleSelectCountry(item.name)}
    >
      <View style={styles.countryInfo}>
        <Text style={styles.countryFlag}>{getCountryFlag(item.code)}</Text>
        <Text style={styles.countryName}>{item.name}</Text>
      </View>
      {selectedCountry === item.name && (
        <Ionicons name="checkmark" size={20} color="#1f2937" />
      )}
    </TouchableOpacity>
  );

  const getCountryFlag = (code) => {
    // Simple flag mapping - in a real app you might use a flag library
    const flags = {
      'AF': '🇦🇫', 'AU': '🇦🇺', 'BD': '🇧🇩', 'BR': '🇧🇷', 'CA': '🇨🇦',
      'CN': '🇨🇳', 'FR': '🇫🇷', 'DE': '🇩🇪', 'IN': '🇮🇳', 'ID': '🇮🇩',
      'IT': '🇮🇹', 'JP': '🇯🇵', 'MX': '🇲🇽', 'NL': '🇳🇱', 'NG': '🇳🇬',
      'PK': '🇵🇰', 'RU': '🇷🇺', 'SG': '🇸🇬', 'KR': '🇰🇷', 'ES': '🇪🇸',
      'TH': '🇹🇭', 'TR': '🇹🇷', 'GB': '🇬🇧', 'US': '🇺🇸', 'VN': '🇻🇳',
    };
    return flags[code] || '🏳️';
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Country</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search countries"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9ca3af"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#9ca3af" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Countries List */}
      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.code}
        renderItem={renderCountryItem}
        style={styles.countriesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Current Selection */}
      <View style={styles.currentSelection}>
        <Text style={styles.currentSelectionLabel}>Current Selection:</Text>
        <Text style={styles.currentSelectionValue}>{selectedCountry}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerRight: {
    width: 24,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
    marginRight: 8,
  },
  countriesList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  countryFlag: {
    fontSize: 24,
    marginRight: 16,
  },
  countryName: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  currentSelection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f9fafb',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  currentSelectionLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  currentSelectionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
});

export default CountrySelectionScreen;