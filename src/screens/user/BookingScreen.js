import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingScreen = ({ navigation, route }) => {
  const { hostel, checkIn, checkOut, guests } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [couponCode, setCouponCode] = useState('');

  // Calculate prices
  const basePrice = parseInt((hostel.price || '430').toString().replace(/\D/g, '')) || 430;
  const totalNights = 1; // Calculate based on dates
  const price = basePrice * totalNights;
  const adminFee = 200.50;
  const totalPrice = price + adminFee;

  const handleConfirmPayment = () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }
    
    Alert.alert(
      'Booking Confirmed!',
      `Your booking at ${hostel.name} has been confirmed. You will receive a confirmation email shortly.`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('UserDashboard')
        }
      ]
    );
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      Alert.alert('Coupon Applied', 'Discount of ₹100 applied successfully!');
    }
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
        <Text style={styles.headerTitle}>Check out</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hotel Info Card */}
        <View style={styles.hotelCard}>
          <View style={styles.hotelImageContainer}>
            <View style={styles.hotelImage}>
              <Text style={styles.hotelImageText}>{hostel.image}</Text>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Text style={styles.bookmarkIcon}>🔖</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>{hostel.name}</Text>
            <Text style={styles.hotelLocation}>📍 {hostel.location}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.ratingText}>{hostel.rating}</Text>
              <Text style={styles.reviewsText}>(520 reviews)</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>₹ {basePrice}</Text>
              <Text style={styles.nightText}>/Night</Text>
            </View>
          </View>
        </View>

        {/* Your Booking Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Booking</Text>
          
          <View style={styles.bookingDetails}>
            <View style={styles.bookingRow}>
              <View style={styles.bookingLeft}>
                <Text style={styles.bookingIcon}>📅</Text>
                <Text style={styles.bookingLabel}>Check in</Text>
              </View>
              <Text style={styles.bookingValue}>01 - Mar 2025</Text>
            </View>

            <View style={styles.bookingRow}>
              <View style={styles.bookingLeft}>
                <Text style={styles.bookingIcon}>📅</Text>
                <Text style={styles.bookingLabel}>Check Out</Text>
              </View>
              <Text style={styles.bookingValue}>02 - Mar 2025</Text>
            </View>

            <View style={styles.bookingRow}>
              <View style={styles.bookingLeft}>
                <Text style={styles.bookingIcon}>👥</Text>
                <Text style={styles.bookingLabel}>Guest</Text>
              </View>
              <Text style={styles.bookingValue}>{guests} Guests (2 Room)</Text>
            </View>

            <View style={styles.bookingRow}>
              <View style={styles.bookingLeft}>
                <Text style={styles.bookingIcon}>🏠</Text>
                <Text style={styles.bookingLabel}>Room type</Text>
              </View>
              <Text style={styles.bookingValue}>Premium Room</Text>
            </View>

            <View style={styles.bookingRow}>
              <View style={styles.bookingLeft}>
                <Text style={styles.bookingIcon}>📱</Text>
                <Text style={styles.bookingLabel}>Phone</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.gstRow}>
              <Text style={styles.gstLabel}>Have a GST number (optional)</Text>
              <TextInput
                style={styles.gstInput}
                placeholder="Enter GST number"
                value={gstNumber}
                onChangeText={setGstNumber}
              />
            </View>
          </View>
        </View>

        {/* Price Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          
          <View style={styles.priceDetails}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceAmount}>₹{price}.00</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Admin fee</Text>
              <Text style={styles.priceAmount}>₹{adminFee}</Text>
            </View>

            <View style={[styles.priceRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total price</Text>
              <Text style={styles.totalAmount}>₹{totalPrice}</Text>
            </View>
          </View>

          {/* Coupon Section */}
          <TouchableOpacity style={styles.couponSection} onPress={applyCoupon}>
            <Text style={styles.couponText}>Have a coupon code?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Confirm Payment Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: '#1f2937',
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
  hotelCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: 24,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hotelImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  hotelImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelImageText: {
    fontSize: 32,
  },
  bookmarkButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bookmarkIcon: {
    fontSize: 16,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  hotelLocation: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1f2937',
    marginRight: 4,
  },
  reviewsText: {
    fontSize: 12,
    color: '#6b7280',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  nightText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  bookingDetails: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bookingIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  bookingLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  bookingValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    flex: 1,
    textAlign: 'right',
  },
  phoneInput: {
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
    color: '#1f2937',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  gstRow: {
    marginTop: 8,
  },
  gstLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  gstInput: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  priceDetails: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  priceAmount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16,
    marginBottom: 0,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  couponSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  couponText: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '500',
  },
  bottomSpace: {
    height: 100,
  },
  footer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  confirmButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default BookingScreen;
