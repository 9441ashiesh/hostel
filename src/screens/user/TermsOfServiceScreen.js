import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import UserLayout from '../../components/layout/UserLayout';

const TermsOfServiceScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <UserLayout navigation={navigation} activeTab="profile">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Terms of Service</Text>
          </View>
          <View style={styles.headerRight} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Header Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.headerIcon}>📋</Text>
            <Text style={styles.lastUpdated}>Last updated: March 1, 2024</Text>
            <Text style={styles.intro}>
              Welcome to HostelApp! These Terms of Service govern your use of our platform. 
              By using our service, you agree to be bound by these terms.
            </Text>
          </View>

          {/* Terms Sections */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. 🏠 Acceptance of Terms</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                By accessing or using HostelApp, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these 
                terms, you are prohibited from using or accessing this service.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. 📱 Service Description</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                HostelApp is a platform that connects travelers with hostel accommodations. 
                We provide:
              </Text>
              <Text style={styles.bulletPoint}>• Hostel search and booking services</Text>
              <Text style={styles.bulletPoint}>• User reviews and ratings</Text>
              <Text style={styles.bulletPoint}>• Payment processing facilities</Text>
              <Text style={styles.bulletPoint}>• Customer support services</Text>
              <Text style={styles.bulletPoint}>• Travel planning tools</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. 👤 User Accounts</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                To use certain features of our service, you must create an account. You agree to:
              </Text>
              <Text style={styles.bulletPoint}>• Provide accurate and complete information</Text>
              <Text style={styles.bulletPoint}>• Maintain the security of your account credentials</Text>
              <Text style={styles.bulletPoint}>• Update your information when necessary</Text>
              <Text style={styles.bulletPoint}>• Be responsible for all activities under your account</Text>
              <Text style={styles.bulletPoint}>• Notify us of any unauthorized access</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. 📋 Booking Terms</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.subsectionTitle}>Booking Process:</Text>
              <Text style={styles.bulletPoint}>• All bookings are subject to availability</Text>
              <Text style={styles.bulletPoint}>• Confirmation is required from the hostel</Text>
              <Text style={styles.bulletPoint}>• Payment is processed securely through our platform</Text>
              
              <Text style={styles.subsectionTitle}>Cancellation Policy:</Text>
              <Text style={styles.bulletPoint}>• Cancellation terms vary by hostel</Text>
              <Text style={styles.bulletPoint}>• Refunds are subject to the hostel's policy</Text>
              <Text style={styles.bulletPoint}>• Cancellation fees may apply</Text>
              
              <Text style={styles.subsectionTitle}>Check-in Requirements:</Text>
              <Text style={styles.bulletPoint}>• Valid government-issued ID required</Text>
              <Text style={styles.bulletPoint}>• Age restrictions may apply</Text>
              <Text style={styles.bulletPoint}>• Additional fees may be collected at check-in</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. 💳 Payment Terms</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                By making a booking, you agree to:
              </Text>
              <Text style={styles.bulletPoint}>• Pay all charges associated with your booking</Text>
              <Text style={styles.bulletPoint}>• Provide valid payment information</Text>
              <Text style={styles.bulletPoint}>• Accept responsibility for all charges on your account</Text>
              <Text style={styles.bulletPoint}>• Pay any applicable taxes and fees</Text>
              <Text style={styles.bulletPoint}>• Comply with our refund and cancellation policies</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. 📝 User Conduct</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                You agree not to:
              </Text>
              <Text style={styles.bulletPoint}>• Use the service for unlawful purposes</Text>
              <Text style={styles.bulletPoint}>• Violate any local, state, or international laws</Text>
              <Text style={styles.bulletPoint}>• Impersonate another person or entity</Text>
              <Text style={styles.bulletPoint}>• Upload malicious software or content</Text>
              <Text style={styles.bulletPoint}>• Interfere with the service's operation</Text>
              <Text style={styles.bulletPoint}>• Collect user information without consent</Text>
              <Text style={styles.bulletPoint}>• Post false or misleading reviews</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. 🔒 Privacy and Data</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </Text>
              <Text style={styles.bulletPoint}>• We collect information to provide our services</Text>
              <Text style={styles.bulletPoint}>• We protect your data with industry-standard security</Text>
              <Text style={styles.bulletPoint}>• We may share data with hostel partners as needed</Text>
              <Text style={styles.bulletPoint}>• You can control your privacy settings</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>8. 📋 Intellectual Property</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                The service and its content are protected by intellectual property laws. You agree that:
              </Text>
              <Text style={styles.bulletPoint}>• We own all rights to the HostelApp platform</Text>
              <Text style={styles.bulletPoint}>• You may not copy or modify our content</Text>
              <Text style={styles.bulletPoint}>• You grant us rights to use content you submit</Text>
              <Text style={styles.bulletPoint}>• You will respect third-party intellectual property</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>9. ⚠️ Disclaimers and Limitations</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                Our service is provided "as is" without warranties. We are not liable for:
              </Text>
              <Text style={styles.bulletPoint}>• Hostel service quality or availability</Text>
              <Text style={styles.bulletPoint}>• Third-party actions or omissions</Text>
              <Text style={styles.bulletPoint}>• Technical issues or service interruptions</Text>
              <Text style={styles.bulletPoint}>• Lost data or unauthorized access</Text>
              <Text style={styles.bulletPoint}>• Indirect or consequential damages</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>10. 🔄 Modifications</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We reserve the right to modify these terms at any time. We will notify users 
                of material changes through the app or email. Continued use after changes 
                constitutes acceptance of the new terms.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>11. ⚖️ Dispute Resolution</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                Any disputes arising from these terms will be resolved through:
              </Text>
              <Text style={styles.bulletPoint}>• Good faith negotiation first</Text>
              <Text style={styles.bulletPoint}>• Binding arbitration if needed</Text>
              <Text style={styles.bulletPoint}>• Applicable laws of our jurisdiction</Text>
              <Text style={styles.bulletPoint}>• Individual basis (no class actions)</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>12. 🚪 Termination</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We may terminate or suspend your account at any time for:
              </Text>
              <Text style={styles.bulletPoint}>• Violation of these terms</Text>
              <Text style={styles.bulletPoint}>• Fraudulent or illegal activity</Text>
              <Text style={styles.bulletPoint}>• Extended inactivity</Text>
              <Text style={styles.bulletPoint}>• At our sole discretion</Text>
              
              <Text style={styles.description}>
                You may terminate your account at any time by contacting us or using 
                the account deletion feature in the app.
              </Text>
            </View>
          </View>

          {/* Contact Section */}
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>📧 Contact Information</Text>
            <Text style={styles.contactText}>
              If you have questions about these Terms of Service, please contact us:
            </Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactItem}>📧 Email: legal@hostelapp.com</Text>
              <Text style={styles.contactItem}>📞 Phone: +1 (555) 123-4567</Text>
              <Text style={styles.contactItem}>📍 Address: 123 Terms St, New York, NY 10001</Text>
              <Text style={styles.contactItem}>🌐 Website: www.hostelapp.com</Text>
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </UserLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#4A90E2',
    elevation: 4,
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    width: 44,
    height: 44,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  intro: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  sectionContent: {
    gap: 8,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginTop: 12,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 4,
  },
  contactSection: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 16,
  },
  contactInfo: {
    gap: 8,
  },
  contactItem: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  bottomSpace: {
    height: 100,
  },
});

export default TermsOfServiceScreen;
