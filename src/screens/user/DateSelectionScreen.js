import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const DateSelectionScreen = ({ navigation }) => {
  const [checkInDate, setCheckInDate] = useState(11);
  const [checkOutDate, setCheckOutDate] = useState(12);
  const [currentMonth, setCurrentMonth] = useState('September 2025');
  
  // Current month calendar data
  const septemberDays = [
    null, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30
  ];

  // Next month calendar data
  const octoberDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  const weekDays = ['S', 'T', 'W', 'T', 'F', 'S', 'M'];

  const handleDateSelect = (day) => {
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

  const renderCalendarDay = (day, month = 'current') => {
    if (!day) {
      return <View key={`empty-${Math.random()}`} style={styles.emptyDay} />;
    }

    const isCheckIn = day === checkInDate && month === 'current';
    const isCheckOut = day === checkOutDate && month === 'current';
    const isInRange = checkInDate && checkOutDate && day > checkInDate && day < checkOutDate && month === 'current';

    return (
      <TouchableOpacity
        key={`${month}-${day}`}
        style={[
          styles.dayButton,
          isCheckIn && styles.checkInDay,
          isCheckOut && styles.checkOutDay,
          isInRange && styles.rangeDay,
        ]}
        onPress={() => handleDateSelect(day)}
      >
        <Text style={[
          styles.dayText,
          (isCheckIn || isCheckOut) && styles.selectedDayText,
        ]}>
          {day}
        </Text>
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
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Check in</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Check-in / Check-out Display */}
        <View style={styles.dateDisplayContainer}>
          <View style={styles.dateColumn}>
            <Text style={styles.dateLabel}>Check in</Text>
            <Text style={styles.dateValue}>11 Sep</Text>
          </View>
          <View style={styles.dateColumn}>
            <Text style={styles.dateLabel}>Check out</Text>
            <Text style={styles.dateValue}>12 Sep</Text>
          </View>
        </View>

        {/* Week Days Header */}
        <View style={styles.weekHeader}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>

        {/* September 2025 Calendar */}
        <Text style={styles.monthTitle}>{currentMonth}</Text>
        <View style={styles.calendar}>
          {septemberDays.map((day, index) => renderCalendarDay(day, 'current'))}
        </View>

        {/* October 2025 Calendar */}
        <Text style={styles.monthTitle}>October 2025</Text>
        <View style={styles.calendar}>
          {octoberDays.map((day, index) => renderCalendarDay(day, 'next'))}
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
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
  },
  
  // Date Display
  dateDisplayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    marginBottom: 20,
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  emptyDay: {
    width: 40,
    height: 40,
  },
  checkInDay: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
  },
  checkOutDay: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
  },
  rangeDay: {
    backgroundColor: '#E3F2FD',
  },
  dayText: {
    fontSize: 16,
    color: '#1F2937',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  // Bottom Space
  bottomSpace: {
    height: 50,
  },
});

export default DateSelectionScreen;
