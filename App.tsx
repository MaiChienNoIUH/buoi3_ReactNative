import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Flex = () => {
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <View style={styles.topView}>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={styles.image}
        />
      </View>
      <View style={styles.middleView}>
        <Text style={styles.titleText}>GROW YOUR BUSINESS</Text>
        <Text style={styles.subtitleText}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  topView: {
    flex: 1,
    backgroundColor: '#00ccf9',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middleView: {
    flex: 1,
    backgroundColor: '#00ccf9',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#00ccf9',
    flexDirection: 'row',
    justifyContent: 'center', // Align buttons to the bottom of the view
    alignItems: 'center',
    paddingBottom: 20, // Optional: Add padding at the bottom for spacing
  },
  image: {
    width: 150,
    height: 150,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#100f13',
  },
  subtitleText: {
    fontSize: 20,
    color: '#100f13',
  },
  button: {
    backgroundColor: '#e3c000',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 120, // Optional: Make button width responsive
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Flex;