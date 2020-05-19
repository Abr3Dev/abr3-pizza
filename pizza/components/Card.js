import React from 'react';

import {Image, StyleSheet, View, ActivityIndicator, Text} from 'react-native'
import PropTypes from 'prop-types'
import PizzaValues from './PizzaValues'


//classe responsável por definir os valores, e manipulá-los
export default class Card extends React.Component{
    static propTypes ={
        namePizza : PropTypes.string,
        value : PropTypes.string,
        price : PropTypes.string,
        description : PropTypes.string,
    }

    static defaultProps ={
        namePizza : '',
        value : '0.0',
        price : '0.0',
        
    }

    state = {
        loading : true
    }

    handleLoad = () => {
        this.setState({loading : false})
    }

    render(){

        const{namePizza, value, price,description} = this.props;
        const {loading} = this.state;

        return(
           <View>
               <Text>

                   {/* Passando os valores para serem impressos na tela. Na classe PizzaValues */}
               <PizzaValues
                    namePizza = {namePizza}
                    value = {value}
                    price = {price}
                    description = {description} />
               
              {/* Responsável pelo loading.. */}
                {/* {loading && (
                   <ActivityIndicator
                    size={'large'}/>
               )}  */}
               </Text>
           </View>
        )
    }
}

