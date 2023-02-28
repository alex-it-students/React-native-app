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
    useEffect,
    useState
} from "react";

const GoalList = ({index, item, removeGoal, editGoal}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [editedGoal, setEditedGoal] = useState(item);
    useEffect(() => {
        setEditedGoal(item);
    }, [item]);



    const handleEdit = () => {
        editGoal(index, editedGoal);
        setEditedGoal(item);
        setModalVisible(false);
    };

    console.log(editedGoal)

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
                transparent={true}
                >
                <View
                    style={{
                        height:'100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                <View
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        margin: 50,
                        marginTop: '70%',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#5c6773'
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            backgroundColor:'#5471d2',
                            color: 'white',
                            padding: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius:10
                        }}>
                        <Text
                            style={{color: 'white'}}>Edit Task</Text>
                        <TouchableOpacity onPress={()=> setModalVisible(false)}>
                            <Text
                                style={{color: 'white'}}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ height: 40, width: '100%', marginVertical:20 }}>
                        <TextInput
                            onChangeText={(text) => setEditedGoal(text)}
                            variant="outlined"
                            value={editedGoal}
                            style={{ width: '100%', marginBottom: 0, textAlign: 'center'}} />
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}>
                        <Pressable
                            onPress={handleEdit}
                            style={{
                                width:'100%',
                                backgroundColor: '#5471d2',
                                padding: 10,
                                alignSelf:'center',
                                borderBottomLeftRadius:10,
                                borderBottomRightRadiusRadius:10
                            }}
                            android_ripple={{ color: 'skyblue' }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color:'white'}}>
                                Edit Task
                            </Text>
                        </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
        </>
    );
}

export default GoalList