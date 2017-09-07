import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    containerStyle: {
        height: 50,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'rgba(236, 240, 241,1.0)',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonTextStyle: {
        color: 'white',
        alignSelf: 'center'
    }
}

export const SearchBar = props => {
    return (
        <View style={styles.containerStyle}>
            <TextInput
                value={props.searchTerm}
                onChangeText={props.onChangeText}
                style={styles.textInputStyle}
                placeholder="Search"
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={props.onSubmit}>
                <View>
                    <Text style={styles.buttonTextStyle}>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

SearchBar.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
}
