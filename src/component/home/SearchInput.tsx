import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    // Perform the search or filtering logic with the 'searchText' state
    console.log('Searching for:', searchText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome5
          name="search"
          style={styles.icon}
          size={24}
          color="#d2beeb"
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#d2beeb"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#32075e',
    paddingTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#221136',
    borderWidth: 1,
    borderColor: '#4d3c5e',
    borderRadius: 15,
    padding: 7,
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: 'white',
  },
});
