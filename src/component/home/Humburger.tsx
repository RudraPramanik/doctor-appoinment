import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export const HamburgerMenu: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>
          <Entypo name="menu" size={28} color="white" />{' '}
        </Text>
      </TouchableOpacity>
      {/* <View style={isDrawerOpen ? styles.drawerOpen : styles.drawerClosed}>
        <Text>Menu Item 1</Text>
        <Text>Menu Item 2</Text>
        <Text>Menu Item 3</Text> */}
      {/* Add more menu items as needed */}
      {/* </View> */}
      {/* <View style={styles.content}>
        <Text>Main Content</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'stretch',
  //     backgroundColor: 'white',
  //   },
  //   hamburgerIcon: {
  //     padding: 10,
  //   },
  //   drawerOpen: {
  //     width: screenWidth * 0.7, // Adjust the width of the open drawer as needed
  //     backgroundColor: 'lightgray',
  //     borderRightWidth: 1,
  //     borderColor: 'gray',
  //     padding: 10,
  //   },
  //   drawerClosed: {
  //     width: 0,
  //   },
  //   content: {
  //     flex: 1,
  //     padding: 20,
  //     backgroundColor: 'lightcyan',
  //   },
});

export default HamburgerMenu;
