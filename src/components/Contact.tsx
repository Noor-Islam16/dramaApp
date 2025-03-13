import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Avatar, Icon} from 'react-native-paper';

interface ContactRowProps {
  icon: string;
  title: string;
  text: string;
  onPress?: () => void;
}

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Banner */}
      <View style={styles.headerBanner}>
        <Text style={styles.headerTitle}>Get in Touch</Text>
        <Text style={styles.headerSubtitle}>
          We're here to help! Whether you have questions about tickets, shows,
          or any other inquiries, our team is ready to assist you.
        </Text>
      </View>

      {/* Contact Information Section */}
      <View style={styles.contentContainer}>
        <ContactRow
          icon="map-marker"
          title="ADDRESS:"
          text="Astra Towers Action Area II, Reckjoani, New Town, West Bengal 700135"
        />
        <ContactRow
          icon="email"
          title="FOR TICKET RELATED QUERY:"
          text="support@alltimeshow.com"
          onPress={() => Linking.openURL('mailto:support@alltimeshow.com')}
        />
        <ContactRow
          icon="globe"
          title="FOR ANY OTHER QUERY & SUGGESTION:"
          text="enquiry@alltimeshow.com"
          onPress={() => Linking.openURL('mailto:enquiry@alltimeshow.com')}
        />
        <ContactRow
          icon="phone"
          title="PHONE:"
          text="+91 9836365640"
          onPress={() => Linking.openURL('tel:+919836365640')}
        />
        <ContactRow
          icon="clock"
          title="BUSINESS HOURS:"
          text="Monday - Saturday: 10:00 AM - 7:00 PM\nSunday: Closed"
        />
      </View>

      {/* Additional Information */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Quick Response Promise</Text>
        <Text style={styles.infoText}>
          We strive to respond to all inquiries within 24 hours during business
          days. For urgent ticket-related queries, please contact our support
          team directly by phone.
        </Text>
      </View>
    </View>
  );
};

const ContactRow: React.FC<ContactRowProps> = ({
  icon,
  title,
  text,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress || undefined}
    disabled={!onPress}
    style={styles.contactRow}>
    <Avatar.Icon size={40} icon={icon} style={styles.iconWrapper} />
    <View style={styles.textContainer}>
      <Text style={styles.contactTitle}>{title}</Text>
      <Text style={styles.contactText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  headerBanner: {backgroundColor: '#333', padding: 20, alignItems: 'center'},
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
  contentContainer: {padding: 20},
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  iconWrapper: {backgroundColor: '#F02831'},
  textContainer: {marginLeft: 15, flex: 1},
  contactTitle: {fontSize: 18, fontWeight: 'bold', color: '#2B2D42'},
  contactText: {fontSize: 16, color: '#555'},
  infoBox: {
    padding: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B2D42',
    marginBottom: 10,
  },
  infoText: {fontSize: 16, color: '#555', textAlign: 'center'},
});

export default ContactScreen;
