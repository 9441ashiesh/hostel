import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const { width } = Dimensions.get('window');

const MerchantDashboard = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>Hi Rahul! 👋</Text>
            <Text style={styles.subGreeting}>Have a nice day!</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#FFA726' }]}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>💰</Text>
            </View>
            <Text style={styles.statValue}>₹ 8,00B</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#26A69A' }]}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>📈</Text>
            </View>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Total Registration</Text>
          </View>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          <TouchableOpacity style={styles.calendarCard}>
            <Text style={styles.calendarTitle}>Calendar</Text>
            <Text style={styles.calendarIcon}>📅</Text>
          </TouchableOpacity>
        </View>

        {/* Period Headers */}
        <View style={styles.periodHeaders}>
          <Text style={styles.leftHeader}>Revenue this week</Text>
          <Text style={styles.rightHeader}>Registration this week</Text>
        </View>

        {/* Revenue Display */}
        <View style={styles.revenueDisplay}>
          <Text style={styles.revenueAmount}>₹ 10,000</Text>
          <Text style={styles.goalText}>(goal)</Text>
          <View style={styles.percentageBadge}>
            <Text style={styles.percentageValue}>60</Text>
            <Text style={styles.percentageSymbol}>%</Text>
          </View>
        </View>

        {/* Chart Section */}
        <View style={styles.chartSection}>
          <View style={styles.chartContainer}>
            {/* Chart Background */}
            <View style={styles.chartBackground} />
            
            {/* Chart Line - Simulating the curve */}
            <View style={styles.chartCurve}>
              <View style={[styles.dataPoint, { left: '8%', bottom: '25%' }]} />
              <View style={[styles.dataPoint, { left: '20%', bottom: '35%' }]} />
              <View style={[styles.dataPoint, { left: '32%', bottom: '30%' }]} />
              <View style={[styles.dataPoint, { left: '44%', bottom: '45%' }]} />
              <View style={[styles.dataPoint, { left: '56%', bottom: '55%' }]} />
              <View style={[styles.dataPoint, { left: '68%', bottom: '65%' }]} />
              <View style={[styles.dataPoint, { left: '80%', bottom: '70%' }]} />
            </View>
            
            {/* Current Point Indicator */}
            <View style={styles.currentPoint}>
              <View style={styles.pointDot} />
              <View style={styles.pointLabel}>
                <Text style={styles.rupeeSymbol}>₹</Text>
              </View>
            </View>
          </View>
          
          {/* Day Labels */}
          <View style={styles.dayLabels}>
            <Text style={styles.dayLabel}>Mon</Text>
            <Text style={styles.dayLabel}>Tue</Text>
            <Text style={styles.dayLabel}>Wed</Text>
            <Text style={styles.dayLabel}>Thu</Text>
            <Text style={[styles.dayLabel, styles.activeDay]}>Fri</Text>
            <Text style={styles.dayLabel}>Sat</Text>
            <Text style={styles.dayLabel}>Sun</Text>
          </View>
        </View>

        {/* Bottom Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.activeNavButton}>
            <Text style={styles.activeNavIcon}>🏠</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={handleLogout}>
          <Text style={styles.navIcon}>👤</Text>
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
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 18,
  },
  
  // Statistics Cards
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 15,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    minHeight: 100,
    position: 'relative',
  },
  cardIconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  cardIcon: {
    fontSize: 20,
    color: 'white',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 35,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: 'white',
    opacity: 0.9,
  },
  
  // Calendar Section
  calendarSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  calendarCard: {
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  calendarIcon: {
    fontSize: 20,
  },
  
  // Period Headers
  periodHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  leftHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  rightHeader: {
    fontSize: 12,
    color: '#6B7280',
  },
  
  // Revenue Display
  revenueDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
    gap: 8,
  },
  revenueAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  goalText: {
    fontSize: 14,
    color: '#6B7280',
  },
  percentageBadge: {
    backgroundColor: '#1F2937',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  percentageValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  percentageSymbol: {
    fontSize: 10,
    color: 'white',
    marginLeft: 1,
  },
  
  // Chart Section
  chartSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  chartContainer: {
    height: 160,
    borderRadius: 16,
    backgroundColor: '#F8FAFC',
    position: 'relative',
    overflow: 'hidden',
  },
  chartBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#DBEAFE',
    opacity: 0.4,
  },
  chartCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dataPoint: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3B82F6',
  },
  currentPoint: {
    position: 'absolute',
    right: 25,
    top: 40,
    alignItems: 'center',
  },
  pointDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1F2937',
    marginBottom: 8,
  },
  pointLabel: {
    backgroundColor: '#1F2937',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeSymbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  dayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  dayLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  activeDay: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  
  // Bottom Section
  bottomSpace: {
    height: 100,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  activeNavButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  activeNavIcon: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default MerchantDashboard;
