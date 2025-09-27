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
import EditProfileScreen from '../screens/user/EditProfileScreen';
import MyBookingsScreen from '../screens/user/MyBookingsScreen';
import PaymentMethodsScreen from '../screens/user/PaymentMethodsScreen';
import PrivacyPolicyScreen from '../screens/user/PrivacyPolicyScreen';
import TermsOfServiceScreen from '../screens/user/TermsOfServiceScreen';
import LikesScreen from '../screens/user/LikesScreen';
import HostelDetailScreen from '../screens/user/HostelDetailScreen';
import SearchScreen from '../screens/user/SearchScreen';
import SearchResultsScreen from '../screens/user/SearchResultsScreen';
import LocationSelectionScreen from '../screens/user/LocationSelectionScreen';
import DateSelectionScreen from '../screens/user/DateSelectionScreen';
import GuestSelectionScreen from '../screens/user/GuestSelectionScreen';
import BookingScreen from '../screens/user/BookingScreen';
import SignupScreen from '../screens/auth/SignupScreen' ;



const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="PhoneSignup"
  >
    <Stack.Screen name="PhoneSignup" component={PhoneSignup} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
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
    <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    <Stack.Screen name="MyBookingsScreen" component={MyBookingsScreen} />
    <Stack.Screen name="PaymentMethodsScreen" component={PaymentMethodsScreen} />
    <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
    <Stack.Screen name="TermsOfServiceScreen" component={TermsOfServiceScreen} />
    <Stack.Screen name="LikesScreen" component={LikesScreen} />
    <Stack.Screen name="HostelDetailScreen" component={HostelDetailScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
    <Stack.Screen name="LocationSelectionScreen" component={LocationSelectionScreen} />
    <Stack.Screen name="DateSelectionScreen" component={DateSelectionScreen} />
    <Stack.Screen name="GuestSelectionScreen" component={GuestSelectionScreen} />
    <Stack.Screen name="BookingScreen" component={BookingScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
  </Stack.Navigator>
);



const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="UserApp" component={UserStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
