import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';

export interface Option {
  label: string;
  value: string;
}

export interface selectProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}
const Select: React.FC<selectProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.selectButton}>
        <Text style={styles.selectedValueText}>{selectedValue}</Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdownContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelect(option.value)}
              style={styles.optionItem}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  selectButton: {
    borderRadius: 5,
    backgroundColor: '#221136',
    borderWidth: 1,
    borderColor: '#4d3c5e',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedValueText: {
    fontSize: 16,
    color: '#d2beeb',
  },

  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d2beeb',
    zIndex: 2,
  },
  optionText: {
    fontSize: 14,
    color: '#d2beeb',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 40, // Adjust the top value to align the dropdown below the button
    zIndex: 3, // Ensure the dropdown is rendered above other components    //
    padding: 0,
    borderRadius: 2,
    backgroundColor: '#32075e',
    borderWidth: 1,
    borderColor: '#4d3c5e',
  },
});

export default Select;
