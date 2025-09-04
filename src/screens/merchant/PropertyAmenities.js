import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const PropertyAmenities = ({ navigation }) => {
  const [amenities, setAmenities] = useState({
    airConditioning: false,
    laundry: false,
    newspaper: false,
    parking: false,
    roomService: false,
    sittingArea: false,
    smokingRooms: false,
    swimmingPool: false,
    wifi: false,
    lounge: false,
    reception: false,
    bar: false,
    restaurant: false,
    luggageAssistance: false,
    wheelChair: false,
    gym: false,
    cctv: false,
    fireExtinguishers: false,
    airportTransfer: false,
    firstAidServices: false,
  });

  const amenityList = [
    { key: 'airConditioning', label: 'Air Conditioning' },
    { key: 'laundry', label: 'Laundry' },
    { key: 'newspaper', label: 'Newspaper' },
    { key: 'parking', label: 'Parking' },
    { key: 'roomService', label: 'Room Service' },
    { key: 'sittingArea', label: 'Sitting Area' },
    { key: 'smokingRooms', label: 'Smoking rooms' },
    { key: 'swimmingPool', label: 'Swimming pool' },
    { key: 'wifi', label: 'WiFi' },
    { key: 'lounge', label: 'Lounge' },
    { key: 'reception', label: 'Reception' },
    { key: 'bar', label: 'Bar' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'luggageAssistance', label: 'Luggage Assistance' },
    { key: 'wheelChair', label: 'Wheel Chair' },
    { key: 'gym', label: 'Gym' },
    { key: 'cctv', label: 'CCTV' },
    { key: 'fireExtinguishers', label: 'Fire Extinguishers' },
    { key: 'airportTransfer', label: 'Airport transfer' },
    { key: 'firstAidServices', label: 'First Aid Services' },
  ];

  const toggleAmenity = (key) => {
    setAmenities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    // Handle continue logic - save amenities and navigate to next screen
    console.log('Selected amenities:', amenities);
    // You can navigate to the next step here
  };

  const getMandatoryCount = () => {
    return Object.values(amenities).filter(value => value === true).length;
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
        <Text style={styles.headerTitle}>Property Amenities</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Tell us the amenities available in your property</Text>
      </View>

      {/* Mandatory Count */}
      <View style={styles.mandatoryContainer}>
        <TouchableOpacity style={styles.mandatoryButton}>
          <Text style={styles.mandatoryText}>Mandatory ({getMandatoryCount()})</Text>
          <Text style={styles.mandatoryIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Amenities List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.amenitiesContainer}>
          {amenityList.map((amenity, index) => (
            <View key={amenity.key} style={styles.amenityRow}>
              <Text style={styles.amenityLabel}>{amenity.label}</Text>
              
              <View style={styles.toggleContainer}>
                <TouchableOpacity 
                  style={[
                    styles.toggleButton,
                    !amenities[amenity.key] && styles.toggleButtonActive
                  ]}
                  onPress={() => toggleAmenity(amenity.key)}
                >
                  <Text style={[
                    styles.toggleText,
                    !amenities[amenity.key] && styles.toggleTextActive
                  ]}>No</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[
                    styles.toggleButton,
                    amenities[amenity.key] && styles.toggleButtonActive
                  ]}
                  onPress={() => toggleAmenity(amenity.key)}
                >
                  <Text style={[
                    styles.toggleText,
                    amenities[amenity.key] && styles.toggleTextActive
                  ]}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        
        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
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
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
  
  // Subtitle
  subtitleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Mandatory Container
  mandatoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  mandatoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  mandatoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  mandatoryIcon: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  // Content
  scrollView: {
    flex: 1,
  },
  amenitiesContainer: {
    paddingHorizontal: 20,
  },
  amenityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  amenityLabel: {
    fontSize: 14,
    color: '#1F2937',
    flex: 1,
    fontWeight: '400',
  },
  
  // Toggle Container
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 45,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#FF5722',
  },
  toggleText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  toggleTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  // Bottom Space
  bottomSpace: {
    height: 100,
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
  continueButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default PropertyAmenities;
