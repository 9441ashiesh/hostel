import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(new Set());
  const [likedHotels, setLikedHotels] = useState([]);

  const toggleFavorite = (hotel) => {
    console.log('Global - Toggling favorite for hotel:', hotel.name);
    
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      const isCurrentlyLiked = newFavorites.has(hotel.id);
      
      if (isCurrentlyLiked) {
        // Remove from favorites
        newFavorites.delete(hotel.id);
        setLikedHotels(prevHotels => 
          prevHotels.filter(h => h.id !== hotel.id)
        );
        console.log('Global - Removed from favorites:', hotel.name);
      } else {
        // Add to favorites
        newFavorites.add(hotel.id);
        setLikedHotels(prevHotels => {
          // Check if hotel already exists to avoid duplicates
          const existingHotel = prevHotels.find(h => h.id === hotel.id);
          if (!existingHotel) {
            return [...prevHotels, { ...hotel, liked: true }];
          }
          return prevHotels;
        });
        console.log('Global - Added to favorites:', hotel.name);
      }
      
      return newFavorites;
    });
  };

  const isFavorite = (hotelId) => {
    return favorites.has(hotelId);
  };

  const removeFavorite = (hotelId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(hotelId);
      return newFavorites;
    });
    
    setLikedHotels(prevHotels => 
      prevHotels.filter(h => h.id !== hotelId)
    );
  };

  const value = {
    favorites,
    likedHotels,
    toggleFavorite,
    isFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
