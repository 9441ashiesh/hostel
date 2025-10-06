import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GuestSelectionScreen = ({ navigation, route }) => {
  const currentLocation = route.params?.currentLocation || '';
  const currentDate = route.params?.currentDate || '';
  const currentGuests = route.params?.currentGuests || 1;
  
  const [selectedGuests, setSelectedGuests] = useState(currentGuests);

  const guestOptions = [
    { id: 1, label: '1 Guest', value: 1 },
    { id: 2, label: '2 Guests', value: 2 },
    { id: 3, label: '3 Guests', value: 3 },
    { id: 4, label: '4 Guests', value: 4 },
    { id: 5, label: '5 Guests', value: 5 },
    { id: 6, label: '6 Guests', value: 6 },
    { id: 7, label: '7 Guests', value: 7 },
    { id: 8, label: '8 Guests', value: 8 },
  ];

  const handleGuestSelect = (guestCount) => {
    setSelectedGuests(guestCount);
  };

  const handleApply = () => {
    // Navigate back to search screen with selected guests and preserve other data
    navigation.navigate('SearchScreen', { 
      selectedLocation: currentLocation,
      selectedDate: currentDate,
      selectedGuests: selectedGuests
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Guests</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of Guests</Text>
          <Text style={styles.sectionSubtitle}>How many people will be staying?</Text>
        </View>

        <View style={styles.guestOptions}>
          {guestOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.guestOption,
                selectedGuests === option.value && styles.selectedGuestOption
              ]}
              onPress={() => handleGuestSelect(option.value)}
            >
              <Text style={[
                styles.guestOptionText,
                selectedGuests === option.value && styles.selectedGuestOptionText
              ]}>
                {option.label}
              </Text>
              {selectedGuests === option.value && (
                <Ionicons name="checkmark" size={20} color="#1f2937" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.customGuestSection}>
          <Text style={styles.customGuestTitle}>Need more than 8 guests?</Text>
          <Text style={styles.customGuestSubtitle}>
            Contact us for group bookings and special arrangements
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="call" size={16} color="#1f2937" />
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>
            Apply ({selectedGuests} {selectedGuests === 1 ? 'Guest' : 'Guests'})
          </Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  guestOptions: {
    gap: 12,
  },
  guestOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedGuestOption: {
    borderColor: '#1f2937',
    backgroundColor: '#f0f9ff',
  },
  guestOptionText: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  selectedGuestOptionText: {
    color: '#1f2937',
    fontWeight: '600',
  },
  customGuestSection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  customGuestTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  customGuestSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
  },
  contactButtonText: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  applyButton: {
    backgroundColor: '#1f2937',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GuestSelectionScreen;