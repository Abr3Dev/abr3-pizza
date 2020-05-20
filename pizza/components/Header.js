import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { faEllipsisV as pointer } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice as pizza } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, profilePic } = this.props.user
        return (
            <>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={{ uri: profilePic }} style={styles.profilePic} />
                    </TouchableOpacity>
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
                <Text style={styles.nameUser}>{name}, Escolha sua pizza!</Text>
            </>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E14444',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 8
    },
    titleLogo: {
        flexDirection: 'row',

    },
    profilePic: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    nameUser: {
        padding: 16,
        fontSize: 16,

    }
})