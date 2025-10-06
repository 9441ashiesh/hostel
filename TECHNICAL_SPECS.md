# 🏗️ Hostel Booking App - Technical Architecture Documentation

## Project Overview

**Project Name**: Hostel Booking Application  
**Platform**: React Native (iOS & Android)  
**Architecture**: Component-Based, Context API for State Management  
**Navigation**: React Navigation v6  
**Type**: Mobile-First Hospitality Booking Platform

---

## 📂 Project Structure

```
hostel/
├── App.js                          # Root application component
├── index.js                        # Entry point
├── app.json                        # Expo/React Native configuration
├── package.json                    # Dependencies and scripts
├── babel.config.js                 # Babel configuration
├── README.md                       # Project readme
├── DESIGN_SYSTEM.md               # Design system documentation
├── TECHNICAL_SPECS.md             # This file
│
├── assets/                         # Static assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
└── src/
    ├── components/                 # Reusable components
    │   ├── layout/
    │   │   └── UserLayout.js      # Main layout wrapper with bottom nav
    │   ├── navigation/
    │   │   └── CustomBottomTabBar.js  # Custom bottom tab navigation
    │   └── ui/
    │       └── CustomButton.js    # Reusable button component
    │
    ├── constants/                  # App-wide constants
    │   └── colors.js              # Centralized color definitions
    │
    ├── context/                    # React Context providers
    │   ├── AuthContext.js         # Authentication state management
    │   └── FavoritesContext.js    # Favorites/likes state management
    │
    ├── navigation/                 # Navigation configuration
    │   └── AppNavigator.js        # Main navigation structure
    │
    ├── screens/                    # All screen components
    │   ├── auth/                  # Authentication screens
    │   │   ├── AdminLogin.js
    │   │   ├── OTPVerification.js
    │   │   ├── PhoneSignup.js
    │   │   ├── SignupScreen.js
    │   │   └── UserTypeSelection.js
    │   │
    │   └── user/                  # User-facing screens
    │       ├── BookingScreen.js
    │       ├── DateSelectionScreen.js
    │       ├── GuestSelectionScreen.js
    │       ├── HostelDetailScreen.js
    │       ├── LikesScreen.js
    │       ├── LocationSelectionScreen.js
    │       ├── MyBookingsScreen.js
    │       ├── PaymentMethodsScreen.js
    │       ├── PrivacyPolicyScreen.js
    │       ├── SearchResultsScreen.js
    │       ├── SearchScreen.js
    │       ├── TermsOfServiceScreen.js
    │       ├── UserDashboard.js
    │       │
    │       └── profile/           # Profile-related screens
    │           ├── CountrySelectionScreen.js
    │           ├── CurrencySelectionScreen.js
    │           ├── CustomerServiceScreen.js
    │           ├── EditProfileScreen.js
    │           ├── FAQScreen.js
    │           ├── LanguageSelectionScreen.js
    │           ├── NotificationSettingsScreen.js
    │           ├── PasswordSecurityScreen.js
    │           ├── PrivacyProfileScreen.js
    │           └── ProfileScreen.js
    │
    ├── services/                   # Business logic & API services
    │   └── mockData.js            # Mock data for development
    │
    └── utils/                      # Utility functions
        └── favoritesStorage.js    # Favorites persistence utilities
```

---

## 🎯 Core Technologies

### Primary Stack
```json
{
  "framework": "React Native",
  "language": "JavaScript (ES6+)",
  "navigation": "@react-navigation/native v6",
  "stateManagement": "React Context API",
  "ui": "React Native Core Components",
  "icons": "@expo/vector-icons (Ionicons)",
  "safeArea": "react-native-safe-area-context"
}
```

### Key Dependencies
```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-native": "^0.72.x",
    "@react-navigation/native": "^6.x.x",
    "@react-navigation/stack": "^6.x.x",
    "@react-navigation/bottom-tabs": "^6.x.x",
    "react-native-safe-area-context": "^4.x.x",
    "react-native-screens": "^3.x.x",
    "@expo/vector-icons": "^13.x.x"
  }
}
```

---

## 🔐 Authentication Flow

### States
```javascript
{
  isAuthenticated: boolean,      // User login status
  user: object | null            // User data object
}
```

### Auth Screens Flow
```
PhoneSignup → OTPVerification → SignupScreen → UserDashboard
                                      ↓
                              (Skip to Dashboard if existing user)
```

### AuthContext Methods
```javascript
{
  login: (userData) => void,     // Set user and authenticate
  logout: () => void,            // Clear user and de-authenticate
  user: object,                  // Current user data
  isAuthenticated: boolean       // Auth status
}
```

---

## 🧭 Navigation Architecture

### Structure
```
NavigationContainer
  └── Stack Navigator (Root)
      ├── Auth Stack (if !isAuthenticated)
      │   ├── PhoneSignup
      │   └── SignupScreen
      │
      └── UserApp Stack (if isAuthenticated)
          └── MainTabs (Bottom Tab Navigator)
              ├── Home Stack
              │   ├── UserDashboard
              │   ├── HostelDetailScreen
              │   ├── LocationSelectionScreen
              │   ├── DateSelectionScreen
              │   ├── GuestSelectionScreen
              │   └── BookingScreen
              │
              ├── Search Stack
              │   ├── SearchScreen
              │   └── SearchResultsScreen
              │
              ├── Likes Stack
              │   └── LikesScreen
              │
              └── Profile Stack
                  ├── ProfileScreen
                  ├── EditProfileScreen
                  ├── PasswordSecurityScreen
                  ├── PrivacyProfileScreen
                  ├── CountrySelectionScreen
                  ├── CurrencySelectionScreen
                  ├── LanguageSelectionScreen
                  ├── NotificationSettingsScreen
                  ├── FAQScreen
                  ├── CustomerServiceScreen
                  ├── MyBookingsScreen
                  ├── PaymentMethodsScreen
                  ├── PrivacyPolicyScreen
                  └── TermsOfServiceScreen
```

### Navigation Props
Every screen receives:
```javascript
{
  navigation: {
    navigate: (screenName, params?) => void,
    goBack: () => void,
    push: (screenName, params?) => void,
    replace: (screenName, params?) => void,
    reset: (state) => void
  },
  route: {
    params: object,           // Passed parameters
    name: string,             // Current screen name
    key: string               // Unique screen key
  }
}
```

---

## 📊 State Management

### Context Providers

#### AuthContext
```javascript
// Provider Setup
<AuthProvider>
  {children}
</AuthProvider>

// Usage
const { user, isAuthenticated, login, logout } = useAuth();

// Methods
login({ name, email, phone })  // Authenticate user
logout()                        // Clear authentication
```

#### FavoritesContext
```javascript
// Provider Setup
<FavoritesProvider>
  {children}
</FavoritesProvider>

// Usage
const { favorites, likedHotels, toggleFavorite, isFavorite, removeFavorite } = useFavorites();

// Methods
toggleFavorite(hotel)           // Add/remove from favorites
isFavorite(hotelId)            // Check if favorited (returns boolean)
removeFavorite(hotelId)        // Remove specific favorite
```

### State Structure
```javascript
// AuthContext State
{
  user: {
    name: string,
    email: string,
    phone: string,
    // ... other user data
  },
  isAuthenticated: boolean
}

// FavoritesContext State
{
  favorites: Set<number>,        // Set of hotel IDs
  likedHotels: Array<{           // Full hotel objects
    id: number,
    name: string,
    location: string,
    price: number,
    rating: number,
    image: string,
    liked: boolean
  }>
}
```

---

## 🎨 Component Patterns

### Screen Component Template
```javascript
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const ScreenName = ({ navigation, route }) => {
  // State
  const [state, setState] = useState(initialValue);

  // Handlers
  const handleAction = () => {
    // Logic here
    navigation.navigate('NextScreen', { param: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Screen Title</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Screen content */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
  },
});

export default ScreenName;
```

### Custom Hook Pattern
```javascript
// useForm.js
import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = (validationRules) => {
    // Validation logic
    return isValid;
  };

  return { values, errors, handleChange, validate };
};
```

---

## 🔌 Data Flow Patterns

### Screen to Screen Communication
```javascript
// Sending data
navigation.navigate('TargetScreen', {
  location: 'Mumbai',
  checkInDate: '2025-10-15',
  checkOutDate: '2025-10-20'
});

// Receiving data
const { location, checkInDate, checkOutDate } = route.params || {};

// Returning data to previous screen
useEffect(() => {
  if (route.params?.selectedLocation) {
    setLocation(route.params.selectedLocation);
  }
}, [route.params]);
```

### Context Data Access
```javascript
// Read from context
const { favorites, isFavorite } = useFavorites();

// Update context
const handleLike = (hotel) => {
  toggleFavorite(hotel);
};

// Conditional rendering
{isFavorite(hotel.id) ? (
  <Ionicons name="heart" size={20} color="#ef4444" />
) : (
  <Ionicons name="heart-outline" size={20} color="#6b7280" />
)}
```

---

## 🎭 Common UI Patterns

### Search with Filter
```javascript
const [searchQuery, setSearchQuery] = useState('');
const [filteredItems, setFilteredItems] = useState([]);

const handleSearch = (query) => {
  setSearchQuery(query);
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredItems(filtered);
};
```

### Toggle States
```javascript
const [isEnabled, setIsEnabled] = useState(false);

<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
  thumbColor={isEnabled ? '#ffffff' : '#9ca3af'}
/>
```

### Expandable Items
```javascript
const [expandedItems, setExpandedItems] = useState({});

const toggleExpand = (id) => {
  setExpandedItems(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
};

{expandedItems[item.id] && (
  <View style={styles.expandedContent}>
    {/* Expanded content */}
  </View>
)}
```

### Form Validation
```javascript
const handleSubmit = () => {
  if (!field1 || !field2) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match');
    return;
  }
  
  // Submit logic
  Alert.alert('Success', 'Form submitted successfully');
  navigation.goBack();
};
```

---

## 📱 Screen-Specific Implementations

### UserDashboard (Home)
- **Purpose**: Main landing screen with hostel listings
- **Features**: Search, category filters, favorite toggle
- **Data**: Mock hostels array with filtering logic
- **Navigation**: Links to HostelDetailScreen, ProfileScreen, LocationSelection

### SearchScreen
- **Purpose**: Advanced search with location and date selection
- **Features**: Location picker, date picker, popular hotels carousel
- **Navigation**: LocationSelectionScreen, DateSelectionScreen, SearchResultsScreen
- **State**: selectedLocation, selectedDate from route params

### SearchResultsScreen
- **Purpose**: Display search results in list format
- **Features**: Hostel cards, favorite toggle, navigation to details
- **Context**: Uses FavoritesContext for like functionality
- **Data**: Receives location, dates from route params

### ProfileScreen
- **Purpose**: User settings and account management hub
- **Features**: Searchable menu items, organized sections
- **Navigation**: Links to 10+ profile sub-screens
- **Search**: Real-time filtering of menu options

### LikesScreen
- **Purpose**: Display all favorited hostels
- **Features**: List of favorites, remove functionality
- **Context**: Reads from FavoritesContext.likedHotels
- **State**: Global favorites synchronized across app

---

## 🔧 Utility Functions

### Favorites Storage
```javascript
// Save to persistent storage
saveFavorites(favorites)

// Load from persistent storage  
loadFavorites()

// Clear all favorites
clearFavorites()
```

### Date Formatting
```javascript
// Format date for display
formatDate(date, format)

// Parse date string
parseDate(dateString)

// Calculate nights between dates
calculateNights(checkIn, checkOut)
```

### Price Formatting
```javascript
// Format price with currency
formatPrice(amount, currency)

// Parse price string to number
parsePrice(priceString)
```

---

## 🎯 Performance Optimizations

### Implemented
- `React.memo()` for frequently re-rendered components
- `showsVerticalScrollIndicator={false}` for cleaner UI
- `keyExtractor` for FlatList optimization
- Lazy loading for images
- Debouncing for search inputs

### Best Practices
```javascript
// Memoize expensive calculations
const filteredData = useMemo(() => {
  return data.filter(/* filter logic */);
}, [data, filterCriteria]);

// Optimize callbacks
const handlePress = useCallback(() => {
  /* handler logic */
}, [dependencies]);

// Use FlatList for long lists
<FlatList
  data={items}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <ItemComponent item={item} />}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={10}
/>
```

---

## 🐛 Error Handling

### Alert Patterns
```javascript
// Success
Alert.alert('Success', 'Action completed successfully');

// Error
Alert.alert('Error', 'Please fill in all required fields');

// Confirmation
Alert.alert(
  'Confirm Action',
  'Are you sure you want to proceed?',
  [
    { text: 'Cancel', style: 'cancel' },
    { text: 'OK', onPress: () => handleAction() }
  ]
);
```

### Try-Catch Pattern
```javascript
const fetchData = async () => {
  try {
    const response = await api.getData();
    setData(response);
  } catch (error) {
    Alert.alert('Error', 'Failed to load data');
    console.error(error);
  }
};
```

---

## 🚀 Build & Deployment

### Development
```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Production Build
```bash
# iOS
npx react-native build-ios --mode Release

# Android
cd android && ./gradlew assembleRelease
```

---

## 📚 API Integration (Future)

### Expected API Structure
```javascript
// GET /hostels
[
  {
    id: number,
    name: string,
    location: string,
    price: number,
    rating: number,
    image: string,
    amenities: string[],
    availability: boolean
  }
]

// POST /bookings
{
  userId: number,
  hostelId: number,
  checkIn: string,
  checkOut: string,
  guests: number
}

// GET /user/favorites
{
  userId: number,
  favorites: number[]
}
```

---

## 🔒 Security Considerations

- Never store sensitive data in AsyncStorage without encryption
- Validate all user inputs before processing
- Use HTTPS for all API communications
- Implement proper authentication token management
- Sanitize data before displaying in UI
- Follow OWASP Mobile Security Guidelines

---

## 📝 Testing Strategy

### Unit Tests
- Test utility functions
- Test context providers
- Test custom hooks

### Integration Tests
- Test navigation flows
- Test state management
- Test screen interactions

### E2E Tests
- Test complete user journeys
- Test critical paths (booking flow)
- Test authentication flows

---

## 🔄 Version History
- **v1.0.0** - Initial release
- **Last Updated**: October 6, 2025
- **Status**: Production Ready

---

*This technical documentation provides complete architecture details for development and maintenance of the Hostel Booking Application.*
