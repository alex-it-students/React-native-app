import {
    Text,
    TextInput,
    View,
    Pressable
} from "react-native";
import React
    from "react";
import myStyles
    from "../assets/myStyles";

const AddBar = ({addGoal, addNewGoal}) => {
    return (
        <View style={{ flexDirection:'row', backgroundColor: 'white', width:'100%', opacity:.85 }}>
            <TextInput
                onChangeText={addNewGoal}
                variant="outlined"
                placeholder=" Add a Task"
                style={{width:'80%', marginBottom:0, textAlign:'center' }} />
            <Pressable
                onPress={addGoal}
                style={{height: 56, width:'20%', backgroundColor: '#5471d2'
                }}
                android_ripple={{ color: 'skyblue' }}
            >
                <Text
                    style={myStyles.button}>
                    +
                </Text>
            </Pressable>
        </View>
    )
}

export default AddBar