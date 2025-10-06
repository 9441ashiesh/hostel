# 🤖 AI Development Prompt - Hostel Booking App

## Context for AI Assistants

You are tasked with developing or maintaining a **React Native Hostel Booking Application**. This document provides you with all necessary context, patterns, and specifications to understand and work on this codebase effectively.

---

## 📋 Quick Reference

### Project Type
- **Platform**: React Native (iOS & Android)
- **Language**: JavaScript (ES6+)
- **State Management**: React Context API
- **Navigation**: React Navigation v6
- **UI Framework**: React Native Core + Custom Components

### Key Files to Understand
1. `DESIGN_SYSTEM.md` - Complete design specifications
2. `TECHNICAL_SPECS.md` - Architecture and implementation details
3. `src/navigation/AppNavigator.js` - Navigation structure
4. `src/context/` - State management contexts
5. `src/constants/colors.js` - Color palette

---

## 🎯 Core Principles

### Design Philosophy
```
✓ Dark theme with #1f2937 as primary color (NOT blue)
✓ Minimalist, clean UI with high contrast
✓ 4px grid spacing system (4, 8, 12, 16, 20, 24, 32, 40)
✓ Consistent border radius (8, 12, 16, 20, 24)
✓ Subtle shadows for depth
```

### Color Palette (MUST USE)
```javascript
const colors = {
  // Primary (Use for buttons, selected states)
  primary: '#1f2937',              // Dark gray - NOT BLUE!
  
  // Backgrounds
  background: '#f8f9fa',           // Light gray
  cardBackground: '#ffffff',       // White
  lightBackground: '#f3f4f6',      // Very light gray
  
  // Text
  textPrimary: '#1f2937',          // Dark
  textSecondary: '#6b7280',        // Medium gray
  textTertiary: '#9ca3af',         // Light gray
  
  // Borders
  border: '#e5e7eb',
  borderLight: '#f3f4f6',
  
  // Status & Accents
  success: '#10b981',
  error: '#ef4444',
  heart: '#ef4444',                // Red for likes
  star: '#fbbf24',                 // Gold for ratings
};
```

### Typography Standards
```javascript
// Headers
h1: { fontSize: 40, fontWeight: 'bold', color: '#1f2937' }
h2: { fontSize: 24, fontWeight: '700', color: '#1f2937' }
h3: { fontSize: 20, fontWeight: '700', color: '#1f2937' }
h4: { fontSize: 18, fontWeight: '600', color: '#1f2937' }

// Body
body: { fontSize: 16, fontWeight: '400', color: '#1f2937' }
secondary: { fontSize: 14, fontWeight: '400', color: '#6b7280' }
caption: { fontSize: 12, fontWeight: '500', color: '#6b7280' }

// Placeholder
placeholder: { fontSize: 16, color: '#9ca3af' }
```

---

## 🏗️ Project Structure Understanding

### Folder Organization
```
src/
├── components/         # Reusable UI components
│   ├── layout/        # Layout wrappers
│   ├── navigation/    # Custom navigation components
│   └── ui/            # UI elements (buttons, inputs, etc.)
│
├── constants/         # App-wide constants
│   └── colors.js     # COLOR PALETTE - USE THIS!
│
├── context/          # State management
│   ├── AuthContext.js        # User authentication
│   └── FavoritesContext.js   # Favorites/likes management
│
├── navigation/       # Navigation setup
│   └── AppNavigator.js       # Main navigation structure
│
├── screens/          # All screen components
│   ├── auth/        # Authentication flows
│   └── user/        # User-facing screens
│       └── profile/ # Profile-related screens (isolated folder)
│
├── services/        # API & business logic
└── utils/          # Helper functions
```

### Navigation Hierarchy
```
Root Stack
├── Auth Stack (unauthenticated)
│   ├── PhoneSignup
│   └── SignupScreen
│
└── UserApp Stack (authenticated)
    └── Bottom Tabs
        ├── Home Stack
        │   └── UserDashboard (main)
        │       └── HostelDetailScreen
        │           └── BookingScreen
        │
        ├── Search Stack
        │   └── SearchScreen
        │       ├── LocationSelectionScreen
        │       ├── DateSelectionScreen
        │       └── SearchResultsScreen
        │
        ├── Likes Stack
        │   └── LikesScreen
        │
        └── Profile Stack
            └── ProfileScreen
                ├── EditProfileScreen
                ├── PasswordSecurityScreen
                ├── PrivacyProfileScreen
                ├── CountrySelectionScreen
                ├── CurrencySelectionScreen
                ├── LanguageSelectionScreen
                ├── NotificationSettingsScreen
                ├── FAQScreen
                └── CustomerServiceScreen
```

---

## 🔑 Critical Patterns to Follow

### 1. Screen Component Structure
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
  // 1. State hooks first
  const [state, setState] = useState(initialValue);
  
  // 2. Context hooks
  const { user } = useAuth();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  // 3. Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 4. Handlers
  const handleAction = () => {
    // Logic
    navigation.navigate('NextScreen', { data });
  };
  
  // 5. Render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Title</Text>
        <View style={styles.headerRight} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Content */}
      </ScrollView>
    </SafeAreaView>
  );
};

// 6. Styles at bottom
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
});

export default ScreenName;
```

### 2. Button Styling (PRIMARY PATTERN)
```javascript
// PRIMARY BUTTON - Dark gray background
{
  backgroundColor: '#1f2937',    // NOT BLUE!
  borderRadius: 24,              // Pill shape OR 12 for rectangular
  paddingVertical: 16,
  paddingHorizontal: 32,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 4,
}

// Button Text
{
  fontSize: 16,
  fontWeight: '600',
  color: '#ffffff',
}
```

### 3. Input Field Styling
```javascript
{
  backgroundColor: '#f9fafb',
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderWidth: 1,
  borderColor: '#e5e7eb',
  fontSize: 16,
  color: '#1f2937',
}

// Placeholder
placeholderTextColor="#9ca3af"
```

### 4. Card Styling
```javascript
{
  backgroundColor: '#ffffff',
  borderRadius: 16,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
}
```

### 5. Toggle Switch Pattern
```javascript
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  trackColor={{ false: '#e5e7eb', true: '#1f2937' }}  // Dark gray when active!
  thumbColor={isEnabled ? '#ffffff' : '#9ca3af'}
/>
```

### 6. Heart/Like Icon Pattern
```javascript
<TouchableOpacity onPress={() => toggleFavorite(item)}>
  <Ionicons 
    name={isFavorite(item.id) ? "heart" : "heart-outline"} 
    size={20} 
    color={isFavorite(item.id) ? "#ef4444" : "#6b7280"}  // Red when liked
  />
</TouchableOpacity>
```

### 7. Star Rating Pattern
```javascript
<View style={styles.ratingContainer}>
  <Ionicons name="star" size={14} color="#fbbf24" />  // Gold color
  <Text style={styles.ratingText}>{rating}</Text>
</View>
```

---

## 🔗 Context Usage

### AuthContext
```javascript
import { useAuth } from '../context/AuthContext';

// In component
const { user, isAuthenticated, login, logout } = useAuth();

// Methods
login({ name, email, phone });  // Set user and authenticate
logout();                        // Clear user and de-authenticate

// Conditional rendering
{isAuthenticated && <UserContent />}
```

### FavoritesContext
```javascript
import { useFavorites } from '../context/FavoritesContext';

// In component
const { favorites, likedHotels, toggleFavorite, isFavorite, removeFavorite } = useFavorites();

// Methods
toggleFavorite(hotel);           // Add/remove from favorites
isFavorite(hotel.id);           // Check if favorited (returns boolean)
removeFavorite(hotel.id);       // Remove from favorites

// Display liked hotels
{likedHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}
```

---

## 🎨 Component Specifications

### Header with Back Button
```javascript
<View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="arrow-back" size={24} color="#1f2937" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Screen Title</Text>
  <View style={styles.headerRight} />  {/* Spacer for centering */}
</View>

// Styles
header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#f3f4f6',
}
```

### Search Bar
```javascript
<View style={styles.searchContainer}>
  <Ionicons name="search" size={20} color="#9ca3af" />
  <TextInput
    style={styles.searchInput}
    placeholder="Search..."
    value={searchQuery}
    onChangeText={setSearchQuery}
    placeholderTextColor="#9ca3af"
  />
  {searchQuery.length > 0 && (
    <TouchableOpacity onPress={() => setSearchQuery('')}>
      <Ionicons name="close-circle" size={20} color="#9ca3af" />
    </TouchableOpacity>
  )}
</View>

// Styles
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f9fafb',
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: '#e5e7eb',
}
```

### Menu Item (Settings Style)
```javascript
<TouchableOpacity 
  style={styles.menuItem}
  onPress={() => navigation.navigate('TargetScreen')}
>
  <View style={styles.menuItemLeft}>
    <Ionicons name="icon-name" size={20} color="#6b7280" />
    <Text style={styles.menuItemText}>Menu Item</Text>
  </View>
  <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
</TouchableOpacity>

// Styles
menuItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#f3f4f6',
}
```

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T DO THIS:
```javascript
// Wrong color - using blue
backgroundColor: '#3b82f6'  // NO!

// Wrong like color - using pink
color: '#e91e63'  // NO!

// Missing SafeAreaView
<View style={styles.container}>  // NO!

// Hardcoded strings
<Text>Search</Text>  // Should be from constants

// Inline styles
<View style={{ padding: 20 }}>  // NO!
```

### ✅ DO THIS INSTEAD:
```javascript
// Correct primary color
backgroundColor: '#1f2937'  // YES!

// Correct like color
color: '#ef4444'  // YES!

// Use SafeAreaView
<SafeAreaView style={styles.container}>  // YES!

// Use StyleSheet
const styles = StyleSheet.create({...})  // YES!
```

---

## 📝 When Creating New Screens

### Checklist
- [ ] Import SafeAreaView from 'react-native-safe-area-context'
- [ ] Use container background: `#f8f9fa`
- [ ] Add standard header with back button
- [ ] Use Ionicons for all icons
- [ ] Apply correct color palette (dark gray primary)
- [ ] Use 20px horizontal padding
- [ ] Set showsVerticalScrollIndicator={false} for ScrollView
- [ ] Add proper navigation params handling
- [ ] Include error handling (Alert for user feedback)
- [ ] Use proper spacing (4px grid system)
- [ ] Add TouchableOpacity activeOpacity={0.7}
- [ ] Export default at bottom

### Template Checklist Code
```javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const NewScreen = ({ navigation, route }) => {
  // Get params
  const params = route.params || {};
  
  // State
  const [data, setData] = useState([]);
  
  // Handlers
  const handleAction = () => {
    Alert.alert('Success', 'Action completed');
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Screen</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Your content here */}
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
    paddingHorizontal: 20,
  },
});

export default NewScreen;
```

---

## 🔍 Debugging Tips

### Common Issues & Solutions

**Issue**: Navigation not working
```javascript
// Solution: Check navigation structure in AppNavigator.js
// Ensure screen is registered in correct stack
```

**Issue**: Context undefined error
```javascript
// Solution: Ensure Provider wraps the component tree
<AuthProvider>
  <FavoritesProvider>
    <AppNavigator />
  </FavoritesProvider>
</AuthProvider>
```

**Issue**: Colors look different
```javascript
// Solution: Always use exact hex codes from colors.js
import Colors from '../constants/colors';
backgroundColor: Colors.primary  // OR
backgroundColor: '#1f2937'  // Direct hex
```

**Issue**: Safe area not working
```javascript
// Solution: Import from correct package
import { SafeAreaView } from 'react-native-safe-area-context';
// NOT from 'react-native'
```

---

## 📊 Data Structures

### Hotel/Hostel Object
```javascript
{
  id: number,              // Unique identifier
  name: string,            // Hostel name
  location: string,        // City/area
  price: number,           // Price per night
  rating: number,          // 0-5 rating
  reviews: number,         // Number of reviews
  image: string,           // Image URL
  liked: boolean,          // Is favorited
  guests: number,          // Max guests
  amenities: string[]      // List of amenities
}
```

### User Object
```javascript
{
  name: string,
  email: string,
  phone: string,
  profileImage: string,
  preferences: {
    country: string,
    currency: string,
    language: string,
    notifications: boolean
  }
}
```

### Booking Object
```javascript
{
  id: number,
  hostelId: number,
  userId: number,
  checkIn: string,         // ISO date
  checkOut: string,        // ISO date
  guests: number,
  totalPrice: number,
  status: 'pending' | 'confirmed' | 'cancelled'
}
```

---

## 🎯 Key Implementation Notes

### Screen Transitions
- Use `navigation.navigate()` for new screens
- Use `navigation.goBack()` for returning
- Use `navigation.replace()` for auth flows
- Pass data via route params, not global state

### State Management
- Use Context for global state (auth, favorites)
- Use local state for UI-specific data
- Use route params for screen-to-screen data
- Avoid prop drilling - use context

### Performance
- Use `React.memo()` for static components
- Use `useMemo()` for expensive calculations
- Use `useCallback()` for event handlers
- Use FlatList for long lists, not map()

### Styling
- Always use StyleSheet.create()
- Follow 4px spacing grid
- Use exact hex colors from palette
- Maintain consistent border radius

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Clear cache
npm start -- --reset-cache
```

---

## 📚 Essential Reading Order

1. **DESIGN_SYSTEM.md** - Understand visual language
2. **TECHNICAL_SPECS.md** - Understand architecture
3. **src/navigation/AppNavigator.js** - Understand flow
4. **src/context/** - Understand state management
5. **src/screens/user/UserDashboard.js** - Reference implementation

---

## 💡 Pro Tips for AI Assistants

1. **Always check the color palette** before suggesting colors
2. **Follow the exact navigation structure** defined in AppNavigator
3. **Use the template patterns** for consistency
4. **Reference existing screens** for styling patterns
5. **Test context availability** before using hooks
6. **Maintain the folder structure** - don't create new patterns
7. **Use SafeAreaView** from react-native-safe-area-context, not react-native
8. **Remember**: Primary color is **#1f2937** (dark gray), NOT blue!
9. **Always use Ionicons** from @expo/vector-icons
10. **Follow the screen component structure** pattern religiously

---

## 🎨 Final Reminder

**THE MOST IMPORTANT RULE:**
```javascript
// PRIMARY COLOR IS DARK GRAY, NOT BLUE!
const PRIMARY_COLOR = '#1f2937';  // ✅ CORRECT
const PRIMARY_COLOR = '#3b82f6';  // ❌ WRONG!

// LIKED/FAVORITE IS RED, NOT PINK!
const HEART_COLOR = '#ef4444';    // ✅ CORRECT  
const HEART_COLOR = '#e91e63';    // ❌ WRONG!
```

---

*This prompt document contains everything an AI assistant needs to understand and work on this codebase. Follow these patterns precisely for consistency.*
