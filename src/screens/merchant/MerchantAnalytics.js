import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import MerchantLayout from '../../components/layout/MerchantLayout';

const { width } = Dimensions.get('window');

const MerchantAnalytics = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Revenue Data
  const revenueData = {
    current: '₹45,680',
    previous: '₹38,230',
    growth: '+19.5%',
    isPositive: true
  };

  // Key Performance Metrics
  const kpiData = [
    { title: 'Total Revenue', value: '₹45,680', change: '+19.5%', isPositive: true, icon: '💰' },
    { title: 'Bookings', value: '127', change: '+12.3%', isPositive: true, icon: '📅' },
    { title: 'Occupancy Rate', value: '78%', change: '+5.2%', isPositive: true, icon: '🏨' },
    { title: 'Avg. Rating', value: '4.8', change: '+0.3', isPositive: true, icon: '⭐' },
  ];

  // Property Performance
  const propertyData = [
    { name: 'Grand Hotel Mumbai', occupancy: 85, revenue: '₹18,500', bookings: 45, rating: 4.9 },
    { name: 'City Lodge Delhi', occupancy: 72, revenue: '₹15,200', bookings: 38, rating: 4.7 },
    { name: 'Beach Resort Goa', occupancy: 76, revenue: '₹11,980', bookings: 44, rating: 4.8 },
  ];

  // Monthly Trends
  const monthlyTrends = [
    { month: 'Jan', revenue: 32000, bookings: 95 },
    { month: 'Feb', revenue: 35000, bookings: 108 },
    { month: 'Mar', revenue: 45680, bookings: 127 },
    { month: 'Apr', revenue: 42000, bookings: 118 },
    { month: 'May', revenue: 38000, bookings: 102 },
    { month: 'Jun', revenue: 41000, bookings: 115 },
  ];

  // Customer Demographics
  const customerData = [
    { segment: 'Business Travelers', percentage: 45, count: 57 },
    { segment: 'Leisure Travelers', percentage: 35, count: 44 },
    { segment: 'Group Bookings', percentage: 20, count: 26 },
  ];

  // Recent Performance Insights
  const insights = [
    {
      type: 'positive',
      title: 'Revenue Growth',
      description: 'Your revenue increased by 19.5% this month compared to last month.',
      icon: '📈'
    },
    {
      type: 'neutral',
      title: 'Peak Season Approaching',
      description: 'Booking trends suggest peak season is starting. Consider adjusting pricing.',
      icon: '📅'
    },
    {
      type: 'positive',
      title: 'High Customer Satisfaction',
      description: 'Your average rating of 4.8 is above industry average of 4.3.',
      icon: '⭐'
    }
  ];

  const periodOptions = [
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
    { key: 'quarter', label: 'Quarter' },
    { key: 'year', label: 'Year' },
  ];

  const getOccupancyColor = (rate) => {
    if (rate >= 80) return '#10B981';
    if (rate >= 60) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <MerchantLayout navigation={navigation} currentRoute="Analytics">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Business Analytics</Text>
          <Text style={styles.headerSubtitle}>Track your performance metrics</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Period Selector */}
          <View style={styles.periodSelector}>
            {periodOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.periodButton,
                  selectedPeriod === option.key && styles.activePeriodButton
                ]}
                onPress={() => setSelectedPeriod(option.key)}
              >
                <Text style={[
                  styles.periodButtonText,
                  selectedPeriod === option.key && styles.activePeriodButtonText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Revenue Overview */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>💰 Revenue Overview</Text>
            <View style={styles.revenueCard}>
              <View style={styles.revenueHeader}>
                <View>
                  <Text style={styles.revenueAmount}>{revenueData.current}</Text>
                  <Text style={styles.revenueLabel}>This Month</Text>
                </View>
                <View style={[styles.growthBadge, { backgroundColor: revenueData.isPositive ? '#DCFCE7' : '#FEE2E2' }]}>
                  <Text style={[styles.growthText, { color: revenueData.isPositive ? '#16A34A' : '#DC2626' }]}>
                    {revenueData.growth}
                  </Text>
                </View>
              </View>
              <Text style={styles.revenueComparison}>
                Compared to last month: {revenueData.previous}
              </Text>
            </View>
          </View>

          {/* Key Performance Indicators */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Key Performance Indicators</Text>
            <View style={styles.kpiGrid}>
              {kpiData.map((kpi, index) => (
                <View key={index} style={styles.kpiCard}>
                  <Text style={styles.kpiIcon}>{kpi.icon}</Text>
                  <Text style={styles.kpiValue}>{kpi.value}</Text>
                  <Text style={styles.kpiTitle}>{kpi.title}</Text>
                  <Text style={[
                    styles.kpiChange,
                    { color: kpi.isPositive ? '#16A34A' : '#DC2626' }
                  ]}>
                    {kpi.change}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Property Performance */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🏨 Property Performance</Text>
            {propertyData.map((property, index) => (
              <View key={index} style={styles.propertyCard}>
                <View style={styles.propertyHeader}>
                  <Text style={styles.propertyName}>{property.name}</Text>
                  <Text style={styles.propertyRevenue}>{property.revenue}</Text>
                </View>
                <View style={styles.propertyMetrics}>
                  <View style={styles.metricItem}>
                    <Text style={styles.metricLabel}>Occupancy</Text>
                    <View style={styles.occupancyBar}>
                      <View 
                        style={[
                          styles.occupancyFill, 
                          { 
                            width: `${property.occupancy}%`,
                            backgroundColor: getOccupancyColor(property.occupancy)
                          }
                        ]} 
                      />
                      <Text style={styles.occupancyText}>{property.occupancy}%</Text>
                    </View>
                  </View>
                  <View style={styles.propertyStats}>
                    <Text style={styles.statText}>📅 {property.bookings} bookings</Text>
                    <Text style={styles.statText}>⭐ {property.rating} rating</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Customer Demographics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👥 Customer Demographics</Text>
            <View style={styles.demographicsCard}>
              {customerData.map((segment, index) => (
                <View key={index} style={styles.segmentRow}>
                  <View style={styles.segmentInfo}>
                    <Text style={styles.segmentName}>{segment.segment}</Text>
                    <Text style={styles.segmentCount}>{segment.count} customers</Text>
                  </View>
                  <View style={styles.segmentPercentage}>
                    <View style={styles.percentageBar}>
                      <View 
                        style={[
                          styles.percentageFill, 
                          { width: `${segment.percentage}%` }
                        ]} 
                      />
                    </View>
                    <Text style={styles.percentageText}>{segment.percentage}%</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Performance Insights */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>💡 Performance Insights</Text>
            {insights.map((insight, index) => (
              <View key={index} style={styles.insightCard}>
                <View style={styles.insightHeader}>
                  <Text style={styles.insightIcon}>{insight.icon}</Text>
                  <Text style={styles.insightTitle}>{insight.title}</Text>
                </View>
                <Text style={styles.insightDescription}>{insight.description}</Text>
              </View>
            ))}
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
            <View style={styles.actionsGrid}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>📊</Text>
                <Text style={styles.actionText}>Download Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>📧</Text>
                <Text style={styles.actionText}>Email Analytics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('PropertyInfo')}>
                <Text style={styles.actionIcon}>🏨</Text>
                <Text style={styles.actionText}>Manage Properties</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>💰</Text>
                <Text style={styles.actionText}>View Earnings</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </MerchantLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  activePeriodButton: {
    backgroundColor: '#3B82F6',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  activePeriodButtonText: {
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  revenueCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  revenueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  revenueAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  revenueLabel: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  growthBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  growthText: {
    fontSize: 14,
    fontWeight: '600',
  },
  revenueComparison: {
    fontSize: 12,
    color: '#94A3B8',
  },
  kpiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  kpiCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 60) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  kpiIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  kpiValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  kpiTitle: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 4,
  },
  kpiChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  propertyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  propertyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    flex: 1,
  },
  propertyRevenue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  propertyMetrics: {
    gap: 8,
  },
  metricItem: {
    marginBottom: 8,
  },
  metricLabel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  occupancyBar: {
    backgroundColor: '#F1F5F9',
    borderRadius: 6,
    height: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  occupancyFill: {
    height: '100%',
    borderRadius: 6,
    position: 'absolute',
    left: 0,
  },
  occupancyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
  },
  propertyStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 12,
    color: '#64748B',
  },
  demographicsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  segmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  segmentInfo: {
    flex: 1,
  },
  segmentName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
    marginBottom: 2,
  },
  segmentCount: {
    fontSize: 12,
    color: '#64748B',
  },
  segmentPercentage: {
    alignItems: 'flex-end',
    width: 100,
  },
  percentageBar: {
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
    height: 8,
    width: 80,
    marginBottom: 4,
  },
  percentageFill: {
    backgroundColor: '#3B82F6',
    borderRadius: 4,
    height: '100%',
  },
  percentageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E293B',
  },
  insightCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  insightIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  insightDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 60) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1E293B',
    textAlign: 'center',
  },
  bottomSpace: {
    height: 100,
  },
});

export default MerchantAnalytics;
