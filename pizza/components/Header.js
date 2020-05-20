import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {faEllipsisV as pointer} from '@fortawesome/free-solid-svg-icons';
import {faPizzaSlice as pizza} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class  Header extends React.Component{
    constructor(props){
        super(props)
    }
   

    render(){
        const {name, profilePic} = this.props
        return(
            <>
            <View style={styles.header}>
           <Image source={{uri : profilePic}}/>
                <View style={styles.titleLogo}>
                    <Text style={styles.title}>ABR3 pizzas</Text>
                <FontAwesomeIcon
                size={16}
                icon={pizza}
                color={'white'}
                />
                </View>
                <TouchableOpacity>
                <FontAwesomeIcon
                    icon={pointer}
                    size={16}
                    color={'white'}
                />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{name}</Text>
            </View>
            </>
        )
    }    
}
const styles = StyleSheet.create({
    header : {
    backgroundColor : '#E14444',
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 16
    },
    title : {
        fontSize : 16,
        color : 'white',
        fontWeight : 'bold',
        marginRight : 8
    },
    titleLogo : {
        flexDirection : 'row',

    }
})