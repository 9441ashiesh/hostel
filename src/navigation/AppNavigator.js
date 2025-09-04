import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';

// Auth Screens
import UserTypeSelection from '../screens/auth/UserTypeSelection';
import PhoneSignup from '../screens/auth/PhoneSignup';
import OTPVerification from '../screens/auth/OTPVerification';

// User Screens
import UserDashboard from '../screens/user/UserDashboard';
import ProfileScreen from '../screens/user/ProfileScreen';
import LikesScreen from '../screens/user/LikesScreen';
import HostelDetailScreen from '../screens/user/HostelDetailScreen';

// Merchant Screens
import MerchantDashboard from '../screens/merchant/MerchantDashboard';
import PropertyInfo from '../screens/merchant/PropertyInfo';
import PropertyLocationDetails from '../screens/merchant/PropertyLocationDetails';
import PropertyAmenities from '../screens/merchant/PropertyAmenities';
import Rooms from '../screens/merchant/Rooms';
import PhotosVideos from '../screens/merchant/PhotosVideos';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="PhoneSignup"
  >
    <Stack.Screen name="PhoneSignup" component={PhoneSignup} />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="UserDashboard" component={UserDashboard} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="LikesScreen" component={LikesScreen} />
    <Stack.Screen name="HostelDetailScreen" component={HostelDetailScreen} />
  </Stack.Navigator>
);

const MerchantStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MerchantDashboard" component={MerchantDashboard} />
    <Stack.Screen name="PropertyInfo" component={PropertyInfo} />
    <Stack.Screen name="PropertyLocationDetails" component={PropertyLocationDetails} />
    <Stack.Screen name="PropertyAmenities" component={PropertyAmenities} />
    <Stack.Screen name="Rooms" component={Rooms} />
    <Stack.Screen name="PhotosVideos" component={PhotosVideos} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated, userType } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : userType === 'merchant' ? (
          <Stack.Screen name="MerchantApp" component={MerchantStack} />
        ) : (
          <Stack.Screen name="UserApp" component={UserStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
