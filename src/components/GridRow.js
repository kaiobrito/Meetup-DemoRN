import React from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Separator } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    row: {
        containerStyle: {
            flex: 1,
            padding: 5,
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
        },
        imageStyle: {
            width: 60,
            marginRight: 10,
            borderRadius: 5
        },
        titleStyle: {
            color: 'black',
            fontWeight: 'bold'
        },
        textStyle: {
            alignSelf: 'flex-start',
            color: 'black'
        },
    }
}

export const GridRow = props => {
    return (
        <View style={styles.row.containerStyle}>
            <Image
                source={props.image}
                style={styles.row.imageStyle}
            />
            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Text style={styles.row.titleStyle}>{props.title}</Text>
                <Text style={styles.row.textStyle}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

GridRow.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
