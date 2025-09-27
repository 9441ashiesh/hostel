import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StatusBar,
  ActivityIndicator,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserLayout from '../../components/layout/UserLayout';

const SearchScreen = ({ navigation }) => {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState({});

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSearch = () => {
    Keyboard.dismiss();
    // Add your search logic here
  };

  return (
    <UserLayout navigation={navigation} activeTab="search">
      <SafeAreaView 
        style={styles.safeArea}
        edges={['top', 'right', 'left']}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView 
            style={styles.scrollContainer} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.container}>
              {/* Header */}
              <View style={styles.header}>
                <View>
                  <Text style={styles.greeting}>Hey Hasna👋</Text>
                  <Text style={styles.welcomeText}>Let's start your journey!</Text>
                </View>
                <TouchableOpacity 
                  style={styles.notificationButton}
                  accessibilityLabel="Notifications"
                  accessibilityHint="Check your notifications"
                >
                  <Text style={styles.bellIcon}>🔔</Text>
                </TouchableOpacity>
              </View>

              {/* Search Form */}
              <View style={styles.searchCard}>
                {/* Location Input */}
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Location</Text>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputIcon}>📍</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your destination"
                      placeholderTextColor="#A0AEC0"
                      returnKeyType="next"
                      accessibilityLabel="Location input"
                      accessibilityHint="Enter your destination location"
                      autoCorrect={false}
                      clearButtonMode="while-editing"
                    />
                  </View>
                </View>

                {/* Date and Guest Row */}
                <View style={styles.row}>
                  {/* Date Input */}
                  <View style={[styles.inputContainer, styles.halfWidth]}>
                    <Text style={styles.inputLabel}>Date</Text>
                    <TouchableOpacity 
                      style={styles.inputWrapper}
                      activeOpacity={0.7}
                      accessibilityLabel="Date selector"
                      accessibilityHint="Select your check-in date"
                    >
                      <Text style={styles.inputIcon}>📅</Text>
                      <Text style={styles.inputText}>Select Date</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Guest Input */}
                  <View style={[styles.inputContainer, styles.halfWidth]}>
                    <Text style={styles.inputLabel}>Guest</Text>
                    <TouchableOpacity 
                      style={styles.inputWrapper}
                      activeOpacity={0.7}
                      accessibilityLabel="Guest selector"
                      accessibilityHint="Select number of guests"
                    >
                      <Text style={styles.inputIcon}>👤</Text>
                      <Text style={styles.inputText}>Add guest</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Search Button */}
                <TouchableOpacity 
                  style={styles.searchButton}
                  activeOpacity={0.7}
                  accessibilityLabel="Search button"
                  accessibilityHint="Search for hotels with the entered criteria"
                  onPress={handleSearch}
                >
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>

              {/* Popular Hotels */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Popular Hotel</Text>
                  <TouchableOpacity 
                    accessibilityLabel="See all hotels"
                    accessibilityHint="View all popular hotels"
                  >
                    <Text style={styles.seeAll}>See all</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.hotelListContent}
                >
                  {/* Hotel Card 1 */}
                  <View style={styles.hotelCard}>
                    <View style={styles.hotelImageContainer}>
                      <Image
                        source={{ uri: 'https://picsum.photos/300/200' }}
                        style={styles.hotelImage}
                        onLoadStart={() => setImageLoading(prev => ({ ...prev, 1: true }))}
                        onLoadEnd={() => setImageLoading(prev => ({ ...prev, 1: false }))}
                      />
                      {imageLoading[1] && (
                        <ActivityIndicator 
                          style={styles.imageLoader} 
                          color="#06B6D4" 
                        />
                      )}
                    </View>
                    <TouchableOpacity 
                      style={styles.heartButton}
                      activeOpacity={0.7}
                      accessibilityLabel="Add to favorites"
                    >
                      <Text style={styles.heartIcon}>🤍</Text>
                    </TouchableOpacity>
                    <View style={styles.hotelInfo}>
                      <Text 
                        style={styles.hotelName}
                        numberOfLines={1}
                      >
                        The Dreamland by Young Villas
                      </Text>
                      <View style={styles.hotelLocationRow}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text 
                          style={styles.locationText}
                          numberOfLines={1}
                        >
                          Kuta, Denpasar, Bali
                        </Text>
                      </View>
                      <View style={styles.hotelBottomRow}>
                        <View style={styles.priceContainer}>
                          <Text style={styles.priceAmount}>$34</Text>
                          <Text style={styles.priceUnit}>/night</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Text style={styles.ratingIcon}>⭐</Text>
                          <Text style={styles.ratingText}>4.8</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* Hotel Card 2 */}
                  <View style={styles.hotelCard}>
                    <View style={styles.hotelImageContainer}>
                      <Image
                        source={{ uri: 'https://picsum.photos/300/201' }}
                        style={styles.hotelImage}
                        onLoadStart={() => setImageLoading(prev => ({ ...prev, 2: true }))}
                        onLoadEnd={() => setImageLoading(prev => ({ ...prev, 2: false }))}
                      />
                      {imageLoading[2] && (
                        <ActivityIndicator 
                          style={styles.imageLoader} 
                          color="#06B6D4" 
                        />
                      )}
                    </View>
                    <TouchableOpacity 
                      style={styles.heartButton}
                      activeOpacity={0.7}
                      accessibilityLabel="Add to favorites"
                    >
                      <Text style={styles.heartIcon}>🤍</Text>
                    </TouchableOpacity>
                    <View style={styles.hotelInfo}>
                      <Text 
                        style={styles.hotelName}
                        numberOfLines={1}
                      >
                        Paradise Hotel
                      </Text>
                      <View style={styles.hotelLocationRow}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text 
                          style={styles.locationText}
                          numberOfLines={1}
                        >
                          Kuta, Denpasar, Bali
                        </Text>
                      </View>
                      <View style={styles.hotelBottomRow}>
                        <View style={styles.priceContainer}>
                          <Text style={styles.priceAmount}>$37</Text>
                          <Text style={styles.priceUnit}>/night</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Text style={styles.ratingIcon}>⭐</Text>
                          <Text style={styles.ratingText}>4.8</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1E293B',
  },
  notificationButton: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  bellIcon: {
    fontSize: 20,
  },
  searchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    margin: 24,
    marginTop: 0,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  inputRow: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E293B',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: Platform.OS === 'ios' ? 16 : 12,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    paddingVertical: 0,
  },
  inputIcon: {
    marginRight: 12,
    fontSize: 18,
    color: '#A0AEC0',
  },
  inputText: {
    fontSize: 16,
    color: '#A0AEC0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfWidth: {
    width: '48%',
  },
  searchButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
  },
  seeAll: {
    color: '#06B6D4',
    fontSize: 14,
    fontWeight: '500',
  },
  hotelListContent: {
    paddingRight: 24,
  },
  hotelCard: {
    width: 220,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  hotelImageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  hotelImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageLoader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heartIcon: {
    fontSize: 16,
  },
  hotelInfo: {
    padding: 12,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  hotelLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 14,
    color: '#A0AEC0',
  },
  locationText: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
  hotelBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#06B6D4',
  },
  priceUnit: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 14,
    color: '#FBBF24',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
});

export default SearchScreen;