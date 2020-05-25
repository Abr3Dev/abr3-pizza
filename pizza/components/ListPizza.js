import React from 'react';
import { FlatList } from 'react-native';
import RenderPizzas from './RenderPizzas';


export default class ListPizza extends React.Component {

    renderItems = ({ item: { namePizza, value, data, description, picture } }) => (
        <RenderPizzas
            picture={picture}
            namePizza={namePizza}
            value={value}
            description={description}
            data={data}
        />
    )
    render() {
        const { items } = this.props;
        return (
            <FlatList
                data={items}
                renderItem={this.renderItems}
                keyExtractor={keyExtractor}
            />
        )
    }
};
const keyExtractor = ({ id }) => id.toString();