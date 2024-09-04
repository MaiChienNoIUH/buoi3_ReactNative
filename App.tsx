import React from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{
          flex: 1, 
          backgroundColor: '', 
          justifyContent:"center",
          flexDirection: "row",
        }}>
         <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 130, height: 130}}
        />
      </View>
      <View style={{
          flex: 1, 
          backgroundColor: 'darkorange',
          // flexDirection: "column",
          // justifyContent: 'center',
          alignContent: 'space-between',
        }} >
        <text>GROW YOUR BUSINES</text>
        <text>We will help you to grow your business usingonline server</text>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}} />
        <button title='LOGIN'></button>
        <button title='SIGNUP'></button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;