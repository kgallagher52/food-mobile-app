import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchText, setSearchText, getResults }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.icon} name="search" color="black" />
            <TextInput
                onEndEditing={() => getResults()}
                autoCapitalize="none"
                autoCorrect={false}
                onChange={(updatedText) => setSearchText(updatedText)}
                style={styles.inputStyle}
                placeholder="Search"
                value={searchText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
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
