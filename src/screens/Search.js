import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

/* Flow Search
    1. Search function called
    2. Nothing visible on screen. 
    3. User enters a search term, submits it, request to Yelp made
    4. Get search results, call setter
    5. Updated state causes component to rerender 
    6. Now we have something to show the user! 
*/

const Search = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // Price = '$' || '$$' || '$$$'
    }

    return (
        <View style={styles.container}>
            <SearchBar
                onTermChange={setTerm}
                term={term}
                onTermSubmit={(term) => { searchApi(term) }}
            />
            <Text>We have found {results.length} results</Text>
            {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            {/* <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return <ResultsList
                        title={"Cost Effective"}
                    />
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    errorMessage: {
        color: 'red'
    }
})

export default Search
