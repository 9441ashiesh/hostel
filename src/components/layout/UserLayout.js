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
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavItem: {
    backgroundColor: '#22c55e',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    color: '#ffffff',
  },
  activeNavIcon: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default UserLayout;
