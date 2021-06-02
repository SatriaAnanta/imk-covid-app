import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const W = Dimensions.get('window').width;
import { PieChart } from 'react-native-chart-kit';
const ChartAffected = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Jenis Kelamin Positif Covid-19</Text>
        <PieChart
            data={[
                {
                name: 'Laki-Laki',
                population: 488,
                color: '#F00',
                legendFontColor: '#7F7F7F',
                legendFontSize: 13,
                },
                {
                name: 'Perempuan',
                population: 512,
                color: 'rgb(0, 0, 255)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 13,
                },
            ]}
            width={Dimensions.get('window').width - 50}
            height={140}
            chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                borderRadius: 16,
                },
            }}
            style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
        />
    </View>
    
  );
};

export default ChartAffected;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10,
        marginTop: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});