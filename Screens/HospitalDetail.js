import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  Linking,
} from 'react-native';

// const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
// const latLng = `${lat},${lng}`;
// const label = 'Custom Label';
// const url = Platform.select({
//   ios: `${scheme}${label}@${latLng}`,
//   android: `${scheme}${latLng}(${label})`
// });

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);
  }
  

  clickEventListener() {
    Linking.openURL('google.navigation:q=100+101');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:20}}>
            <Image
              style={styles.productImg}
              source={require('../assets/images/RSUDSidoarjo.jpeg')}
            />
            <View style={styles.separatorSmall}></View>
            <Text style={styles.name}>{this.props.route.params.name}</Text>
            <Text style={styles.price}>Jl. Mojopahit No.667</Text>
          </View>
          <View style={styles.separator}></View>

          <View style={{marginHorizontal:20}}>
            <Text style={styles.cardTittle}>Tentang</Text>
              <Text>Rumah Umum Daerah Kabupaten Sidoarjo adalah rumah sakit milik pemerin­tah Kabupaten dati II Sidoarjo, tempat pelayanan kese­hatan bagi warga Kabupaten Sido­arjo Bangunan Gedung yang berdi­ri tanggal 17 Agustus tahun 1956 saat itu berada di Jalan dr. Soetomo Sidoarjo, Walaupun Dengan pe­layanan yang sangat sederhana na­mun antusias warga sangat tinggi. Tingginya tingkat antusisme warga dan demi memberikan pelayanan yang maksimal maka lokasi Rumah Sakit di pindahkan ke jalan mojopa­hit No. 667 pada tahun 1972.</Text>
              <View style={styles.separatorSmall}></View>
              <Text style={styles.cardTittle}>Vaksin</Text>
                <Text>AstraZeneca</Text>
                <Text>Sinovac</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Petunjuk Lokasi</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:'100%',
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:5,
    fontSize:12,
    color:"green",
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    // backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  separatorSmall:{
    height:1,
    // backgroundColor:"#eeeeee",
    marginTop:10,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:10,
    marginTop:10,
  },
  cardTittle:{
    fontSize:22,
    marginBottom:5,
  }
  
});    