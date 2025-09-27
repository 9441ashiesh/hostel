import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const UserLayout = ({ children, navigation, activeTab = 'home' }) => {
  const navigateToHome = () => {
    navigation.navigate('UserDashboard');
  };

  const navigateToProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const navigateToLikes = () => {
    navigation.navigate('LikesScreen');
  };

  const navigateToBookings = () => {
    // Navigate to bookings screen (to be created)
    console.log('Navigate to bookings');
  };

  const navigateToSearch = () => {
    // Navigate to search screen (to be created)
    navigation.navigate('SearchScreen');
  };

  const navigateToHelp = () => {
    // Navigate to help screen (to be created)
    console.log('Navigate to help');
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          {activeTab === 'home' ? (
            <View style={styles.activeNavItem}>
              <View style={styles.navIconContainer}>
                <Text style={styles.activeNavIcon}>🏠</Text>
              </View>
            </View>
          ) : (
            <View style={styles.navIconContainer}>
              <Text style={styles.navIcon}>🏠</Text>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToSearch}>
          {activeTab === 'search' ? (
            <View style={styles.activeNavItem}>
              <View style={styles.navIconContainer}>
                <Text style={styles.activeNavIcon}>🔍</Text>
              </View>
            </View>
          ) : (
            <View style={styles.navIconContainer}>
              <Text style={styles.navIcon}>🔍</Text>
            </View>
          )}
        </TouchableOpacity>
      
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToLikes}>
          {activeTab === 'likes' ? (
            <View style={styles.activeNavItem}>
              <View style={styles.navIconContainer}>
                <Text style={styles.activeNavIcon}>❤️</Text>
              </View>
            </View>
          ) : (
            <View style={styles.navIconContainer}>
              <Text style={styles.navIcon}>🤍</Text>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
          {activeTab === 'profile' ? (
            <View style={styles.activeNavItem}>
              <View style={styles.navIconContainer}>
                <Text style={styles.activeNavIcon}>👤</Text>
              </View>
            </View>
          ) : (
            <View style={styles.navIconContainer}>
              <Text style={styles.navIcon}>👤</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    paddingBottom: 80, // Add padding to prevent content from being hidden behind nav bar
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavItem: {
    backgroundColor: '#22c55e',
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: '#6B7280',
  },
  activeNavIcon: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default UserLayout;
