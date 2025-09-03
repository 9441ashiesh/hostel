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

// Merchant Screens
import MerchantDashboard from '../screens/merchant/MerchantDashboard';

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
  </Stack.Navigator>
);

const MerchantStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MerchantDashboard" component={MerchantDashboard} />
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
