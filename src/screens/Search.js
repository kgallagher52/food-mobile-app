import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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


    const filterResultsByPrice = price => {
        return results.filter(results => { return results.price === price })
    }

    return (
        <>
            <SearchBar
                onTermChange={setTerm}
                term={term}
                onTermSubmit={(term) => searchApi(term)}
            />
            {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}

            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title={"Cost Effective"} />
                <ResultsList results={filterResultsByPrice('$$')} title={"Bit Pricer"} />
                <ResultsList results={filterResultsByPrice('$$$')} title={"Big Spender"} />
                <ResultsList results={filterResultsByPrice('$$$$')} title={"Hurt Your Wallet"} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red'
    }
})

export default Search
