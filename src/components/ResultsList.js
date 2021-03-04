import React from 'react'
import { withNavigation } from 'react-navigation' // Returns component with the navigation prop
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) return null;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true} // Orientation changes to horizontal 
                data={results}
                showsHorizontalScrollIndicator={false} // Turns off scrollbar
                keyExtractor={(result) => result.id} // Gives key
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5

    }
});

export default withNavigation(ResultsList)
