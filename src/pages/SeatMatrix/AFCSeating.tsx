import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

// Calculate scaleFactor based on screen width
const scaleFactor = width / 375; // 375 is the base width (e.g., iPhone 6/7/8)

interface SeatType {
  id: string;
  row: string;
  number: number;
  category: 'diamond' | 'gold' | 'balcony';
  status: 'available' | 'selected' | 'booked' | 'empty';
}

const AFCSeating = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const navigation = useNavigation();

  // Seat matrix layout (same as your provided code)
  const rowsLayout = {
    diamond: {
      A: [
        [1, 2, 3, 4, 5],
        [
          6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
          24, 25,
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
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29,
        ],
        [30, 31, 32, 33, 34, 35, 36, 37, 38],
      ],
      E: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29,
        ],
        [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      ],
      F: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30,
        ],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      ],
    },
    balcony: {
      G: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, 31,
        ],
        [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
      ],
      H: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, 31,
        ],
        [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
      ],
    },
  };

  const handleSeatClick = (seatId: string) => {
    const newSelectedSeats = selectedSeats.includes(seatId)
      ? selectedSeats.filter(s => s !== seatId)
      : [...selectedSeats, seatId];
    setSelectedSeats(newSelectedSeats);
  };

  const renderSeat = (seatId: string, row: string, sectionIndex: number) => {
    const isSelected = selectedSeats.includes(seatId);
    const isBooked = false; // Add your booked seats logic here

    return (
      <TouchableOpacity
        key={seatId}
        style={[
          styles.seat,
          isSelected && styles.selectedSeat,
          isBooked && styles.bookedSeat,
        ]}
        onPress={() => handleSeatClick(seatId)}
        disabled={isBooked}>
        <Text style={styles.seatText}>{seatId.replace(row, '')}</Text>
      </TouchableOpacity>
    );
  };

  const renderSection = (category: keyof typeof rowsLayout) => {
    return (
      <View key={category} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{category.toUpperCase()}</Text>
        {Object.entries(rowsLayout[category]).map(([row, sections]) => (
          <View key={row} style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{row}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.seatsContainer}>
                {sections.map((section: number[], sectionIndex: number) => (
                  <View key={sectionIndex} style={styles.section}>
                    {section.map((seatNumber: number) => {
                      const seatId = `${row}${seatNumber}`;
                      return renderSeat(seatId, row, sectionIndex);
                    })}
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </View>
    );
  };

  const ExitSign = ({
    side,
  }: {
    side: 'left' | 'right' | 'middle-left' | 'middle-right';
  }) => {
    const isMiddle = side.startsWith('middle');

    return (
      <View
        style={[
          styles.exitSign,
          isMiddle ? styles.middleExit : styles.sideExit,
          side.includes('left') ? styles.leftExit : styles.rightExit,
        ]}>
        <View style={styles.exitLabel}>
          <Text style={styles.exitText}>EXIT</Text>
        </View>
        <View style={styles.exitLine} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <IconButton
        icon="arrow-left"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      <Text style={styles.title}>Theater Hall</Text>
      <View style={styles.screenContainer}>
        <ExitSign side="left" />
        <View style={styles.screen}>
          <Text style={styles.screenText}>STAGE</Text>
        </View>
        <ExitSign side="right" />
      </View>
      {Object.keys(rowsLayout).map(category =>
        renderSection(category as keyof typeof rowsLayout),
      )}
      <TouchableOpacity
        style={styles.proceedButton}
        disabled={selectedSeats.length === 0}
        // onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.proceedButtonText}>
          {selectedSeats.length > 0
            ? `Proceed to Pay (${selectedSeats.length} seats)`
            : 'Select seats to proceed'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10 * scaleFactor,
  },
  backButton: {
    position: 'absolute',
    top: 10 * scaleFactor,
    left: 10 * scaleFactor,
    zIndex: 1,
  },
  title: {
    fontSize: 24 * scaleFactor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20 * scaleFactor,
  },
  screenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20 * scaleFactor,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18 * scaleFactor,
    color: 'grey',
  },
  categoryContainer: {
    marginBottom: 20 * scaleFactor,
  },
  categoryTitle: {
    fontSize: 18 * scaleFactor,
    fontWeight: 'bold',
    marginBottom: 10 * scaleFactor,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * scaleFactor,
  },
  rowTitle: {
    width: 30 * scaleFactor,
    fontSize: 16 * scaleFactor,
  },
  seatsContainer: {
    flexDirection: 'row',
  },
  section: {
    flexDirection: 'row',
    marginRight: 10 * scaleFactor,
  },
  seat: {
    width: 30 * scaleFactor,
    height: 30 * scaleFactor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2 * scaleFactor,
    backgroundColor: '#ddd',
    borderRadius: 5 * scaleFactor,
  },
  selectedSeat: {
    backgroundColor: 'green',
  },
  bookedSeat: {
    backgroundColor: '#ccc',
  },
  seatText: {
    fontSize: 12 * scaleFactor,
  },
  proceedButton: {
    backgroundColor: 'green',
    padding: 15 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: 'center',
    marginTop: 20 * scaleFactor,
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 16 * scaleFactor,
    fontWeight: 'bold',
  },
  exitSign: {
    alignItems: 'center',
  },
  middleExit: {
    position: 'absolute',
    top: 0,
  },
  sideExit: {
    position: 'relative',
  },
  leftExit: {
    left: 10 * scaleFactor,
  },
  rightExit: {
    right: 10 * scaleFactor,
  },
  exitLabel: {
    backgroundColor: 'green',
    paddingHorizontal: 10 * scaleFactor,
    paddingVertical: 5 * scaleFactor,
    borderRadius: 5 * scaleFactor,
  },
  exitText: {
    color: 'white',
    fontSize: 12 * scaleFactor,
    fontWeight: 'bold',
  },
  exitLine: {
    height: 20 * scaleFactor,
    width: 8 * scaleFactor,
    backgroundColor: '#ccc',
    marginTop: 5 * scaleFactor,
  },
});

export default AFCSeating;
