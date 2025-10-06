import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const FAQScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How do I book a hostel?",
      answer: "To book a hostel, simply search for your destination, select your dates, choose from available hostels, and complete the booking process with your payment information."
    },
    {
      id: 2,
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking. Cancellation policies vary by hostel. Check the specific cancellation policy for your booking in the 'My Bookings' section."
    },
    {
      id: 3,
      question: "How do I contact the hostel?",
      answer: "You can contact the hostel directly through the contact information provided in your booking confirmation, or use the in-app messaging feature."
    },
    {
      id: 4,
      question: "What payment methods are accepted?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express), debit cards, and digital wallets like PayPal and Apple Pay."
    },
    {
      id: 5,
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal and payment information. Your data is never shared without your consent."
    },
    {
      id: 6,
      question: "How do I leave a review?",
      answer: "After your stay, you'll receive a notification to leave a review. You can also access the review option in your booking history in the 'My Bookings' section."
    },
    {
      id: 7,
      question: "What if I need to modify my booking?",
      answer: "You can modify your booking depending on the hostel's policy. Go to 'My Bookings' and select the booking you want to modify. Some changes may incur additional fees."
    },
    {
      id: 8,
      question: "How do I add a hostel to my favorites?",
      answer: "Tap the heart icon on any hostel listing to add it to your favorites. You can view all your favorite hostels in the 'Likes' section."
    }
  ];

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FAQ</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={16} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search FAQ..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* FAQ Items */}
        <View style={styles.faqContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          {filteredFAQs.map((item) => (
            <View key={item.id} style={styles.faqItem}>
              <TouchableOpacity 
                style={styles.questionContainer}
                onPress={() => toggleExpand(item.id)}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Ionicons 
                  name={expandedItems[item.id] ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="#6b7280" 
                />
              </TouchableOpacity>
              
              {expandedItems[item.id] && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answerText}>{item.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Still need help?</Text>
          <Text style={styles.contactDescription}>
            Can't find what you're looking for? Our support team is here to help.
          </Text>
          
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => navigation.navigate('CustomerServiceScreen')}
          >
            <Ionicons name="chatbubble-ellipses" size={20} color="#ffffff" />
            <Text style={styles.contactButtonText}>Contact Support</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  faqContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  faqItem: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    flex: 1,
    marginRight: 12,
  },
  answerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  answerText: {
    fontSize: 15,
    color: '#6b7280',
    lineHeight: 22,
    marginTop: 12,
  },
  contactSection: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 32,
  },
  contactDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
});

export default FAQScreen;