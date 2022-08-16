import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { height, width } from 'react-native-dimension'
import FilePicker from 'react-native-document-picker';

const ProjectDetail3 = ({navigation}) => {
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
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: '5%', flex: 1}}>
        <AntDesign name={"arrowleft"} style={styles.arrow} size={27} onPress={() => goBack()}/>

        <ScrollView scroll>
        <Text style={{color: '#5669FF', fontSize: 18, marginTop: '3%', fontWeight: '400', textAlign: 'center'}}>Project Details</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.types}>
                    <Text style={styles.inputtxt}>Catogery</Text>
                    <TextInput />
                </View>
                <View style={styles.types}>
                    <Text style={styles.inputtxt}>Sub catogery</Text>
                    <TextInput />
                </View>
            </View>
            <View style={styles.project}>
                <Text style={styles.inputtxt}>Project Title</Text>
                <TextInput />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.inputtxt}>Description</Text>
                <TextInput 
                style={styles.descriptionInput}
                />
            </View>
            <View style={styles.doted}>
                <Text style={styles.inputtxt}>Upload Media</Text>
                <View style={{alignItems: 'center', marginTop: height(6.5)}}>
                    <Text style={styles.browsetxt}>Drag files here</Text>
                    <Text style={styles.browsetxt}>or <Text onPress={fileHandlerPicker} style={{color: '#5659FF'}}>Browse</Text> to add attachments</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                <Text style={styles.inputtxt}>Special notes</Text>
                <TextInput 
                style={styles.descriptionInput}
                />
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('TabNavigation')}>
                <View style={styles.button}>
                    <Text style={styles.buttontxt}>Bid</Text>
                </View>
                </TouchableOpacity>
        </ScrollView>

      </View>

    </View>
  )
}

export default ProjectDetail3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    arrow: {
        marginTop: height(2.5),
        color: 'black'
    },
    types: {
        marginTop: height(4),
        borderWidth: 1,
        height: height(6),
        width: '45%',
        borderColor: '#5659FF',
    },
    inputtxt: {
        position: 'absolute',
        top: 0,
        transform: [{translateY: -10}],
        backgroundColor: '#ffffff',
        marginLeft: 10,
        paddingHorizontal: width(2),
        color: 'black',
        fontSize: 11
    },
    project: {
        marginTop: height(3),
        borderWidth: 1,
        height: height(6),
        width: '100%',
        borderColor: '#5659FF',
    },
    InputBox: {
        marginTop: height(2),
        borderWidth: 1,
        height: height(18),
        borderColor: '#5659FF',
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
    browsetxt: {
        color: 'black'
    },
    button: {
        backgroundColor: '#5669FF',
        borderRadius: width(6),
        paddingVertical: height(2),
        paddingHorizontal: width(1),
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
        marginTop: height(2),
        marginBottom: '7%'
    },
    buttontxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
})