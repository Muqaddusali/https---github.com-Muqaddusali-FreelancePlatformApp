import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { height, width } from "react-native-dimension";
import FilePicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Proposel = ({navigation, navigation: {goBack}}) =>{
    const [filedata, setfileData] = useState([])
    const fileHandlerPicker = async()=>{
        try{
            const response = await FilePicker.pick({
                presentationStyle: 'fullScreen'
            })
            setfileData(response);
            allowMultiSelection: true;
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <View style={styles.Parentcontainer}>
            <View style={styles.container}>
            <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>

                <Text style={styles.heading}>Write Your proposel</Text>
                <View style={styles.InputBox}>
                    <Text style={styles.inputtxt}>Description</Text>
                    <TextInput 
                    style={styles.descriptionInput}
                    />
                </View>
                <View style={styles.doted}>
                    <Text style={styles.inputtxt}>Relevent Example</Text>
                    <View style={{alignItems: 'center', marginTop: height(6.5)}}>
                        <Text style={styles.browsetxt}>Drag files here</Text>
                        <Text style={styles.browsetxt}>or <Text onPress={fileHandlerPicker} style={{color: '#5659FF'}}>Browse</Text> to add attachments</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.types}>
                        <Text style={styles.inputtxt}>Budget</Text>
                        <TextInput />
                    </View>
                    <View style={styles.types}>
                        <Text style={styles.inputtxt}>Type</Text>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.InputBox}>
                    <Text style={styles.inputtxt}>Special Notes</Text>
                    <TextInput 
                    style={styles.descriptionInput}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('TabNavigation')}>
                <View style={styles.button}>
                    <Text style={styles.buttontxt}>Submit</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Parentcontainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    arrow: {
        marginBottom: '3%',
        color: 'black'
    },
    container:{
        marginHorizontal: width(4),
        marginTop: height(3),
    },
    heading: {
        color: '#5669FF',
        fontSize: 20,
        fontWeight: '400',
    },
    InputBox: {
        marginTop: height(2),
        borderWidth: 1,
        height: height(18),
        borderColor: '#5659FF',
    },
    inputtxt: {
        position: 'absolute',
        top: 0,
        transform: [{translateY: -10}],
        backgroundColor: '#ffffff',
        marginLeft: 10,
        paddingHorizontal: width(2),
        color: 'black'
    },
    descriptionInput: {
        width: width(92),
        height: height(19.5),

    },
    doted: {
        marginTop: height(4),
        borderStyle: 'dashed',
        borderWidth: 1,
        height: height(20),
        borderColor: '#5659FF',
    },
    types: {
        marginTop: height(4),
        borderWidth: 1,
        height: height(6),
        width: width(42),
        borderColor: '#5659FF',
        marginBottom: height(1)
    },
    button: {
        backgroundColor: '#5669FF',
        borderRadius: width(6),
        paddingVertical: height(2),
        paddingHorizontal: width(1),
        alignItems: 'center',
        width: width(35),
        alignSelf: 'center',
        marginTop: height(2)
    },
    buttontxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    browsetxt: {
        color: 'black'
    }
})
export default Proposel;