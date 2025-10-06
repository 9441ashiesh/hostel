import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import CustomBottomTabBar from '../components/navigation/CustomBottomTabBar';

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
import SignupScreen from '../screens/auth/SignupScreen';

// New Profile Screens
import PasswordSecurityScreen from '../screens/user/PasswordSecurityScreen';
import PrivacyProfileScreen from '../screens/user/PrivacyProfileScreen';
import CountrySelectionScreen from '../screens/user/CountrySelectionScreen';
import CurrencySelectionScreen from '../screens/user/CurrencySelectionScreen';
import LanguageSelectionScreen from '../screens/user/LanguageSelectionScreen';
import NotificationSettingsScreen from '../screens/user/NotificationSettingsScreen';
import FAQScreen from '../screens/user/FAQScreen';
import CustomerServiceScreen from '../screens/user/CustomerServiceScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

// Stack navigators for each tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="UserDashboard" component={UserDashboard} />
    <Stack.Screen name="HostelDetailScreen" component={HostelDetailScreen} />
    <Stack.Screen name="LocationSelectionScreen" component={LocationSelectionScreen} />
    <Stack.Screen name="DateSelectionScreen" component={DateSelectionScreen} />
    <Stack.Screen name="GuestSelectionScreen" component={GuestSelectionScreen} />
    <Stack.Screen name="BookingScreen" component={BookingScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
  </Stack.Navigator>
);

const LikesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LikesScreen" component={LikesScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    <Stack.Screen name="MyBookingsScreen" component={MyBookingsScreen} />
    <Stack.Screen name="PaymentMethodsScreen" component={PaymentMethodsScreen} />
    <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
    <Stack.Screen name="TermsOfServiceScreen" component={TermsOfServiceScreen} />
    <Stack.Screen name="PasswordSecurityScreen" component={PasswordSecurityScreen} />
    <Stack.Screen name="PrivacyProfileScreen" component={PrivacyProfileScreen} />
    <Stack.Screen name="CountrySelectionScreen" component={CountrySelectionScreen} />
    <Stack.Screen name="CurrencySelectionScreen" component={CurrencySelectionScreen} />
    <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} />
    <Stack.Screen name="NotificationSettingsScreen" component={NotificationSettingsScreen} />
    <Stack.Screen name="FAQScreen" component={FAQScreen} />
    <Stack.Screen name="CustomerServiceScreen" component={CustomerServiceScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <CustomBottomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Search" component={SearchStack} />
    <Tab.Screen name="Likes" component={LikesStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

const UserStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MainTabs" component={MainTabNavigator} />
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
