import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import MerchantLayout from '../../components/layout/MerchantLayout';

const PhotosVideos = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUploadPhoto = () => {
    // Handle photo upload logic
    Alert.alert('Photo Upload', 'Photo upload functionality will be implemented here');
  };

  const handleUploadVideo = () => {
    // Handle video upload logic
    Alert.alert('Video Upload', 'Video upload functionality will be implemented here');
  };

  const handleContinue = () => {
    // Handle continue logic
    console.log('Photos:', photos.length, 'Videos:', videos.length);
    // Navigate to next step
  };

  return (
    <MerchantLayout navigation={navigation} currentRoute="PhotosVideos">
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Photos & Videos</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Upload photos and videos of your property</Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Photos Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Property Photos</Text>
              <Text style={styles.sectionCount}>({photos.length}/20)</Text>
            </View>
            <Text style={styles.sectionSubtitle}>
              Add high-quality photos to showcase your property
            </Text>

            <View style={styles.uploadGrid}>
              {/* Upload Photo Button */}
              <TouchableOpacity 
                style={styles.uploadButton}
                onPress={handleUploadPhoto}
              >
                <View style={styles.uploadIconContainer}>
                  <Text style={styles.uploadIcon}>📷</Text>
                </View>
                <Text style={styles.uploadText}>Upload Photo</Text>
                <Text style={styles.uploadSubtext}>JPG, PNG up to 10MB</Text>
              </TouchableOpacity>

              {/* Sample uploaded photos placeholder */}
              {photos.map((photo, index) => (
                <View key={index} style={styles.mediaItem}>
                  <Image source={{ uri: photo.uri }} style={styles.mediaImage} />
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => {
                      const newPhotos = photos.filter((_, i) => i !== index);
                      setPhotos(newPhotos);
                    }}
                  >
                    <Text style={styles.deleteIcon}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Videos Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Property Videos</Text>
              <Text style={styles.sectionCount}>({videos.length}/5)</Text>
            </View>
            <Text style={styles.sectionSubtitle}>
              Add videos to give guests a virtual tour
            </Text>

            <View style={styles.uploadGrid}>
              {/* Upload Video Button */}
              <TouchableOpacity 
                style={styles.uploadButton}
                onPress={handleUploadVideo}
              >
                <View style={styles.uploadIconContainer}>
                  <Text style={styles.uploadIcon}>🎥</Text>
                </View>
                <Text style={styles.uploadText}>Upload Video</Text>
                <Text style={styles.uploadSubtext}>MP4, MOV up to 50MB</Text>
              </TouchableOpacity>

              {/* Sample uploaded videos placeholder */}
              {videos.map((video, index) => (
                <View key={index} style={styles.mediaItem}>
                  <View style={styles.videoThumbnail}>
                    <Text style={styles.playIcon}>▶️</Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => {
                      const newVideos = videos.filter((_, i) => i !== index);
                      setVideos(newVideos);
                    }}
                  >
                    <Text style={styles.deleteIcon}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Guidelines Section */}
          <View style={styles.guidelinesSection}>
            <Text style={styles.guidelinesTitle}>Photo & Video Guidelines</Text>
            
            <View style={styles.guideline}>
              <Text style={styles.guidelineIcon}>✓</Text>
              <Text style={styles.guidelineText}>High resolution and well-lit images</Text>
            </View>
            
            <View style={styles.guideline}>
              <Text style={styles.guidelineIcon}>✓</Text>
              <Text style={styles.guidelineText}>Show all rooms and common areas</Text>
            </View>
            
            <View style={styles.guideline}>
              <Text style={styles.guidelineIcon}>✓</Text>
              <Text style={styles.guidelineText}>Include exterior and surrounding area</Text>
            </View>
            
            <View style={styles.guideline}>
              <Text style={styles.guidelineIcon}>✓</Text>
              <Text style={styles.guidelineText}>Avoid blurry or dark images</Text>
            </View>
            
            <View style={styles.guideline}>
              <Text style={styles.guidelineIcon}>✓</Text>
              <Text style={styles.guidelineText}>Videos should be 30 seconds to 2 minutes</Text>
            </View>
          </View>

          {/* Bottom Space */}
          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity 
            style={styles.backBottomButton}
            onPress={handleBack}
          >
            <Text style={styles.backBottomButtonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </MerchantLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E40AF',
    borderBottomWidth: 1,
    borderBottomColor: '#1E40AF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  
  // Subtitle
  subtitleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Content
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  sectionCount: {
    fontSize: 16,
    color: '#FF5722',
    fontWeight: '600',
    marginLeft: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  
  // Upload Grid
  uploadGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  uploadButton: {
    width: '48%',
    height: 120,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  uploadIconContainer: {
    marginBottom: 8,
  },
  uploadIcon: {
    fontSize: 32,
    color: '#6B7280',
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  
  // Media Items
  mediaItem: {
    width: '48%',
    height: 120,
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  playIcon: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  
  // Guidelines Section
  guidelinesSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  guidelinesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  guideline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  guidelineIcon: {
    fontSize: 16,
    color: '#10B981',
    marginRight: 12,
    fontWeight: '600',
  },
  guidelineText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  
  // Bottom Space
  bottomSpace: {
    height: 100,
  },
  
  // Bottom Buttons
  bottomButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  backBottomButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF5722',
  },
  continueButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default PhotosVideos;
