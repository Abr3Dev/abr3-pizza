import { View , Image, StyleSheet} from "react-native";
import React from 'react'
import styles from '../styles/ButtonAddStyle';
export default function ButtonAdd(){
    return (
        <View>
            <Image source={{uri : 'https://i.ibb.co/HK5b0Tf/pizza.png'}} style={styles.img}/>
        </View>
    )
};
