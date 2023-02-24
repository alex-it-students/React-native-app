import {
    Pressable,
    Text,
    TextInput,
    View
} from "react-native";
import React
    from "react";
import styles
    from "../assets/styles";

const AddBar = ({addGoal, addNewGoal}) => {
    return (
        <View style={{ flexDirection:'row', position: 'absolute', bottom:0, backgroundColor: 'white', width:'100%' }}>
            <TextInput
                onChangeText={addNewGoal}
                variant="outlined"
                placeholder=" Add a Task"
                style={{width:'80%', marginBottom:0, textAlign:'center' }} />
            <Pressable
                onPress={addGoal}
                style={{height: 56, width:'15%', backgroundColor: '#5471d2', borderRadius: 90
                }}
                pressEffect={"ripple"}
            >
                <Text
                    style={styles.button}>
                    +
                </Text>
            </Pressable>
        </View>
    )
}

export default AddBar