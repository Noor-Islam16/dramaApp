import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Icon} from 'react-native-paper';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <LinearGradient colors={['#333', '#111']} style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to All Time Show</Text>
        <Text style={styles.heroSubtitle}>
          Bringing the magic of Bengali theater to your fingertips
        </Text>
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        {/* Mission Statement */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            All Time Show is a premier online platform dedicated to the vibrant
            theater scene in Kolkata. Our mission is to make the rich cultural
            heritage of Bengali theater accessible to everyone.
          </Text>
        </View>

        {/* Features Grid */}
        <View style={styles.featureGrid}>
          <FeatureBox
            icon="account-group"
            title="Community Focused"
            text="Building bridges between theater enthusiasts and the performing arts community."
          />
          <FeatureBox
            icon="thumb-up"
            title="User Friendly"
            text="Easy-to-use platform for discovering and booking your favorite shows."
          />
          <FeatureBox
            icon="theater"
            title="Cultural Heritage"
            text="Preserving and promoting the rich tradition of Bengali theater."
          />
        </View>

        {/* About Content */}
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.sectionText}>
            Based in the heart of New Town, Kolkata, at Astra Towers, All Time
            Show serves as a bridge between theater enthusiasts and the city's
            dynamic performing arts community.
          </Text>
          <Text style={styles.sectionText}>
            Our user-friendly website offers up-to-date information on upcoming
            shows, venues, and ticket availability.
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <ContactRow
            icon="map-marker"
            text="Astra Towers, New Town, Kolkata, WB 700135"
            onPress={null}
          />
          <ContactRow
            icon="email"
            text="support@alltimeshow.com"
            onPress={() => Linking.openURL('mailto:support@alltimeshow.com')}
          />
          <ContactRow
            icon="phone"
            text="+91 9836365640"
            onPress={() => Linking.openURL('tel:+919836365640')}
          />
        </View>

        {/* Vision Statement */}
        <LinearGradient
          colors={['#2B2D42', '#1A1C2A']}
          style={styles.visionBox}>
          <Text style={styles.visionTitle}>Our Vision</Text>
          <Text style={styles.visionText}>
            At All Time Show, we believe in the transformative power of theater
            and are passionate about fostering a thriving cultural landscape in
            Kolkata.
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

// Feature Box Component
const FeatureBox = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <View style={styles.featureBox}>
    <Avatar.Icon size={50} icon={icon} style={styles.featureIconWrapper} />
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

// Contact Row Component
const ContactRow = ({
  icon,
  text,
  onPress,
}: {
  icon: string;
  text: string;
  onPress: (() => void) | null;
}) => (
  <TouchableOpacity
    onPress={onPress || undefined}
    disabled={!onPress}
    style={styles.contactRow}>
    <Icon source={icon} size={20} color="#F02831" />
    <Text style={styles.contactText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  heroSection: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
  contentWrapper: {padding: 20},
  sectionContainer: {marginBottom: 30, alignItems: 'center'},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B2D42',
    marginBottom: 10,
  },
  sectionText: {fontSize: 16, textAlign: 'center', color: '#555'},
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureBox: {
    width: '48%',
    padding: 15,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIconWrapper: {backgroundColor: '#F02831'},
  featureTitle: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
  featureText: {fontSize: 14, textAlign: 'center', color: '#555'},
  aboutContainer: {marginBottom: 30},
  contactBox: {
    padding: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginBottom: 30,
  },
  contactTitle: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  contactRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  contactText: {fontSize: 16, color: '#555', marginLeft: 10},
  visionBox: {padding: 20, borderRadius: 10, alignItems: 'center'},
  visionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  visionText: {fontSize: 16, color: '#ccc', textAlign: 'center'},
});

export default AboutScreen;
