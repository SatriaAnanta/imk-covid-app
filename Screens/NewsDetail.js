import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity,Text, ScrollView, } from 'react-native';

const NewsDetail = (routes) => (    
    <ScrollView style={styles.container}>
        <Card>
            <Card.Cover source={{ uri: routes.route.params.img }} />
            <Card.Content>
                <Title>{routes.route.params.name}</Title>
                <Paragraph>{routes.route.params.content}</Paragraph>
            </Card.Content>
        </Card>  
    </ScrollView>
    
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   padding: 20,
      backgroundColor: '#ecf0f1',
    },
    mb15: {
        marginBottom: 15,
      },

  });

export default NewsDetail;