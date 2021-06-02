import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import VaccineStatus from '../Components/VaccineStatus';
import Notice from '../Components/Notice';
import CaseView from '../Components/CaseView';
import ChartAffected from '../Components/ChartAffected';
import ChartAge from '../Components/ChartAge';
import SymptomsView from '../Components/SymptomsView';
import TesTos from '../Components/TesTos';


const Dashboard = () => (
    <ScrollView>
        <View style={styles.container}>
            <Notice></Notice>
            <VaccineStatus></VaccineStatus>
            <CaseView></CaseView>
            <SymptomsView></SymptomsView>
            <ChartAffected></ChartAffected>   
            <ChartAge></ChartAge> 
            
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      padding: 20,
      backgroundColor: '#ecf0f1',
    },
    mb15: {
        marginBottom: 15,
      },

  });

export default Dashboard;
