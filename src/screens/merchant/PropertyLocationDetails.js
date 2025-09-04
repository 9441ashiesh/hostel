import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';

const PropertyLocationDetails = ({ navigation }) => {
  const [formData, setFormData] = useState({
    houseNumber: '',
    locality: '',
    pincode: '',
    country: '',
    state: '',
    city: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSaveAndContinue = () => {
    // Handle save and continue logic
    console.log('Form data:', formData);
    // Navigate to next step or save
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Property Location Details</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Enter all the location details</Text>
        </View>

        {/* Location Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for location"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <View style={styles.mapPin}>
              <Text style={styles.mapPinIcon}>📍</Text>
            </View>
            <Text style={styles.mapText}>Map will show here</Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* House/Building/Apartment No. */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              House/Building/Apartment No. <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter house/building/apartment no."
              placeholderTextColor="#9CA3AF"
              value={formData.houseNumber}
              onChangeText={(value) => handleInputChange('houseNumber', value)}
            />
          </View>

          {/* Locality/Area/Street/Sector */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              Locality/Area/Street/Sector <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter area"
              placeholderTextColor="#9CA3AF"
              value={formData.locality}
              onChangeText={(value) => handleInputChange('locality', value)}
            />
          </View>

          {/* Pincode */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              Pincode <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter pincode"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              value={formData.pincode}
              onChangeText={(value) => handleInputChange('pincode', value)}
            />
          </View>

          {/* Country */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              Country <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Country"
              placeholderTextColor="#9CA3AF"
              value={formData.country}
              onChangeText={(value) => handleInputChange('country', value)}
            />
          </View>

          {/* State */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              State <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter State"
              placeholderTextColor="#9CA3AF"
              value={formData.state}
              onChangeText={(value) => handleInputChange('state', value)}
            />
          </View>

          {/* City */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              City <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City"
              placeholderTextColor="#9CA3AF"
              value={formData.city}
              onChangeText={(value) => handleInputChange('city', value)}
            />
          </View>

          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              I agree to the terms and conditions and confirm{'\n'}
              the address provided here is as per my{'\n'}
              government issued identity card
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={styles.backBottomButton}
          onPress={handleBack}
        >
          <Text style={styles.backBottomButtonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSaveAndContinue}
        >
          <Text style={styles.saveButtonText}>Save &{'\n'}Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E40AF',
    borderBottomWidth: 1,
    borderBottomColor: '#1E40AF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  
  // Content
  scrollView: {
    flex: 1,
  },
  subtitleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Search Container
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1F2937',
  },
  searchButton: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Map Container
  mapContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapPin: {
    position: 'absolute',
    top: 40,
    left: '50%',
    marginLeft: -15,
  },
  mapPinIcon: {
    fontSize: 30,
    color: '#EF4444',
  },
  mapText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 20,
  },
  
  // Form Container
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  required: {
    color: '#EF4444',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
  },
  
  // Terms Container
  termsContainer: {
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
    textAlign: 'center',
  },
  
  // Bottom Buttons
  bottomButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  backBottomButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF5722',
  },
  saveButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default PropertyLocationDetails;