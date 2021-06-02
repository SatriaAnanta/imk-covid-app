import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';


export default class Hospitals extends React.Component{
    constructor(props) {
        super(props);
        this.state = { btnSelected : 0 };
    }
    
    render() {
        return (
            <ScrollView 
              showsVerticalScrollIndicator={false}
              style={styles.container}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.heading}>Penyedia Vaksin Covid-19</Text>
                </View>
              </View>
              <View style={styles.subTitleWrapper}>
                <Text style={styles.subTitle}>40 Penyedia Vaksin Tersedia</Text>
              </View>
              <View style={styles.searchBoxWrapper}>
                <TextInput placeholder={'Cari Rumah Sakit'} />
                <Image source={require('../assets/images/search.png')} style={styles.tinySearchIcon}/>
              </View>
              <View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoryWrapper}
                  horizontal={true}>
                  <TouchableOpacity style={styles.categoryItem}
                    onPress={() => this.setState({ btnSelected: 1 })}
                  >
                    <View style={(this.state.btnSelected== 1)?styles.categoryCardActive:styles.categoryCard} >
                      <Image source={require('../assets/images/sinovac.png')} style={styles.categoryIcon} />
                    </View>
                    <Text style={styles.label2}>Sinovac</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categoryItem}
                    onPress={() => this.setState({ btnSelected: 2 })}
                  >
                    <View style={(this.state.btnSelected== 2)?styles.categoryCardActive:styles.categoryCard} >
                      <Image source={require('../assets/images/astrazeneca.png')} style={styles.categoryIcon}/>
                    </View>
                    <Text style={styles.label2}>AstraZeneca</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categoryItem}
                    onPress={() => this.setState({ btnSelected: 3 })}
                  >
                    <View style={(this.state.btnSelected== 3)?styles.categoryCardActive:styles.categoryCard} >
                      <Image source={require('../assets/images/sinopharm.png')} style={styles.categoryIcon}/>
                    </View>
                    <Text style={styles.label2}>Sinopharm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categoryItem}
                    onPress={() => this.setState({ btnSelected: 4 })}
                  >
                    <View style={(this.state.btnSelected== 4)?styles.categoryCardActive:styles.categoryCard} >
                      <Image source={require('../assets/images/moderna.png')} style={styles.categoryIcon}/>
                    </View>
                    <Text style={styles.label2}>Moderna</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>  
              <View style={styles.subHeadingWrapper}>
                <Text style={styles.subHeading}>Penyedia Vaksin</Text>
              </View>
              <View contentContainerStyle={styles.foodListingWrapper}>
                <TouchableOpacity style={styles.foodItemWrapper}
                onPress={() =>
                  this.props.navigation.navigate('HospitalDetails',{
                    name:'RSUD Sidoarjo',
                    img : '../assets/images/RSUDSidoarjo.jpeg'
                  })
                }
                >
                  <Image
                    style={styles.foodImage}
                    source={require('../assets/images/RSUDSidoarjo.jpeg')}
                  />
                  <Text style={styles.foodItemTitle}>RSUD Sidoarjo</Text>
                  <Text style={styles.foodItemSpecs}>AstraZeneca</Text>
                  <View style={styles.percentageWrapper}>
                    <Image source={require('../assets/images/happy.png')} style={styles.happyIcon}/>
                    <Text style={styles.percentageText}>97%</Text>
                  </View>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.foodItemWrapper}
                onPress={() =>
                  this.props.navigation.navigate('HospitalDetails',{
                    name:'RSUD Bali Mandara',
                    img : '../assets/images/RSUDBaliMandara.jpeg'
                  })
                }
                >
                  <Image
                    style={styles.foodImage}
                    source={require('../assets/images/RSUDBaliMandara.jpeg')}
                  />
                  <Text style={styles.foodItemTitle}>RSUD Bali Mandara</Text>
                  <Text style={styles.foodItemSpecs}>Sinovac</Text>
                  <View style={styles.percentageWrapper}>
                    <Image source={require('../assets/images/happy.png')} style={styles.happyIcon}/>
                    <Text style={styles.percentageText}>97%</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
    }

}

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      margin: 15,
    },
    tinySearchIcon: {
        width: 16,
        height: 17,
    },
    hospitalImage: {
        width: 335,
        height: 134,
    },
    categoryIcon: {
        width: 37,
        height: 37,
    },
    happyIcon: {
        width: 13,
        height: 13,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      paddingLeft: 10,
      paddingRight: 10,
    },
    basketWrapper: {
      backgroundColor: '#FECA57',
      flexDirection: 'row',
      padding: 10,
      borderRadius: 15,
    },
    heading: {
      fontFamily: 'Cera Pro',
      fontWeight: 'bold',
      fontSize: 25,
      lineHeight: 30,
      color: '#0A191E',
    },
    icon1: {
      width: 14,
      height: 14,
    },
    smallTitle: {
      color: 'white',
      fontSize: 14,
      marginLeft: 10,
    },
    footerWrapper: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    footerMenuItemWrapper: {
      flexDirection: 'row',
      backgroundColor: '#F1F2F6',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 20,
    },
    label: {
      color: '#31B9CC',
      fontSize: 14,
      marginLeft: 10,
      fontFamily: 'Cera Pro',
    },
    label2: {
      color: '#0A191E',
      fontFamily: 'Cera Pro',
      marginTop: 10,
      fontWeight: '500',
    },
    subTitleWrapper: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 5,
    },
    subTitle: {
      color: '#798184',
      fontSize: 12,
      fontFamily: 'Cera Pro',
    },
    searchBoxWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 25,
      backgroundColor: '#F1F2F6',
      padding: 15,
      borderRadius: 15,
    },
    categoryCard: {
      width: 70,
      height: 70,
      backgroundColor: '#F1F2F6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    },
    categoryItem: {
      marginRight: 25,
      alignItems: 'center',
    },
    categoryCardActive: {
      width: 70,
      height: 70,
      backgroundColor: '#31B9CC',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    },
    categoryWrapper: {
      marginTop: 15,
    },
    subHeadingWrapper: {
      marginTop: 25,
      marginBottom: 15,
    },
    subHeading: {
      color: '#0A191E',
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Cera Pro',
    },
    foodListingWrapper: {
      display: 'flex',
    },
    foodItemWrapper: {
      backgroundColor: '#FFF',
      padding: 5,
      borderRadius: 10,
      marginBottom: 15,
    },
    foodImage: {
      width: '100%',
      borderRadius: 10,
      height: 134,
    },
    foodItemTitle: {
      color: '#0A191E',
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Cera Pro',
      padding: 10,
    },
    foodItemSpecs: {
      color: '#798184',
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Cera Pro',
      paddingLeft: 10,
    },
    percentageWrapper: {
      flexDirection: 'row',
      padding: 10,
    },
    percentageText: {
      marginLeft: 10,
      color: '#31B9CC',
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'Cera Pro',
    },
    distance: {
      position: 'absolute',
      top: '40%',
      left: '8%',
      backgroundColor: '#F1F2F6',
      opacity: 0.6,
      padding: 10,
      borderRadius: 5,
    },
    distanceText: {
      color: '#0A191E',
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'Cera Pro',
      paddingLeft: 10,
    },
  });