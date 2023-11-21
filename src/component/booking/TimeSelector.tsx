import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const TimeSelector: React.FC = () => {
  const [hoursOfDay, setHoursOfDay] = useState<string[]>([]);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const availableHours = Array.from({ length: 12 }, (_, index) => index + 10)
      .filter((hour) => hour >= currentHour)
      .map(
        (hour) =>
          `${hour % 12 === 0 ? 12 : hour % 12} ${hour >= 12 ? 'PM' : 'AM'}`
      );

    setHoursOfDay(availableHours);
  }, []);

  const handleHourPress = (hour: string) => {
    setSelectedHour(hour);
    // Add your logic for handling the selected hour here
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.hourButton,
        selectedHour === item && styles.selectedHourButton,
      ]}
      onPress={() => handleHourPress(item)}
      disabled={false}
      //   add logic
    >
      <Text
        style={[
          styles.hourText,
          selectedHour === item && styles.selectedHourText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Select Time</Text>
      </View>
      <FlatList
        data={hoursOfDay}
        numColumns={3}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TimeSelector;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 20,
  },
  hourButton: {
    flex: 1,
    padding: 6,
    borderRadius: 8,
    margin: 5,
    marginTop: 14,
    borderWidth: 2,
    borderColor: '#4d3c5e',
  },
  selectedHourButton: {
    backgroundColor: 'black', // Change the color for the selected hour
    borderWidth: 2,
    borderColor: '#4d3c5e',
  },
  hourText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  selectedHourText: {
    fontWeight: 'bold', // Change the style for the selected hour
  },
});
