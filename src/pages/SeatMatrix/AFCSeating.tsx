import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const scaleFactor = width / 375;

interface SeatType {
  id: string;
  row: string;
  number: number;
  category: 'diamond' | 'gold' | 'balcony';
  status: 'available' | 'selected' | 'booked' | 'empty';
}

const rowsLayout = {
  diamond: {
    A: [
      [1, 2, 3, 4, 5],
      [
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25,
      ],
      [26, 27, 28, 29, 30, 31],
    ],
    B: [
      [1, 2, 3, 4, 5, 6, 7],
      [
        8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27,
      ],
      [28, 29, 30, 31, 32, 33, 34],
    ],
    C: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [
        9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28,
      ],
      [29, 30, 31, 32, 33, 34, 35, 36],
    ],
  },
  gold: {
    D: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29,
      ],
      [30, 31, 32, 33, 34, 35, 36, 37, 38],
    ],
    E: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29,
      ],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    ],
    F: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30,
      ],
      [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    ],
    G: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30,
      ],
      [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    ],
    H: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30,
      ],
      [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    ],
    I: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    J: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    K: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    L: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    M: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31,
      ],
      [32, 33, 34, 35, 36, 37],
    ],
  },
  balcony: {
    N: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    O: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    P: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32,
      ],
      [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
    ],
    Q: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33,
      ],
      [33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    R: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33,
      ],
      [33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
    S: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
      [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    ],
  },
};

const AFCSeating: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<SeatType[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const selectedShow = useSelector(
    (state: RootState) => state.plays.selectedShow,
  );

  useEffect(() => {
    if (!selectedShow) {
      navigation.navigate('Plays');
    }
  }, [selectedShow, navigation]);

  const categoryPrices = {
    diamond: 300,
    gold: 200,
    balcony: 100,
  };

  const bookedSeats = ['A15'];

  const handleProceedToPayment = async () => {
    try {
      setIsProcessing(true);
      const bookingDetails = {
        showName: selectedShow?.title || '',
        date: selectedShow?.date || '',
        time: selectedShow?.time?.split('-')[0].trim() || '',
        venue: selectedShow?.venue || '',
        selectedSeats: selectedSeats.map(seat => `${seat.row}${seat.number}`),
        amount: totalAmount,
      };
      navigation.navigate('Payment', {bookingDetails});
    } catch (error) {
      console.error('Error proceeding to payment:', error);
      Alert.alert('Error', 'Failed to proceed to payment.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSeatClick = (seat: SeatType) => {
    if (seat.status === 'booked') return;

    const seatIndex = selectedSeats.findIndex(s => s.id === seat.id);
    if (seatIndex > -1) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatColor = (seat: SeatType) => {
    if (seat.status === 'empty') return styles.invisibleSeat;
    if (seat.status === 'booked') {
      switch (seat.category) {
        case 'diamond':
          return styles.bookedDiamondSeat;
        case 'gold':
          return styles.bookedGoldSeat;
        case 'balcony':
          return styles.bookedBalconySeat;
      }
    }
    if (selectedSeats.some(s => s.id === seat.id)) return styles.selectedSeat;

    switch (seat.category) {
      case 'diamond':
        return styles.diamondSeat;
      case 'gold':
        return styles.goldSeat;
      case 'balcony':
        return styles.balconySeat;
      // default:
      //   return styles.defaultSeat;
    }
  };

  const renderSeat = (seat: SeatType) => {
    const seatStatus = bookedSeats.includes(seat.id) ? 'booked' : 'available';

    const seatWithStatus: SeatType = {
      ...seat,
      status: seatStatus,
    };

    return (
      <TouchableOpacity
        key={seat.id}
        onPress={() => handleSeatClick(seatWithStatus)}
        disabled={seatStatus === 'booked'}
        style={[
          styles.seat,
          getSeatColor(seatWithStatus),
          seatStatus === 'booked' && styles.disabledSeat,
        ]}>
        <Text style={styles.seatText}>{seat.number}</Text>
      </TouchableOpacity>
    );
  };
  const renderSection = (category: keyof typeof rowsLayout) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Rs. {categoryPrices[category]} {category.toUpperCase()}
        </Text>
        {Object.entries(rowsLayout[category]).map(([row, sections]) => (
          <View key={row} style={styles.rowContainer}>
            <Text style={styles.rowLabel}>{row}</Text>
            <View style={styles.rowSections}>
              {/* Left Section */}
              <View style={styles.section}>
                {sections[0].map(number => {
                  const seatId = `${row}${number}`;
                  const seat: SeatType = {
                    id: seatId,
                    row,
                    number,
                    category,
                    status: 'available',
                  };
                  return renderSeat(seat);
                })}
              </View>

              {/* Middle Section */}
              <View style={styles.section}>
                {sections[1].map(number => {
                  const seatId = `${row}${number}`;
                  const seat: SeatType = {
                    id: seatId,
                    row,
                    number,
                    category,
                    status: 'available',
                  };
                  return renderSeat(seat);
                })}
              </View>

              {/* Right Section */}
              <View style={styles.section}>
                {sections[2].map(number => {
                  const seatId = `${row}${number}`;
                  const seat: SeatType = {
                    id: seatId,
                    row,
                    number,
                    category,
                    status: 'available',
                  };
                  return renderSeat(seat);
                })}
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  };

  const calculateTotalAmount = () => {
    return selectedSeats.reduce(
      (total, seat) => total + categoryPrices[seat.category],
      0,
    );
  };

  const totalAmount = calculateTotalAmount();

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={24 * scaleFactor}
            iconColor="#000"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <View style={styles.headerContent}>
            <Text style={styles.venueText}>{selectedShow?.venue}</Text>
            <Text style={styles.venueText}>{selectedShow?.title}</Text>
            <Text style={styles.showTimeText}>
              {selectedShow?.date} | {selectedShow?.time}
            </Text>
          </View>
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.bookedSeat]} />
            <Text style={styles.legendText}>Booked</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.selectedSeat]} />
            <Text style={styles.legendText}>Selected</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.availableSeat]} />
            <Text style={styles.legendText}>Available</Text>
          </View>
        </View>

        {/* Screen */}
        <View style={styles.screenContainer}>
          <View style={styles.screen} />
          <Text style={styles.screenText}>All eyes this way please!</Text>
        </View>

        {/* Seating Layout with Horizontal Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.seatingContainer}>
            {renderSection('diamond')}
            {renderSection('gold')}
            {renderSection('balcony')}
          </View>
        </ScrollView>

        {/* Selected Seats Summary */}
        {selectedSeats.length > 0 && (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>
              Selected Seats:{' '}
              {selectedSeats
                .map(seat => `${seat.row}${seat.number}`)
                .join(', ')}
              | Total Amount: ₹{totalAmount}
            </Text>
          </View>
        )}

        {/* Proceed Button */}
        <TouchableOpacity
          disabled={selectedSeats.length === 0 || isProcessing}
          onPress={handleProceedToPayment}
          style={[
            styles.proceedButton,
            selectedSeats.length === 0 && styles.disabledButton,
          ]}>
          <Text style={styles.proceedButtonText}>
            {selectedSeats.length > 0
              ? `Proceed to Pay ₹${totalAmount}`
              : 'Select seats to proceed'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  venueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  showTimeText: {
    fontSize: 14,
    color: '#666',
    paddingTop: 10 * scaleFactor,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendBox: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
  bookedSeat: {
    backgroundColor: '#D1D5DB',
  },
  selectedSeat: {
    backgroundColor: '#10B981',
  },
  availableSeat: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  screenContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  screen: {
    width: '80%',
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
  },
  screenText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  seatingContainer: {
    paddingHorizontal: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rowLabel: {
    width: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  rowSections: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seat: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 4,
  },
  seatText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  diamondSeat: {
    backgroundColor: '#8B5CF6',
  },
  goldSeat: {
    backgroundColor: '#F59E0B',
  },
  balconySeat: {
    backgroundColor: '#3B82F6',
  },
  bookedDiamondSeat: {
    backgroundColor: '#EDE9FE',
  },
  bookedGoldSeat: {
    backgroundColor: '#FEF3C7',
  },
  bookedBalconySeat: {
    backgroundColor: '#DBEAFE',
  },
  disabledSeat: {
    opacity: 0.5,
  },
  invisibleSeat: {
    opacity: 0,
  },
  summaryContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
  },
  proceedButton: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  proceedButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
  },
});

export default AFCSeating;
