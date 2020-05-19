import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from'react-native';
import PropTypes from 'prop-types'

export default function PizzaValues({namePizza, value, price, description}){

    //Responsável por printar os valores na tela. Falta a imagem e estilizar isso aqui
    return(
        <>
            <Text>{namePizza}</Text>
            <Text>{value}</Text>
            <Text>{price}</Text>
            <Text>{description}</Text>
        </>
    )
}

PizzaValues.PropTypes = {
                namePizza : PropTypes.string.isRequired,
                value : PropTypes.string.isRequired,
                price : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
}