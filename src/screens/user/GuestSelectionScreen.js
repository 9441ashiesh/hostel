import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const GuestSelectionScreen = ({ navigation }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const incrementPeople = () => {
    setNumberOfPeople(prev => prev + 1);
  };

  const decrementPeople = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(prev => prev - 1);
    }
  };

  const handleDone = () => {
    // Pass the selected number back to the search screen
    navigation.navigate('SearchScreen', { 
      selectedGuests: numberOfPeople 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Number of People</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.counterRow}>
          <View style={styles.labelContainer}>
            <Text style={styles.counterLabel}>Number of People</Text>
            <Text style={styles.counterSubtitle}>Select total guests</Text>
          </View>
          <View style={styles.counterControls}>
            <TouchableOpacity
              style={[
                styles.counterButton,
                numberOfPeople === 1 && styles.disabledButton
              ]}
              onPress={decrementPeople}
              disabled={numberOfPeople === 1}
            >
              <Text style={[
                styles.counterButtonText,
                numberOfPeople === 1 && styles.disabledButtonText
              ]}>−</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{numberOfPeople}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={incrementPeople}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Done Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
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
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#4A90E2',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // Content
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  
  // Counter Row
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  labelContainer: {
    flex: 1,
  },
  counterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  counterSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  counterButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
  counterValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: 'center',
  },
  
  // Footer
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  doneButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default GuestSelectionScreen;
