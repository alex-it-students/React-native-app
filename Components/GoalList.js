import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React
    from "react";

const GoalList = ({index, item, removeGoal}) => {

    return (
        <>
            <View style={{ flexDirection: 'row',
                justifyContent:'space-between',
                borderStyle: 'solid',
                borderColor: '#5c6773',
                borderWidth: 1,
                paddingVertical:20,
                paddingHorizontal:15,
                margin:0,
                backgroundColor: 'rgba(255, 255, 255, 0.65)'}}>
                <Text style={{fontSize: 16}}>{item}</Text>
                <TouchableOpacity onPress={()=> removeGoal(index)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default GoalList