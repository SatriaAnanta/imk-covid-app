/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var today = new Date();
var date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
export default class Notice extends Component {
  render() {
    return (
      <View style={styles.section}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>
            Informasi Covid
        </Text>
        <Text
          style={{
            color: '#048AD6',
            fontSize: 12,
            fontWeight: '600',
          }}>
          Pembaharuan {date}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});