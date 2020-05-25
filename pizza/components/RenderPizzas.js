import React from 'react';
import {Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign as dollar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PizzaValueStyle';


export default function RenderPizzas({ namePizza, value, data, description, picture }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.pic}
                source={{ uri: picture }} />
            <View style={styles.descriptions}>

                <Text style={styles.titlePizza}>{namePizza}</Text>
                <Text style={styles.value}>
                    <FontAwesomeIcon icon={dollar} color={'#35E25D'} />
                    {value}
                </Text>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.data}>{data}</Text>
            </View>
        </TouchableOpacity>
    )
};