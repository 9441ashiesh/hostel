import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const PrivacyProfileScreen = ({ navigation }) => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(true);
  const [allowMessages, setAllowMessages] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Profile</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Visibility */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Visibility</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="eye" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Public Profile</Text>
                <Text style={styles.settingDescription}>Allow others to see your profile</Text>
              </View>
            </View>
            <Switch
              value={profileVisibility}
              onValueChange={setProfileVisibility}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={profileVisibility ? '#ffffff' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="mail" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Show Email</Text>
                <Text style={styles.settingDescription}>Display email on your profile</Text>
              </View>
            </View>
            <Switch
              value={showEmail}
              onValueChange={setShowEmail}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={showEmail ? '#ffffff' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="call" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Show Phone</Text>
                <Text style={styles.settingDescription}>Display phone number on your profile</Text>
              </View>
            </View>
            <Switch
              value={showPhone}
              onValueChange={setShowPhone}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={showPhone ? '#ffffff' : '#9ca3af'}
            />
          </View>
        </View>

        {/* Communication */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="chatbubble" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Allow Messages</Text>
                <Text style={styles.settingDescription}>Receive messages from other users</Text>
              </View>
            </View>
            <Switch
              value={allowMessages}
              onValueChange={setAllowMessages}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={allowMessages ? '#ffffff' : '#9ca3af'}
            />
          </View>
        </View>

        {/* Data & Privacy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data & Privacy</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="share" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Data Sharing</Text>
                <Text style={styles.settingDescription}>Share data with partners for better service</Text>
              </View>
            </View>
            <Switch
              value={dataSharing}
              onValueChange={setDataSharing}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={dataSharing ? '#ffffff' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="analytics" size={20} color="#6b7280" />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Analytics</Text>
                <Text style={styles.settingDescription}>Help improve our service with usage data</Text>
              </View>
            </View>
            <Switch
              value={analytics}
              onValueChange={setAnalytics}
              trackColor={{ false: '#e5e7eb', true: '#1f2937' }}
              thumbColor={analytics ? '#ffffff' : '#9ca3af'}
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Actions</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="download" size={20} color="#6b7280" />
              <Text style={styles.menuItemText}>Download My Data</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="trash" size={20} color="#ef4444" />
              <Text style={[styles.menuItemText, { color: '#ef4444' }]}>Delete Account</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
    fontWeight: '500',
  },
});

export default PrivacyProfileScreen;