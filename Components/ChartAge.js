import { BarChart } from 'react-native-chart-kit';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const chartConfig = {
  // barPercentage: 0.6,
  // decimalPlaces: 2,
  // color: (opacity = 1) => `rgba(1, 122, 205, ${opacity})`,
  // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  // strokeWidth: 2,
  // style: {
  //   borderRadius: 16,
  // },
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  barPercentage: 0.6,
  fillShadowGradient: `rgba(1, 122, 205, 1)`,
  fillShadowGradientOpacity: 1,
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
};

const ChartAge = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kelompok Umur Positif Covid-19</Text>
        <BarChart
          data={{
            labels:
              ['0 - 5', '6 - 18', '19 - 30', '31 - 45', '46 - 59', '>=60'],
            datasets: [
              {
                data: [2.85, 9.55, 24.64, 29.11, 22.53, 11,32],
              },
            ],
          }}
          width={Dimensions.get('window').width - 50}
          height={220}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            marginHorizontal: 0,
            borderRadius: 16,
          }}
        />
      </View>
    );
  };

  export default ChartAge;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 5,
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