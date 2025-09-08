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

const PrivacyPolicyScreen = ({ navigation }) => {
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
            <Text style={styles.headerTitle}>Privacy Policy</Text>
          </View>
          <View style={styles.headerRight} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Header Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.headerIcon}>🔒</Text>
            <Text style={styles.lastUpdated}>Last updated: March 1, 2024</Text>
            <Text style={styles.intro}>
              We value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </Text>
          </View>

          {/* Privacy Sections */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Information We Collect</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.subsectionTitle}>Personal Information:</Text>
              <Text style={styles.bulletPoint}>• Name, email address, and phone number</Text>
              <Text style={styles.bulletPoint}>• Profile photos and preferences</Text>
              <Text style={styles.bulletPoint}>• Payment information (processed securely)</Text>
              
              <Text style={styles.subsectionTitle}>Usage Information:</Text>
              <Text style={styles.bulletPoint}>• App usage patterns and preferences</Text>
              <Text style={styles.bulletPoint}>• Search history and booking data</Text>
              <Text style={styles.bulletPoint}>• Device information and location data</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎯 How We Use Your Information</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.bulletPoint}>• Provide and improve our services</Text>
              <Text style={styles.bulletPoint}>• Process bookings and payments</Text>
              <Text style={styles.bulletPoint}>• Send important updates and notifications</Text>
              <Text style={styles.bulletPoint}>• Personalize your experience</Text>
              <Text style={styles.bulletPoint}>• Ensure platform safety and security</Text>
              <Text style={styles.bulletPoint}>• Comply with legal requirements</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🤝 Information Sharing</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We do not sell your personal information. We may share your information only in these circumstances:
              </Text>
              <Text style={styles.bulletPoint}>• With hostel partners to facilitate bookings</Text>
              <Text style={styles.bulletPoint}>• With payment processors for transactions</Text>
              <Text style={styles.bulletPoint}>• When required by law or legal process</Text>
              <Text style={styles.bulletPoint}>• To protect our rights and safety</Text>
              <Text style={styles.bulletPoint}>• With your explicit consent</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔐 Data Security</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We implement industry-standard security measures to protect your information:
              </Text>
              <Text style={styles.bulletPoint}>• SSL encryption for data transmission</Text>
              <Text style={styles.bulletPoint}>• Secure servers and databases</Text>
              <Text style={styles.bulletPoint}>• Regular security audits and updates</Text>
              <Text style={styles.bulletPoint}>• Limited access to personal information</Text>
              <Text style={styles.bulletPoint}>• Payment data encryption and compliance</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🍪 Cookies and Tracking</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We use cookies and similar technologies to:
              </Text>
              <Text style={styles.bulletPoint}>• Remember your preferences and settings</Text>
              <Text style={styles.bulletPoint}>• Analyze app performance and usage</Text>
              <Text style={styles.bulletPoint}>• Provide personalized recommendations</Text>
              <Text style={styles.bulletPoint}>• Improve our services and features</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚙️ Your Rights and Choices</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>You have the right to:</Text>
              <Text style={styles.bulletPoint}>• Access and review your personal information</Text>
              <Text style={styles.bulletPoint}>• Update or correct your data</Text>
              <Text style={styles.bulletPoint}>• Delete your account and data</Text>
              <Text style={styles.bulletPoint}>• Opt-out of marketing communications</Text>
              <Text style={styles.bulletPoint}>• Control location and notification permissions</Text>
              <Text style={styles.bulletPoint}>• Request data portability</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👶 Children's Privacy</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                Our service is not intended for children under 13. We do not knowingly collect 
                personal information from children under 13. If we discover that we have collected 
                information from a child under 13, we will delete it immediately.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🌍 International Transfers</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                Your information may be transferred to and processed in countries other than 
                your own. We ensure appropriate safeguards are in place to protect your 
                information in accordance with this Privacy Policy.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Policy Updates</Text>
            <View style={styles.sectionContent}>
              <Text style={styles.description}>
                We may update this Privacy Policy from time to time. We will notify you of 
                any material changes by posting the new Privacy Policy in the app and 
                updating the "Last updated" date.
              </Text>
            </View>
          </View>

          {/* Contact Section */}
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>📧 Contact Us</Text>
            <Text style={styles.contactText}>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactItem}>📧 Email: privacy@hostelapp.com</Text>
              <Text style={styles.contactItem}>📞 Phone: +1 (555) 123-4567</Text>
              <Text style={styles.contactItem}>📍 Address: 123 Privacy St, New York, NY 10001</Text>
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

export default PrivacyPolicyScreen;
