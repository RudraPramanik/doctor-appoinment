import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HamburgerMenu from '../component/home/Humburger';
import SearchInput from '../component/home/SearchInput';
import React, { useState } from 'react';
import Select, { Option } from '../component/home/Dropdown';
import DocList from '../component/DocList';
import HorizontalCardList from '../component/home/HorizontalCardList';

const options: Option[] = [
  { label: 'Option A', value: 'option A' },
  { label: 'Option B', value: 'option B' },
  { label: 'Option C', value: 'option C' },
  { label: 'Option D', value: 'option D' },
  { label: 'Option E', value: 'option E' },
];
export default function AppScreen() {
  const [selectedValue, setSelectedValue] = useState<string>('options');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        style="light" // Set the text color (dark/light)
        backgroundColor="#32075e" // Set the background color
        translucent={true} // Make it translucent
      />
      {/*  */}
      <View style={styles.header}>
        <HamburgerMenu />
        <Text style={styles.headerText}>Rudra</Text>
        <Image source={require('../../assets/icon.png')} style={styles.image} />
      </View>
      <View>
        <SearchInput />
      </View>
      {/* <View style={styles.header}>
        <Text>
          <HamburgerMenu />
        </Text>
        <Text style={styles.headerText}>rudra</Text>
        <View>
          <Image source={require('./assets/icon.png')} style={styles.image} />{' '}
        </View>
      </View> */}
      {/*  */}
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.contentText}>Top Doctor</Text>
          <View>
            <Select
              options={options}
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          </View>
        </View>
        {/*  */}
        <View>
          <DocList />
        </View>
        {/*  */}
        {/* bottom */}
        <View>
          <HorizontalCardList />
        </View>
        {/* bottom */}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32075e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#32075e',
    paddingTop: 70,
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#32075e',
  },
  contentTop: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 6,
  },
  contentText: {
    fontSize: 18,
    color: '#d2beeb',
    fontWeight: '700',
  },
  footer: {
    backgroundColor: '#32075e',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 10,
  },
});
