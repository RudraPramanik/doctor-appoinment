import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import DaySelactor from '../component/booking/DaySelactor';
import TimeSelector from '../component/booking/TimeSelector';

const DetailScreen: React.FC<{ route: any }> = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // const { name, description, rating } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        style="light" // Set the text color (dark/light)
        backgroundColor="black" // Set the background color
        translucent={true} // Make it translucent
      />
      <View style={styles.section1}>
        <ImageBackground
          source={require('../../assets/v_half.png')} // replace with your image path
          style={styles.backgroundImage}
        >
          <View style={styles.section1Content}>
            <View>
              <Image
                source={require('../../assets/doc.png')}
                style={styles.Image}
              />
            </View>
            <View style={styles.content1}>
              <Text style={styles.text}>Dr. Martin</Text>
              <Text style={styles.designation}>dentist</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
            </View>
          </View>
        </ImageBackground>
        {/* Content for the first section */}
      </View>
      {/* 2 */}
      <View style={styles.section2}>
        {/* top 1/3 section */}
        <View style={styles.topsection}>
          <View>
            <DaySelactor />
          </View>
        </View>
        {/* bottm 2/3 section */}
        <View style={styles.btmSection}>
          <View style={styles.sectionContent2top}>
            <TimeSelector />
          </View>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.sectionContent2bottm}>
              <Text style={styles.appoinmentText}>Book appointment now</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Content for the second section */}
      </View>
      {/* Content for the second section */}
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modal content goes here</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      {/* modal */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default is 'column', which means vertical layout
    backgroundColor: '#32075e',
  },
  section1: {
    flex: 1, // Takes 1/3 of the available vertical space
    flexDirection: 'row',
    marginTop: -50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain' 'cover'
    height: 300,
  },
  content1: {},
  section1Content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
  designation: {
    borderRadius: 5,
    backgroundColor: '#221136',
    borderWidth: 1,
    borderColor: '#4d3c5e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 50,
  },
  sectionContent2: {
    marginHorizontal: 16,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  appoinmentText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  Image: {
    marginTop: 50,
    height: 280,
    width: 130,
    marginBottom: -140,
    marginLeft: 50,
  },
  section2: {
    flex: 2, // Takes 1/3 of the available vertical space
  },
  topsection: {
    flex: 0.8,
    backgroundColor: '#221136',
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4d3c5e',
    marginBottom: 2,
  },
  btmSection: {
    flex: 2.2,
  },
  sectionContent2top: {
    flex: 3.5,
    backgroundColor: '#221136',
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4d3c5e',
    marginBottom: 2,
    marginTop: 10,
  },
  sectionContent2bottm: {
    flex: 0.5,
    backgroundColor: '#120b14',
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4d3c5e',
    marginBottom: 2,
    marginTop: 10,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#221136',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4d3c5e',
  },
  modalText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});
export default DetailScreen;
