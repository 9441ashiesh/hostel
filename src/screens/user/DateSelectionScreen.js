import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DateSelectionScreen = ({ navigation, route }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [currentMonth] = useState(new Date());
  const currentLocation = route.params?.currentLocation || '';
  const currentDateValue = route.params?.currentDate || '';
  
  // Generate calendar data dynamically
  const generateMonthDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const septemberDays = generateMonthDays(currentMonth);
  const nextMonth = new Date(currentMonth);
  nextMonth.setMonth(currentMonth.getMonth() + 1);
  const octoberDays = generateMonthDays(nextMonth);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  const formatDisplayDate = (day, month) => {
    if (!day) return 'Select';
    const monthShort = monthNames[month].substring(0, 3);
    return `${day} ${monthShort}`;
  };

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const handleDateSelect = (day) => {
    if (!day) return;
    
    // Get today's date for comparison
    const today = new Date();
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    // Don't allow selection of past dates
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      return; // Disable past dates
    }
    
    if (!checkInDate || (checkInDate && checkOutDate)) {
      // Set check-in date
      setCheckInDate(day);
      setCheckOutDate(null);
    } else if (day > checkInDate) {
      // Set check-out date
      setCheckOutDate(day);
    } else {
      // Reset if selected date is before check-in
      setCheckInDate(day);
      setCheckOutDate(null);
    }
  };

  const handleApply = () => {
    if (checkInDate && checkOutDate) {
      const formattedDate = formatDisplayDate(checkInDate, currentMonth.getMonth()) + 
                           ' - ' + formatDisplayDate(checkOutDate, currentMonth.getMonth());
      navigation.navigate('SearchScreen', { 
        selectedDate: formattedDate,
        selectedLocation: currentLocation
      });
    }
  };

  const renderCalendarDay = (day, month = 'current') => {
    if (!day) {
      return <View key={`empty-${Math.random()}`} style={styles.emptyDay} />;
    }

    // Check if date is in the past
    const today = new Date();
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const isPastDate = dateToCheck < today.setHours(0, 0, 0, 0);

    const isCheckIn = day === checkInDate && month === 'current';
    const isCheckOut = day === checkOutDate && month === 'current';
    const isInRange = checkInDate && checkOutDate && day > checkInDate && day < checkOutDate && month === 'current';

    return (
      <TouchableOpacity
        key={`${month}-${day}`}
        style={[
          styles.dayButton,
          isInRange && styles.rangeDay,
          isPastDate && styles.disabledDay,
        ]}
        onPress={() => handleDateSelect(day)}
        disabled={isPastDate}
      >
        <View style={[
          isCheckIn && styles.checkInDay,
          isCheckOut && styles.checkOutDay,
        ]}>
          <Text style={[
            styles.dayText,
            (isCheckIn || isCheckOut) && styles.selectedDayText,
            isPastDate && styles.disabledDayText,
          ]}>
            {day}
          </Text>
        </View>
        {isCheckIn && <Text style={styles.dateLabel}>Check-in</Text>}
        {isCheckOut && <Text style={styles.dateLabel}>Check-out</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Check in</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Check-in / Check-out Display */}
        <View style={styles.dateDisplayContainer}>
          <View style={styles.dateColumn}>
            <Text style={styles.dateLabel}>Check in</Text>
            <Text style={styles.dateValue}>
              {formatDisplayDate(checkInDate, currentMonth.getMonth())}
            </Text>
          </View>
          <View style={styles.dateColumn}>
            <Text style={styles.dateLabel}>Check out</Text>
            <Text style={styles.dateValue}>
              {formatDisplayDate(checkOutDate, currentMonth.getMonth())}
            </Text>
          </View>
        </View>

        {/* Week Days Header */}
        <View style={styles.weekHeader}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>

        {/* September/Current Month Calendar */}
        <Text style={styles.monthTitle}>
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </Text>
        <View style={styles.calendar}>
          {septemberDays.map((day, index) => renderCalendarDay(day, 'current'))}
        </View>

        {/* October/Next Month Calendar */}
        <Text style={styles.monthTitle}>
          {monthNames[nextMonth.getMonth()]} {nextMonth.getFullYear()}
        </Text>
        <View style={styles.calendar}>
          {octoberDays.map((day, index) => renderCalendarDay(day, 'next'))}
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Apply Button - Fixed at Bottom */}
      <View style={styles.applyButtonContainer}>
        <TouchableOpacity 
          style={[
            styles.applyButton,
            (!checkInDate || !checkOutDate) && styles.applyButtonDisabled
          ]}
          onPress={handleApply}
          disabled={!checkInDate || !checkOutDate}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  
  // Content
  content: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  
  // Date Display
  dateDisplayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: -20,
    marginTop: 12,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  dateColumn: {
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  dateValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  
  // Week Header
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    marginBottom: 16,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    width: 40,
    textAlign: 'center',
  },
  
  // Calendar
  monthTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 16,
    marginTop: 16,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dayButton: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  emptyDay: {
    width: 40,
    height: 50,
  },
  checkInDay: {
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOutDay: {
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rangeDay: {
    backgroundColor: '#E0F7FA',
  },
  dayText: {
    fontSize: 16,
    color: '#1F2937',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  disabledDay: {
    opacity: 0.3,
  },
  disabledDayText: {
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  dateLabel: {
    fontSize: 8,
    color: '#3b82f6',
    fontWeight: '600',
    marginTop: 2,
  },
  
  // Bottom Space
  bottomSpace: {
    height: 50,
  },

  // Apply Button
  applyButtonContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  applyButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonDisabled: {
    backgroundColor: '#D1D5DB',
    opacity: 0.6,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default DateSelectionScreen;
