import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types';

import Card from './Card'

//Responsável por correr o Array definido no App, e jogar prod CARD, para manipular os valores e jogar para o PIZZAVALUES,
// para printar na tela. Nehnum valor é obrigatório. Podemos mudar depois

//OBS: falta as imagens
export default class ListPizza extends React.Component{
    static propTypes = {
        items : PropTypes.arrayOf(
            PropTypes.shape({
                namePizza : PropTypes.string,
                value : PropTypes.string,
                price : PropTypes.string,
                description : PropTypes.string,
            })
        ).isRequired
    }



    renderItems = ({item : {namePizza, value, price, description} }) =>(
        <Card 
            namePizza = {namePizza}
            value = {value}
            price = {price}
            description = {description}
        />
    )
    render(){
        const {items} = this.props;

        return(
            <FlatList
            data ={items}
            renderItem={this.renderItems}
           
            />
        )
    }
}

