import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const getResults = () => {
        console.log(searchText)
    }

    return (
        <View style={styles.container}>
            <SearchBar
                getResults={getResults}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
})

export default Search
