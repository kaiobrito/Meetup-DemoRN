import React from 'react';
import {
    FlatList,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Separator } from 'react-native';
import { GridRow } from './GridRow';

export const GridView = props => {
    return (
        <FlatList
            refreshing={props.refreshing}
            style={{flex: 1}}
            data={props.data}
            ItemSeparatorComponent={Separator}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => props.onSelectItem(item)}>
                    <GridRow title={item.title} subtitle={item.subtitle} image={item.image}/>
                </TouchableOpacity>
            ) }
        />
    )
};

GridView.propTypes = {
    refreshing: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func.isRequired
}
