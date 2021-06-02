import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class VaccineStatus extends Component {
  render() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.cardConfirmed}>
            <Text style={styles.title}> TERKONFIRMASI</Text>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.number}>1,744,045</Text>
            </View>
          </View>
          <View style={styles.cardActiveCase}>
            <Text style={styles.title}> KASUS AKTIF </Text>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.number}>89,129</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.cardRecover}>
            <Text style={styles.title}> SEMBUH </Text>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.number}>1,606,611</Text>
            </View>
          </View>
          <View style={styles.cardDeath}>
            <Text style={styles.title}> MENINGGAL </Text>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.number}>48,305</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cardConfirmed: {
    height: 109,
    width: '48%',
    backgroundColor: '#FC7302',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActiveCase: {
    height: 109,
    width: '48%',
    backgroundColor: '#F82449',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRecover: {
    height: 109,
    width: '48%',
    backgroundColor: '#24ACF8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDeath: {
    height: 109,
    width: '48%',
    backgroundColor: '#04AD95',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  number: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});