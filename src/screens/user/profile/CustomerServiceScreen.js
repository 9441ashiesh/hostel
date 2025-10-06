import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CustomerServiceScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSendMessage = () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in both subject and message fields');
      return;
    }
    
    Alert.alert(
      'Message Sent',
      'Your message has been sent to our support team. We will get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  const handlePhoneCall = () => {
    const phoneNumber = '+1-800-HOSTEL-1';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    const email = 'support@hostelapp.com';
    Linking.openURL(`mailto:${email}`);
  };

  const handleLiveChat = () => {
    Alert.alert('Live Chat', 'Live chat feature will be available soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Customer Service</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Contact Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          
          <TouchableOpacity style={styles.contactOption} onPress={handleLiveChat}>
            <View style={styles.contactOptionLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#10b981' }]}>
                <Ionicons name="chatbubble-ellipses" size={20} color="#ffffff" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>Live Chat</Text>
                <Text style={styles.contactDescription}>Get instant help from our team</Text>
              </View>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Online</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactOption} onPress={handlePhoneCall}>
            <View style={styles.contactOptionLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#1f2937' }]}>
                <Ionicons name="call" size={20} color="#ffffff" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>Phone Support</Text>
                <Text style={styles.contactDescription}>+1-800-HOSTEL-1</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactOption} onPress={handleEmail}>
            <View style={styles.contactOptionLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#f59e0b' }]}>
                <Ionicons name="mail" size={20} color="#ffffff" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>Email Support</Text>
                <Text style={styles.contactDescription}>support@hostelapp.com</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
          </TouchableOpacity>
        </View>

        {/* Send Message Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Send us a Message</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Subject</Text>
            <TextInput
              style={styles.textInput}
              value={subject}
              onChangeText={setSubject}
              placeholder="What can we help you with?"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={[styles.textInput, styles.messageInput]}
              value={message}
              onChangeText={setMessage}
              placeholder="Describe your issue or question..."
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Ionicons name="send" size={20} color="#ffffff" />
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Operating Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Operating Hours</Text>
          
          <View style={styles.hoursContainer}>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Monday - Friday</Text>
              <Text style={styles.timeText}>9:00 AM - 8:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Saturday</Text>
              <Text style={styles.timeText}>10:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Sunday</Text>
              <Text style={styles.timeText}>10:00 AM - 4:00 PM</Text>
            </View>
          </View>
          
          <Text style={styles.timezoneText}>All times in PST (Pacific Standard Time)</Text>
        </View>

        {/* FAQ Link */}
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.faqLink}
            onPress={() => navigation.navigate('FAQScreen')}
          >
            <Ionicons name="help-circle" size={20} color="#1f2937" />
            <Text style={styles.faqLinkText}>Check our FAQ for quick answers</Text>
            <Ionicons name="chevron-forward" size={16} color="#1f2937" />
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
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  contactOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
  },
  contactOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  contactDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusBadge: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    fontSize: 16,
    color: '#1f2937',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2937',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 8,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  hoursContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  timeText: {
    fontSize: 16,
    color: '#6b7280',
  },
  timezoneText: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 12,
  },
  faqLink: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  faqLinkText: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '500',
    flex: 1,
    marginLeft: 8,
  },
});

export default CustomerServiceScreen;