import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  TextInput,
  Dimensions,
  StatusBar,
  Animated,
  Vibration,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import MerchantLayout from '../../components/layout/MerchantLayout';

const { width } = Dimensions.get('window');

const MerchantProfile = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  
  // Animation values
  const scaleValue = useRef(new Animated.Value(1)).current;
  const fadeValue = useRef(new Animated.Value(1)).current;
  const slideValue = useRef(new Animated.Value(0)).current;
  
  const [formData, setFormData] = useState({
    name: 'John Merchant',
    email: 'john@merchant.com',
    phone: user?.phone || '+91 9876543210',
    businessName: 'Luxury Hotels Group',
    businessType: 'Hotel Chain',
    address: '123 Business Street, Mumbai',
    panNumber: 'ABCDE1234F',
    gstNumber: '29ABCDE1234F1Z5',
    totalProperties: 12,
    totalBookings: 1247,
    rating: 4.8,
    memberSince: '2023',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Add subtle haptic feedback
    Vibration.vibrate(10);
  };

  const handleSave = () => {
    // Animation for save button
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    setEditMode(false);
    Vibration.vibrate(50);
    Alert.alert('✅ Success', 'Profile updated successfully!', [
      { text: 'Great!', style: 'default' }
    ]);
  };

  const handleLogout = () => {
    Vibration.vibrate(30);
    Alert.alert(
      '👋 Sign Out',
      'Are you sure you want to sign out of your account?',
      [
        { 
          text: 'Cancel', 
          style: 'cancel',
          onPress: () => Vibration.vibrate(10)
        },
        { 
          text: 'Sign Out', 
          style: 'destructive', 
          onPress: () => {
            Vibration.vibrate(100);
            logout();
          }
        }
      ]
    );
  };

  const handleCardPress = (optionId, action) => {
    setActiveCard(optionId);
    
    // Animation for card press
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveCard(null);
      Vibration.vibrate(20);
      action();
    });
  };

  const handleEditToggle = () => {
    const newEditMode = !editMode;
    setEditMode(newEditMode);
    
    // Fade animation for mode change
    Animated.timing(fadeValue, {
      toValue: 0.7,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
    
    // Slide animation for content change
    Animated.timing(slideValue, {
      toValue: newEditMode ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    Vibration.vibrate(newEditMode ? [10, 20] : 30);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    Vibration.vibrate(20);
    
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('🔄 Refreshed', 'Profile data updated!');
    }, 1500);
  };

  const profileOptions = [
    { 
      id: 1, 
      title: 'My Properties', 
      subtitle: `${formData.totalProperties} active listings`,
      icon: '🏨', 
      color: '#6366F1',
      action: () => navigation.navigate('MerchantDashboard') 
    },
    { 
      id: 2, 
      title: 'Bookings Overview', 
      subtitle: `${formData.totalBookings} total bookings`,
      icon: '�', 
      color: '#10B981',
      action: () => {} 
    },
    { 
      id: 3, 
      title: 'Payment & Earnings', 
      subtitle: 'Manage finances',
      icon: '�', 
      color: '#F59E0B',
      action: () => {} 
    },
    { 
      id: 4, 
      title: 'Account Settings', 
      subtitle: 'Privacy & security',
      icon: '⚙️', 
      color: '#8B5CF6',
      action: () => {} 
    },
    { 
      id: 5, 
      title: 'Help Center', 
      subtitle: 'Support & guides',
      icon: '🆘', 
      color: '#06B6D4',
      action: () => {} 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      {/* Modern Header */}
      <Animated.View style={[
        styles.header,
        { transform: [{ scale: scaleValue }] }
      ]}>
        <TouchableOpacity 
          onPress={() => {
            Vibration.vibrate(10);
            navigation.goBack();
          }} 
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        
        <TouchableOpacity 
          onPress={handleEditToggle}
          style={[styles.editButton, editMode && styles.editButtonActive]}
          activeOpacity={0.8}
        >
          <Text style={styles.editIcon}>{editMode ? '✓' : '✏️'}</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.ScrollView 
        style={[styles.content, { opacity: fadeValue }]} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      >
        {/* Hero Profile Section */}
        <Animated.View style={[
          styles.heroSection,
          {
            transform: [{
              translateY: slideValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -3]
              })
            }],
            opacity: fadeValue,
          }
        ]}>
          <Animated.View style={[
            styles.profileImageContainer,
            {
              transform: [{ scale: scaleValue }]
            }
          ]}>
            <View style={styles.profileImage}>
              <Text style={styles.profileImageText}>
                {formData.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={styles.statusDot} />
          </Animated.View>
          
          <Text style={styles.profileName}>{formData.name}</Text>
          <Text style={styles.profileBusiness}>{formData.businessName}</Text>
          <Text style={styles.profileType}>{formData.businessType}</Text>
          
          {/* Business Stats */}
          <Animated.View style={[
            styles.statsContainer,
            {
              transform: [{
                translateY: slideValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 5]
                })
              }]
            }
          ]}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{formData.totalProperties}</Text>
              <Text style={styles.statLabel}>Properties</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{formData.rating}★</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{formData.memberSince}</Text>
              <Text style={styles.statLabel}>Since</Text>
            </View>
          </Animated.View>
        </Animated.View>

        {/* Information Cards */}
        {editMode ? (
          <View style={styles.editContainer}>
            {/* Personal Info Card */}
            <View style={styles.infoCard}>
              <Text style={styles.cardTitle}>Personal Details</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  value={formData.name}
                  onChangeText={(value) => handleInputChange('name', value)}
                  placeholder="Enter your name"
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  placeholder="Enter email address"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone</Text>
                <TextInput
                  style={styles.input}
                  value={formData.phone}
                  onChangeText={(value) => handleInputChange('phone', value)}
                  placeholder="Enter phone number"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Business Info Card */}
            <View style={styles.infoCard}>
              <Text style={styles.cardTitle}>Business Details</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Business Name</Text>
                <TextInput
                  style={styles.input}
                  value={formData.businessName}
                  onChangeText={(value) => handleInputChange('businessName', value)}
                  placeholder="Enter business name"
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Business Type</Text>
                <TextInput
                  style={styles.input}
                  value={formData.businessType}
                  onChangeText={(value) => handleInputChange('businessType', value)}
                  placeholder="e.g., Hotel, Resort"
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Address</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={formData.address}
                  onChangeText={(value) => handleInputChange('address', value)}
                  placeholder="Enter complete address"
                  placeholderTextColor="#9CA3AF"
                  multiline
                  numberOfLines={3}
                />
              </View>
            </View>

            {/* Legal Info Card */}
            <View style={styles.infoCard}>
              <Text style={styles.cardTitle}>Legal Information</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>PAN Number</Text>
                <TextInput
                  style={styles.input}
                  value={formData.panNumber}
                  onChangeText={(value) => handleInputChange('panNumber', value)}
                  placeholder="Enter PAN number"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="characters"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>GST Number</Text>
                <TextInput
                  style={styles.input}
                  value={formData.gstNumber}
                  onChangeText={(value) => handleInputChange('gstNumber', value)}
                  placeholder="Enter GST number"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="characters"
                />
              </View>
            </View>

            {/* Save Button */}
            <Animated.View style={{ 
              transform: [{ scale: scaleValue }],
              opacity: fadeValue 
            }}>
              <TouchableOpacity 
                style={styles.saveButton} 
                onPress={handleSave}
                activeOpacity={0.8}
              >
                <Text style={styles.saveButtonText}>💾 Save Changes</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        ) : (
          <>
            {/* Quick Actions Grid */}
            <View style={styles.actionsSection}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <View style={styles.actionsGrid}>
                {profileOptions.map((option) => (
                  <Animated.View
                    key={option.id}
                    style={{
                      transform: [{ 
                        scale: activeCard === option.id ? 0.98 : 1,
                      }],
                      opacity: fadeValue,
                    }}
                  >
                    <TouchableOpacity
                      style={[styles.actionCard, { borderLeftColor: option.color }]}
                      onPress={() => handleCardPress(option.id, option.action)}
                      activeOpacity={0.9}
                    >
                      <Animated.View 
                        style={[
                          styles.actionIcon, 
                          { 
                            backgroundColor: option.color,
                            transform: [{ scale: activeCard === option.id ? 1.1 : 1 }]
                          }
                        ]}
                      >
                        <Text style={styles.actionEmoji}>{option.icon}</Text>
                      </Animated.View>
                      <View style={styles.actionContent}>
                        <Text style={styles.actionTitle}>{option.title}</Text>
                        <Text style={styles.actionSubtitle}>{option.subtitle}</Text>
                      </View>
                      <Animated.Text 
                        style={[
                          styles.actionArrow,
                          {
                            transform: [{ 
                              translateX: activeCard === option.id ? 5 : 0 
                            }]
                          }
                        ]}
                      >
                        ›
                      </Animated.Text>
                    </TouchableOpacity>
                  </Animated.View>
                ))}
              </View>
            </View>

            {/* Account Actions */}
            <View style={styles.accountSection}>
              <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                <TouchableOpacity 
                  style={styles.logoutButton} 
                  onPress={handleLogout}
                  activeOpacity={0.8}
                >
                  <Text style={styles.logoutIcon}>👋</Text>
                  <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </>
        )}

        <View style={styles.bottomPadding} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  editButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonActive: {
    backgroundColor: '#10B981',
  },
  editIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  // Content Styles
  content: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  
  // Hero Section
  heroSection: {
    backgroundColor: '#FFFFFF',
    marginTop: -10,
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  profileImageText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  statusDot: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10B981',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 4,
  },
  profileBusiness: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6366F1',
    textAlign: 'center',
    marginBottom: 2,
  },
  profileType: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  
  // Stats Container
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 16,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  // Edit Container
  editContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#FFFFFF',
    fontWeight: '500',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  
  // Save Button
  saveButton: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    transform: [{ scale: 1 }], // Base transform for animations
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  
  // Actions Section
  actionsSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  actionsGrid: {
    gap: 12,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    transform: [{ scale: 1 }], // Base transform for animations
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionEmoji: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  actionArrow: {
    fontSize: 24,
    color: '#D1D5DB',
    fontWeight: '300',
  },
  
  // Account Section
  accountSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    transform: [{ scale: 1 }], // Base transform for animations
  },
  logoutIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  
  // Bottom Padding
  bottomPadding: {
    height: 40,
  },
});

export default MerchantProfile;