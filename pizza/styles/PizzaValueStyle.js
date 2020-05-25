import {StyleSheet} from 'react-native';

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
export default styles;