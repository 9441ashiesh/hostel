import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const MerchantLayout = ({ children, navigation, currentRoute = 'Home' }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const navigateToScreen = (screenName) => {
    if (screenName === 'Dashboard') {
      navigation.navigate('MerchantDashboard');
    } else if (screenName === 'PropertyInfo') {
      navigation.navigate('PropertyInfo');
    } else if (screenName === 'Analytics') {
      navigation.navigate('MerchantAnalytics');
    } else if (screenName === 'Profile') {
      navigation.navigate('MerchantProfile');
    } else if (screenName === 'Logout') {
      handleLogout();
    }
    // Add more navigation cases as needed
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigateToScreen('Dashboard')}
          activeOpacity={0.7}
        >
          <View style={[
            styles.navIconContainer,
            currentRoute === 'Dashboard' && styles.activeNavContainer
          ]}>
            <Text style={[
              styles.navIcon,
              currentRoute === 'Dashboard' && styles.activeNavIcon
            ]}>🏠</Text>
          </View>
          <Text style={[
            styles.navLabel,
            currentRoute === 'Dashboard' && styles.activeNavLabel
          ]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigateToScreen('Analytics')}
          activeOpacity={0.7}
        >
          <View style={[
            styles.navIconContainer,
            currentRoute === 'Analytics' && styles.activeNavContainer
          ]}>
            <Text style={[
              styles.navIcon,
              currentRoute === 'Analytics' && styles.activeNavIcon
            ]}>📊</Text>
          </View>
          <Text style={[
            styles.navLabel,
            currentRoute === 'Analytics' && styles.activeNavLabel
          ]}>Analytics</Text>
        </TouchableOpacity>
        
        {/* Center Highlighted Button */}
        {/* <TouchableOpacity 
          style={styles.centerNavItem}
          onPress={() => navigateToScreen('PropertyInfo')}
          activeOpacity={0.8}
        >
          <View style={styles.centerNavButton}>
            <Text style={styles.centerNavIcon}>+</Text>
          </View>
        </TouchableOpacity> */}
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigateToScreen('Revenue')}
          activeOpacity={0.7}
        >
          <View style={[
            styles.navIconContainer,
            currentRoute === 'Revenue' && styles.activeNavContainer
          ]}>
            <Text style={[
              styles.navIcon,
              currentRoute === 'Revenue' && styles.activeNavIcon
            ]}>💰</Text>
          </View>
          <Text style={[
            styles.navLabel,
            currentRoute === 'Revenue' && styles.activeNavLabel
          ]}>Revenue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigateToScreen('Profile')}
          activeOpacity={0.7}
        >
          <View style={[
            styles.navIconContainer,
            currentRoute === 'Profile' && styles.activeNavContainer
          ]}>
            <Text style={[
              styles.navIcon,
              currentRoute === 'Profile' && styles.activeNavIcon
            ]}>👤</Text>
          </View>
          <Text style={[
            styles.navLabel,
            currentRoute === 'Profile' && styles.activeNavLabel
          ]}>Profile</Text>
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
  content: {
    flex: 1,
  },
  
  // Bottom Navigation
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  centerNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navIconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginBottom: 4,
  },
  activeNavContainer: {
    backgroundColor: '#EEF2FF',
  },
  centerNavButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    marginBottom: -8,
  },
  navIcon: {
    fontSize: 22,
    color: '#94A3B8',
  },
  activeNavIcon: {
    fontSize: 22,
    color: '#6366F1',
  },
  centerNavIcon: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
  activeNavLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6366F1',
    marginTop: 2,
  },
});

export default MerchantLayout;
