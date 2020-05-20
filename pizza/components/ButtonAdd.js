import { View , Image, StyleSheet} from "react-native";
import React from 'react'

export default function ButtonAdd(){
    return (
        <View>
            <Image source={{uri : 'https://i.ibb.co/HK5b0Tf/pizza.png'}} style={styles.img}/>
        </View>
    )
}
const styles = StyleSheet.create({
    img : {
        position: 'absolute',
        width : 70,
        height : 70,
       bottom : 16,
       right : 16

    },
  
})