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

const CurrencySelectionScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', popular: true },
    { code: 'EUR', name: 'Euro', symbol: '€', popular: true },
    { code: 'GBP', name: 'British Pound', symbol: '£', popular: true },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', popular: true },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', popular: true },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', popular: true },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', popular: true },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', popular: true },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', popular: false },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', popular: false },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', popular: false },
    { code: 'THB', name: 'Thai Baht', symbol: '฿', popular: false },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', popular: false },
    { code: 'MXN', name: 'Mexican Peso', symbol: '$', popular: false },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', popular: false },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R', popular: false },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', popular: false },
    { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', popular: false },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', popular: false },
    { code: 'DKK', name: 'Danish Krone', symbol: 'kr', popular: false },
  ];

  const popularCurrencies = currencies.filter(currency => currency.popular);
  const allCurrencies = currencies.filter(currency => 
    currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCurrency = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    // Here you would typically save the selection
    navigation.goBack();
  };

  const renderCurrencyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.currencyItem}
      onPress={() => handleSelectCurrency(item.code)}
    >
      <View style={styles.currencyInfo}>
        <View style={styles.currencySymbol}>
          <Text style={styles.symbolText}>{item.symbol}</Text>
        </View>
        <View style={styles.currencyDetails}>
          <Text style={styles.currencyCode}>{item.code}</Text>
          <Text style={styles.currencyName}>{item.name}</Text>
        </View>
      </View>
      {selectedCurrency === item.code && (
        <Ionicons name="checkmark" size={20} color="#3b82f6" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Currency</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#9ca3af" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search currencies"
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

        {/* Popular Currencies */}
        {searchQuery === '' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Currencies</Text>
            <FlatList
              data={popularCurrencies}
              keyExtractor={(item) => item.code}
              renderItem={renderCurrencyItem}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* All Currencies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {searchQuery === '' ? 'All Currencies' : 'Search Results'}
          </Text>
          <FlatList
            data={searchQuery === '' ? currencies : allCurrencies}
            keyExtractor={(item) => item.code}
            renderItem={renderCurrencyItem}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Current Selection */}
      <View style={styles.currentSelection}>
        <Text style={styles.currentSelectionLabel}>Current Selection:</Text>
        <View style={styles.currentSelectionInfo}>
          <Text style={styles.currentSelectionSymbol}>
            {currencies.find(c => c.code === selectedCurrency)?.symbol}
          </Text>
          <Text style={styles.currentSelectionValue}>
            {selectedCurrency} - {currencies.find(c => c.code === selectedCurrency)?.name}
          </Text>
        </View>
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
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  currencySymbol: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  symbolText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  currencyDetails: {
    flex: 1,
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  currencyName: {
    fontSize: 14,
    color: '#6b7280',
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
    marginBottom: 8,
  },
  currentSelectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSelectionSymbol: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  currentSelectionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
});

export default CurrencySelectionScreen;