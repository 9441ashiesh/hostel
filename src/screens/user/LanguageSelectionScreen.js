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

const LanguageSelectionScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { name: 'English', code: 'en', popular: true },
    { name: 'Español', code: 'es', popular: true },
    { name: 'Français', code: 'fr', popular: true },
    { name: 'Deutsch', code: 'de', popular: true },
    { name: '中文', code: 'zh', popular: true },
    { name: '日本語', code: 'ja', popular: true },
    { name: 'Italiano', code: 'it', popular: true },
    { name: 'हिन्दी', code: 'hi', popular: true },
    { name: 'العربية', code: 'ar', popular: false },
    { name: 'Português', code: 'pt', popular: false },
    { name: 'Русский', code: 'ru', popular: false },
    { name: '한국어', code: 'ko', popular: false },
    { name: 'Nederlands', code: 'nl', popular: false },
    { name: 'Svenska', code: 'sv', popular: false },
    { name: 'Polski', code: 'pl', popular: false },
    { name: 'Türkçe', code: 'tr', popular: false },
    { name: 'ไทย', code: 'th', popular: false },
    { name: 'Tiếng Việt', code: 'vi', popular: false },
    { name: 'Bahasa Indonesia', code: 'id', popular: false },
    { name: 'Українська', code: 'uk', popular: false },
  ];

  const popularLanguages = languages.filter(language => language.popular);
  const allLanguages = languages.filter(language => 
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLanguage = (languageName) => {
    setSelectedLanguage(languageName);
    // Here you would typically save the selection and possibly trigger app language change
    navigation.goBack();
  };

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => handleSelectLanguage(item.name)}
    >
      <View style={styles.languageInfo}>
        <View style={styles.languageIcon}>
          <Ionicons name="language" size={20} color="#6b7280" />
        </View>
        <View style={styles.languageDetails}>
          <Text style={styles.languageName}>{item.name}</Text>
          <Text style={styles.languageCode}>{item.code.toUpperCase()}</Text>
        </View>
      </View>
      {selectedLanguage === item.name && (
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
        <Text style={styles.headerTitle}>Select Language</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#9ca3af" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search languages"
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

        {/* Popular Languages */}
        {searchQuery === '' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Languages</Text>
            <FlatList
              data={popularLanguages}
              keyExtractor={(item) => item.code}
              renderItem={renderLanguageItem}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* All Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {searchQuery === '' ? 'All Languages' : 'Search Results'}
          </Text>
          <FlatList
            data={searchQuery === '' ? languages : allLanguages}
            keyExtractor={(item) => item.code}
            renderItem={renderLanguageItem}
            scrollEnabled={false}
          />
        </View>

        {/* Language Note */}
        <View style={styles.noteContainer}>
          <View style={styles.noteIcon}>
            <Ionicons name="information-circle" size={20} color="#3b82f6" />
          </View>
          <Text style={styles.noteText}>
            Changing your language will update the app interface. Some content may still appear in the original language.
          </Text>
        </View>
      </ScrollView>

      {/* Current Selection */}
      <View style={styles.currentSelection}>
        <Text style={styles.currentSelectionLabel}>Current Selection:</Text>
        <Text style={styles.currentSelectionValue}>{selectedLanguage}</Text>
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
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  languageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  languageDetails: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  languageCode: {
    fontSize: 14,
    color: '#6b7280',
  },
  noteContainer: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  noteIcon: {
    marginRight: 12,
    marginTop: 1,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
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

export default LanguageSelectionScreen;