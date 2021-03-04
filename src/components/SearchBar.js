import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onTermChange, term, onTermSubmit }) => {

    return (
        <View style={styles.container}>
            <Feather style={styles.icon} name="search" color="black" />
            <TextInput
                value={term}
                onChangeText={(updatedTerm) => onTermChange(updatedTerm)}
                onEndEditing={() => onTermSubmit(term)}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 15
    },
    inputStyle: {
        flex: 1, // Use up as much space as I can
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar
