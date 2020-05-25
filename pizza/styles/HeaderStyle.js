import { StyleSheet } from 'react-native';

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
});
export default styles;