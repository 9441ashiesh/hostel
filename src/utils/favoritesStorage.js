import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@hostel_favorites';

export const getFavorites = async () => {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

export const toggleFavorite = async (hotelId) => {
  try {
    const favorites = await getFavorites();
    const isAlreadyFavorite = favorites.includes(hotelId);
    
    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(id => id !== hotelId);
    } else {
      updatedFavorites = [...favorites, hotelId];
    }
    
    await saveFavorites(updatedFavorites);
    return updatedFavorites;
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return [];
  }
};

export const isFavorite = async (hotelId) => {
  try {
    const favorites = await getFavorites();
    return favorites.includes(hotelId);
  } catch (error) {
    console.error('Error checking favorite:', error);
    return false;
  }
};
