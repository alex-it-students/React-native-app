import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        paddingTop: '5%'
    },
    button:{
        textAlign: 'center',
        height: 56,
        width: '100%',
        paddingTop: 6,
        color: 'white',
        fontSize: 30
    },
    GoalList: {
        padding:40,
        marginTop:'15%'
    }
});

export default styles