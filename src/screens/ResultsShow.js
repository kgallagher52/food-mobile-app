import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import Yelp from '../api/Yelp'

const ResultsShow = ({ navigation }) => {
    const [business, setBusiness] = useState(null);

    useEffect(() => {
        Yelp.get(`/${navigation.getParam('id')}`).then(res => {
            setBusiness(res.data);
        }).catch(err => {
            console.log(err)
        })
        return () => {
            setBusiness(null);
        }
    }, [setBusiness])

    if (!business) return null

    return (
        <View>
            <Text>{business.name}</Text>
            <FlatList
                data={business.photos}
                keyExtractor={(photo) => photo} // Gives key
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
});

export default ResultsShow
