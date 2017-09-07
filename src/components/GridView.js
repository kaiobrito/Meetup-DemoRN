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
            style={{flex: 1}}
            data={props.data}
            ItemSeparatorComponent={Separator}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <GridRow title={item.title} subtitle={item.subtitle} image={item.image}/>
                </TouchableOpacity>
            ) }
        />
    )
};

GridView.propTypes = {
    data: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func.isRequired
}
