import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native'

import PizzaValues from './PizzaValues';


export default class ListPizza extends React.Component{

    renderItems = ({item : {id, namePizza, value, data, description, picture} }) =>(
        <PizzaValues
            picture ={picture}
            namePizza = {namePizza}
            value = {value}
            description = {description}
            data = {data}
           
        />
    )
    render(){
        const {items} = this.props;

        return(
            <FlatList
            data ={items}
            renderItem={this.renderItems}
            keyExtractor={keyExtractor}
            style={styles.scroll}
            />
        )
    }
    
}
const styles = StyleSheet.create({
    scroll :{
        marginBottom : 48
    }
})
const keyExtractor = ({id}) => id.toString();