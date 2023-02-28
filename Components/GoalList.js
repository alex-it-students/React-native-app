import {
    Text,
    TouchableOpacity,
    View,
    Modal,
    TextInput,
    Pressable
} from "react-native";
import React
    , {
    useState
} from "react";
import myStyles
    from "../assets/myStyles";

const GoalList = ({index, item, removeGoal, editGoal}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [editedGoal, setEditedGoal] = useState(item);
    const handleEdit = () => {
        editGoal(index, editedGoal);
        setModalVisible(false);
    };

    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                borderStyle: 'solid',
                borderColor: '#5c6773',
                borderWidth: 1,
                paddingVertical:20,
                paddingHorizontal:15,
                margin:0,
                backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                <TouchableOpacity onPress={()=> setModalVisible(true)}>
                <Text style={{fontSize: 16}}>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> removeGoal(index)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={modalVisible}
                animationType={"fade"}
                onRequestClose={() => {setModalVisible(!modalVisible);}}>
                <View
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        margin: 50,
                        borderRadius: 10,
                        padding: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <View>
                        <Text>Edit Task</Text>
                    </View>
                    <View
                        style={{ height: 40, width: '100%' }}>

                        <TextInput
                            onChangeText={setEditedGoal}
                            variant="outlined"
                            value={editedGoal}
                            style={{ width: '100%', marginBottom: 0, textAlign: 'center' }} />
                        <Pressable
                            onPress={handleEdit}
                            style={{height: 56, width:'20%', backgroundColor: '#5471d2'
                            }}
                            android_ripple={{ color: 'skyblue' }}
                        >
                            <Text
                                style={myStyles.modalButton}>
                                Edit Task
                            </Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </>
    );
}

export default GoalList