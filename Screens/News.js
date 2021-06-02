import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity,  ScrollView,Image,TextInput } from 'react-native';
import NewsJson from '../assets/datas/news.json';


export default class News extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBoxWrapper}>
                <TextInput placeholder={'Cari Berita'} />
                <Image source={require('../assets/images/search.png')} style={styles.tinySearchIcon}/>
            </View>
            {NewsJson.map((prop, i) => {
                return (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('NewsDetails',{ 
                            name: prop.name,
                            content: prop.content,
                            img : prop.img
                        })}
                    >
                        <Card style={styles.mb15}>
                            <Card.Cover source={{ uri: prop.img }}  />
                            <Card.Content>
                                <Title>{prop.name}</Title>
                                <Paragraph>{prop.short}</Paragraph>
                            </Card.Content>
                        </Card>    
                    </TouchableOpacity>   
                );
            })}            
        </ScrollView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    mb15: {
        marginBottom: 15,
      },
    searchBoxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: '#F1F2F6',
        padding: 15,
        borderRadius: 15,
    },
    tinySearchIcon: {
        width: 16,
        height: 17,
    },

  });

// export default News;
