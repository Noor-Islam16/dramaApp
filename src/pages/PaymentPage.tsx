import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../assets/images';
import {RootStackParamList} from '../../App';

const {width, height} = Dimensions.get('window');
const scaleFactor = width / 375;

interface BookingDetails {
  showName: string;
  date: string;
  time: string;
  venue: string;
  selectedSeats: string[];
  amount: number;
}

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;

interface PaymentProps {
  route: PaymentScreenRouteProp;
}

const PaymentPage: React.FC<PaymentProps> = ({route}) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [activeTab, setActiveTab] = useState('UPI');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {bookingDetails} = route.params;

  useEffect(() => {
    if (timeLeft <= 0) {
      Alert.alert(
        'Session Expired',
        'Your payment session has expired. Please try booking again.',
        [{text: 'OK', onPress: () => navigation.goBack()}],
      );
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigation]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePayment = () => {
    const upiLink = `upi://pay?pa=raysonali115-3@okhdfcbank&pn=Theater%20Booking&am=${
      bookingDetails?.amount || 0
    }&cu=INR&tn=Booking%20for%20${encodeURIComponent(
      bookingDetails?.showName || '',
    )}%20-%20${encodeURIComponent(
      bookingDetails?.selectedSeats?.join(', ') || '',
    )}`;
    Linking.openURL(upiLink).catch(() => Alert.alert('Failed to open UPI app'));
  };

  const handleWhatsApp = () => {
    const message = `Booking Details:

Show Name: ${bookingDetails?.showName || ''}
Date: ${bookingDetails?.date || ''}
Time: ${bookingDetails?.time || ''}
Selected Seats: ${bookingDetails?.selectedSeats?.join(', ') || ''}

Share your confirmation screenshot`;

    Linking.openURL(
      `https://wa.me/9836365640?text=${encodeURIComponent(message)}`,
    ).catch(() => Alert.alert('Failed to open WhatsApp'));
  };

  return (
    <>
      {/* <StatusBar backgroundColor="#e23d40" barStyle="light-content" /> */}
      <LinearGradient
        colors={['#e23d40', '#d01e1e']}
        style={styles.headerGradient}>
        <View style={styles.headerContent}>
          <IconButton
            icon="arrow-left"
            iconColor="#fff"
            size={24 * scaleFactor}
            onPress={() => {
              Alert.alert(
                'Cancel Payment',
                'Are you sure you want to cancel this booking?',
                [
                  {text: 'No', style: 'cancel'},
                  {text: 'Yes', onPress: () => navigation.goBack()},
                ],
              );
            }}
          />
          <Text style={styles.headerTitle}>Complete Your Payment</Text>
          <View style={styles.timerContainer}>
            <IconButton
              icon="clock-outline"
              iconColor="#fff"
              size={18 * scaleFactor}
              style={{margin: 0}}
            />
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.container}>
        {/* Movie Booking Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.movieInfoContainer}>
            <View style={styles.posterPlaceholder}>
              <Text style={styles.posterText}>
                {(bookingDetails?.showName || '').substring(0, 2).toUpperCase()}
              </Text>
            </View>
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {bookingDetails?.showName || 'Movie Name'}
              </Text>
              <Text style={styles.venueText}>
                {bookingDetails?.venue || 'Theater Name'}
              </Text>
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeLabel}>DATE</Text>
                  <Text style={styles.dateTimeValue}>
                    {bookingDetails?.date || 'Date'}
                  </Text>
                </View>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeLabel}>TIME</Text>
                  <Text style={styles.dateTimeValue}>
                    {bookingDetails?.time || 'Time'}
                  </Text>
                </View>
                <View style={styles.dateTimeItem}>
                  <Text style={styles.dateTimeLabel}>SEATS</Text>
                  <Text style={styles.dateTimeValue} numberOfLines={1}>
                    {bookingDetails?.selectedSeats?.length || '0'} Tickets
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.ticketInfoContainer}>
            <View style={styles.ticketRow}>
              <Text style={styles.ticketLabel}>Tickets</Text>
              <Text style={styles.ticketValue}>
                {bookingDetails?.selectedSeats?.join(', ') || 'A1, B2'}
              </Text>
            </View>
            <View style={styles.ticketRow}>
              <Text style={styles.ticketLabel}>Subtotal</Text>
              <Text style={styles.ticketValue}>
                ₹{bookingDetails?.amount || '0'}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Amount Payable</Text>
              <Text style={styles.totalValue}>
                ₹{bookingDetails?.amount || '0'}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method Section */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>

          <View style={styles.paymentTabsContainer}>
            <TouchableOpacity
              style={[
                styles.paymentTab,
                activeTab === 'UPI' && styles.activePaymentTab,
              ]}
              onPress={() => setActiveTab('UPI')}>
              <Text
                style={[
                  styles.paymentTabText,
                  activeTab === 'UPI' && styles.activePaymentTabText,
                ]}>
                UPI
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentTab,
                activeTab === 'Cards' && styles.activePaymentTab,
              ]}
              onPress={() => setActiveTab('Cards')}>
              <Text
                style={[
                  styles.paymentTabText,
                  activeTab === 'Cards' && styles.activePaymentTabText,
                ]}>
                Cards
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentTab,
                activeTab === 'Wallet' && styles.activePaymentTab,
              ]}
              onPress={() => setActiveTab('Wallet')}>
              <Text
                style={[
                  styles.paymentTabText,
                  activeTab === 'Wallet' && styles.activePaymentTabText,
                ]}>
                Wallet
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'UPI' && (
            <View style={styles.upiContainer}>
              <Text style={styles.qrTitle}>Scan QR Code to Pay</Text>
              <View style={styles.qrCard}>
                <TouchableOpacity
                  onPress={handlePayment}
                  style={styles.qrContainer}>
                  <Image
                    source={images.qrcode}
                    style={styles.qrCode}
                    resizeMode="contain"
                  />
                  <View style={styles.qrOverlay}>
                    <Text style={styles.qrOverlayText}>Tap to Pay</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.upiIdContainer}>
                <Text style={styles.upiIdLabel}>UPI ID:</Text>
                <Text style={styles.upiIdValue}>raysonali115-3@okhdfcbank</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <IconButton
                    icon="content-copy"
                    size={16 * scaleFactor}
                    iconColor="#e23d40"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {activeTab !== 'UPI' && (
            <View style={styles.otherPaymentMethodContainer}>
              <Text style={styles.comingSoonText}>
                {activeTab} payment option coming soon!
              </Text>
              <Text style={styles.useUpiText}>
                Please use UPI for now to complete your booking.
              </Text>
            </View>
          )}
        </View>

        {/* WhatsApp Verification Section */}
        <LinearGradient
          colors={['#128C7E', '#075E54']}
          style={styles.whatsappContainer}>
          <View style={styles.whatsappContent}>
            <IconButton
              icon="whatsapp"
              size={32 * scaleFactor}
              iconColor="#fff"
              style={styles.whatsappIcon}
            />
            <View style={styles.whatsappTextContainer}>
              <Text style={styles.whatsappTitle}>
                Verify Payment on WhatsApp
              </Text>
              <Text style={styles.whatsappDescription}>
                After payment, share screenshot on WhatsApp for instant ticket
                delivery
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={handleWhatsApp}>
            <Text style={styles.whatsappButtonText}>Verify Now</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Support Info */}
        <View style={styles.supportContainer}>
          <Text style={styles.supportText}>
            Need help? Contact support at support@theaterapp.com
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    // paddingTop: StatusBar.currentHeight,
  },
  headerGradient: {
    paddingTop: StatusBar.currentHeight,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18 * scaleFactor,
    fontWeight: 'bold',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 16 * scaleFactor,
    paddingHorizontal: 4 * scaleFactor,
  },
  timerText: {
    color: '#fff',
    fontSize: 14 * scaleFactor,
    fontWeight: 'bold',
    marginRight: 8 * scaleFactor,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12 * scaleFactor,
    margin: 12 * scaleFactor,
    padding: 16 * scaleFactor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginBottom: 16 * scaleFactor,
  },
  posterPlaceholder: {
    width: 70 * scaleFactor,
    height: 100 * scaleFactor,
    backgroundColor: '#e23d40',
    borderRadius: 8 * scaleFactor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterText: {
    color: '#fff',
    fontSize: 24 * scaleFactor,
    fontWeight: 'bold',
  },
  movieDetails: {
    flex: 1,
    marginLeft: 12 * scaleFactor,
  },
  movieTitle: {
    fontSize: 18 * scaleFactor,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4 * scaleFactor,
  },
  venueText: {
    fontSize: 14 * scaleFactor,
    color: '#666',
    marginBottom: 8 * scaleFactor,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8 * scaleFactor,
  },
  dateTimeItem: {
    flex: 1,
  },
  dateTimeLabel: {
    fontSize: 12 * scaleFactor,
    color: '#999',
  },
  dateTimeValue: {
    fontSize: 14 * scaleFactor,
    color: '#333',
    fontWeight: '500',
  },
  ticketInfoContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8 * scaleFactor,
    padding: 12 * scaleFactor,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8 * scaleFactor,
  },
  ticketLabel: {
    fontSize: 14 * scaleFactor,
    color: '#666',
  },
  ticketValue: {
    fontSize: 14 * scaleFactor,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8 * scaleFactor,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4 * scaleFactor,
  },
  totalLabel: {
    fontSize: 16 * scaleFactor,
    color: '#222',
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 16 * scaleFactor,
    color: '#e23d40',
    fontWeight: 'bold',
  },
  paymentSection: {
    backgroundColor: '#fff',
    borderRadius: 12 * scaleFactor,
    margin: 12 * scaleFactor,
    padding: 16 * scaleFactor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18 * scaleFactor,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16 * scaleFactor,
  },
  paymentTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16 * scaleFactor,
  },
  paymentTab: {
    flex: 1,
    paddingVertical: 12 * scaleFactor,
    alignItems: 'center',
    borderRadius: 8 * scaleFactor,
    backgroundColor: '#f3f3f3',
    marginHorizontal: 4 * scaleFactor,
  },
  activePaymentTab: {
    backgroundColor: '#e23d40',
  },
  paymentTabText: {
    fontSize: 14 * scaleFactor,
    color: '#666',
    fontWeight: '500',
  },
  activePaymentTabText: {
    color: '#fff',
  },
  upiContainer: {
    alignItems: 'center',
  },
  qrTitle: {
    fontSize: 16 * scaleFactor,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 12 * scaleFactor,
  },
  qrCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12 * scaleFactor,
    padding: 16 * scaleFactor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCode: {
    width: 200 * scaleFactor,
    height: 200 * scaleFactor,
  },
  qrOverlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4 * scaleFactor,
    paddingHorizontal: 8 * scaleFactor,
    borderRadius: 4 * scaleFactor,
  },
  qrOverlayText: {
    color: '#fff',
    fontSize: 12 * scaleFactor,
    fontWeight: '500',
  },
  upiIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16 * scaleFactor,
  },
  upiIdLabel: {
    fontSize: 14 * scaleFactor,
    color: '#666',
    marginRight: 8 * scaleFactor,
  },
  upiIdValue: {
    fontSize: 14 * scaleFactor,
    color: '#333',
    fontWeight: '500',
  },
  copyButton: {
    marginLeft: 8 * scaleFactor,
  },
  otherPaymentMethodContainer: {
    alignItems: 'center',
    paddingVertical: 24 * scaleFactor,
  },
  comingSoonText: {
    fontSize: 16 * scaleFactor,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 8 * scaleFactor,
  },
  useUpiText: {
    fontSize: 14 * scaleFactor,
    color: '#666',
  },
  whatsappContainer: {
    borderRadius: 12 * scaleFactor,
    margin: 12 * scaleFactor,
    padding: 16 * scaleFactor,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whatsappContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappIcon: {
    marginRight: 12 * scaleFactor,
  },
  whatsappTextContainer: {
    flex: 1,
  },
  whatsappTitle: {
    fontSize: 16 * scaleFactor,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4 * scaleFactor,
  },
  whatsappDescription: {
    fontSize: 14 * scaleFactor,
    color: '#fff',
  },
  whatsappButton: {
    backgroundColor: '#fff',
    borderRadius: 8 * scaleFactor,
    paddingVertical: 8 * scaleFactor,
    paddingHorizontal: 16 * scaleFactor,
    marginTop: 8 * scaleFactor,
  },
  whatsappButtonText: {
    fontSize: 14 * scaleFactor,
    color: '#075E54',
    fontWeight: 'bold',
  },
  supportContainer: {
    alignItems: 'center',
    marginTop: 16 * scaleFactor,
    marginBottom: 24 * scaleFactor,
  },
  supportText: {
    fontSize: 14 * scaleFactor,
    color: '#666',
  },
});

export default PaymentPage;
