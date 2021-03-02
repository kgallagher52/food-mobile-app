import React from 'react';
import { View, StyleSheet } from 'react-native';
import Search from './Search';

const Home = () => {
    return (
        <View style={styles.container}>
            <Search />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },

})

export default Home
