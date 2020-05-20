import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign as dollar } from '@fortawesome/free-solid-svg-icons';


export default function PizzaValues({ namePizza, value, data, description, picture }) {
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
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 16,
        backgroundColor: '#E26767',
        margin: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 8,
    },
    data: {
        alignSelf: 'flex-end',
        marginTop: 8,
        color: 'white'
    },
    pic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 16,
        alignSelf: 'center',


    },
    descriptions: {
        flexDirection: "column",
    },
    desc: {
        width: 170,
        color: 'white'
    },
    titlePizza: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
        color: 'white'
    },
    value: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#35E25D'

    }
})