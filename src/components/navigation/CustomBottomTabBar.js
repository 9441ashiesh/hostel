import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  const getIconName = (routeName, focused) => {
    let iconName;
    
    switch (routeName) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Search':
        iconName = 'search';
        break;
      case 'Likes':
        iconName = 'heart';
        break;
      case 'Profile':
        iconName = 'person-circle';
        break;
      default:
        iconName = 'home';
    }
    
    return iconName;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[
                styles.tabButton,
                index === 0 && styles.firstTab,
                index === state.routes.length - 1 && styles.lastTab,
                isFocused && styles.activeTabButton,
              ]}
              activeOpacity={0.6}
            >
              <View style={styles.iconContainer}>
                <Ionicons
                  name={getIconName(route.name, isFocused)}
                  size={24}
                  color={isFocused ? '#ffffff' : '#9ca3af'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 50,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#374151',
    borderRadius: 32,
    marginHorizontal: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: '#4b5563',
    maxWidth: 360,
    height: 72,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 24,
  },
  firstTab: {
    marginLeft: 4,
  },
  lastTab: {
    marginRight: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  activeTabButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default CustomBottomTabBar;
