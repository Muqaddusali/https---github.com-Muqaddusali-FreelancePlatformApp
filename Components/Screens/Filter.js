import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState} from 'react'
import { height, width } from 'react-native-dimension'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



const FilterIcon = ()=>{
    const dataItem = [
        {
            id: 1,
            txt: 'Software'
        },
        {
            id: 2,
            txt: 'Design'
        },
        {
            id: 3,
            txt: 'Website'
        },
        {
            id: 4,
            txt: 'IOS'
        },
        {
            id: 5,
            txt: 'Android'
        },
        {
            id: 6,
            txt: 'UI&UX'
        },
        {
            id: 7,
            txt: 'LOGO'
        },
    ]
    return<View>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataItem}
            renderItem={({item}) => 
                <TouchableOpacity activeOpacity={0.6} style={styles.circleContainer}> 
                    <View style={styles.circle}></View>
                    <Text style={styles.listTxt}>{item.txt}</Text>
                </TouchableOpacity>
            }  
        />
    </View>
        
}

const Filter = ({navigation}) => {
    const[value , setValue]= useState(0);
    const [choosenLabel, setChoosenLabel] = useState('NewYork');
    const [choosenIndex, setChoosenIndex] = useState('0');
  return (
    <View style={styles.container}>
      <View style={{marginLeft: width(3)}}><Text style={styles.filter}>Filter</Text></View>
      <FilterIcon />
      <View style={{marginTop: height(5), marginHorizontal: width(4)}}>
        <Text style={styles.date}>Time & Date</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.box}><Text style={{color: 'black'}}>Today</Text></View>
        <View style={styles.box}><Text style={{color: 'black'}}>Yesterday</Text></View>
        <View style={styles.box}><Text style={{color: 'black'}}>This Week</Text></View>
      </View>

      <View style={styles.location}>
        <Text style={styles.locationTxt}>Location</Text>
        <View style={styles.picker}>
            <Image
            style={styles.image} 
            source={require('../Assests/location.png')}
            />
            <Picker
            style={styles.pickerContainer}
            selectedValue={choosenLabel}
            onValueChange={(itemValue, itemIndex) => {
                setChoosenLabel(itemValue);
                setChoosenIndex(itemIndex);
            }}>
            <Picker.Item label="NewYork" value="NewYork" style={{color:'black'}} />
            <Picker.Item label="Texas" value="Texas" style={{color:'black'}}/>
            <Picker.Item label="London" value="London" style={{color:'black'}}/>
            <Picker.Item label="Washington" value="Washington" style={{color:'black'}}/>
            <Picker.Item label="Singapore" value="Singapore" style={{color:'black'}}/>
            <Picker.Item label="Alaska" value="Alaska" style={{color:'black'}}/>
            <Picker.Item label="Karachi" value="Karachi" style={{color:'black'}}/>
            <Picker.Item label="Islamabad" value="Islamabad" style={{color:'black'}}/>
            <Picker.Item label="Native" value="Native" />
            <Picker.Item label="How" value="How" style={{color:'black'}}/>
            <Picker.Item label="are" value="are" style={{color:'black'}}/>
            <Picker.Item label="you" value="you" style={{color:'black'}}/>
            <Picker.Item label="Hello" value="Hello" style={{color:'black'}}/>
            <Picker.Item label="React" value="React" style={{color:'black'}}/>
            <Picker.Item label="Native" value="Native" style={{color:'black'}}/>
            <Picker.Item label="How" value="How" style={{color:'black'}}/>
            <Picker.Item label="are" value="are" style={{color:'black'}}/>
            <Picker.Item label="you" value="you" style={{color:'black'}}/>
            <Picker.Item label="Hello" value="Hello" style={{color:'black'}}/>
            <Picker.Item label="React" value="React" style={{color:'black'}}/>
            <Picker.Item label="Native" value="Native" style={{color:'black'}}/>
            <Picker.Item label="How" value="How" style={{color:'black'}}/>
            <Picker.Item label="are" value="are" style={{color:'black'}}/>
            <Picker.Item label="you" value="you" style={{color:'black'}}/>
            </Picker>
        </View>
      </View>
      <View style={{marginTop: '7%'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: '4%'}}>
        <Text style={{ marginTop: '8%', fontSize: 20, color: '#000000', fontWeight: '400' }}>Select the price range</Text>
        <Text style={{ marginTop: '8%', fontSize: 20, color: '#5669FF', fontWeight: 'bold' }}>$20-$120</Text>
        </View>
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={20}
            maximumValue={120}
            minimumTrackTintColor="#5669FF"
            maximumTrackTintColor="#000000"
            onValueChange={(value)=>{
                console.log(value.toString().split('.')[0] ) 
                setValue(value.toString().split('.')[0])
                }
            }
  
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '4%', marginTop: '15%'}}>
        <TouchableOpacity activeOpacity={0.7} style={styles.reset}><Text style={{color: 'black', fontSize: 16}}>Reset</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Client')} activeOpacity={0.7} style={styles.Apply}><Text style={{color: 'white', fontSize: 16}}>Apply</Text></TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height(2),
    },
    filter: {
        color: '#000000',
        fontWeight: '100',
        fontSize: 25,
    },
    circleContainer: {
        marginLeft: width(3),
        marginTop: height(1.5)
    },
    circle: {
        backgroundColor:'#5669FF',
        width: width(17),
        height: height(8),
        borderRadius: width(8),
    },
    listTxt: {
        marginTop: height(1.5),
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Poppins',
        textAlign: 'center'
    },
    date: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter'
    },
    box: {
        paddingVertical: width(3),
        paddingHorizontal: width(5),
        borderWidth: width(0.1),
        marginHorizontal: width(4),
        marginTop: height(2),
        borderRadius: width(2),
    },
    location: {
        marginTop: '10%',
        marginHorizontal: '8%'
    },
    locationTxt: {
        color: 'black',
        fontWeight: '500',
        fontSize: width(6),
        fontFamily: 'Inter'
    },
    pickerContainer:{
        width: '80%'
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems:'center',
        marginTop: '7%',
        borderWidth: width(0.1),
        borderRadius: width(3)
    },
    image: {
        width: '15%',
        height: '90%'
    },
    reset:{
        paddingVertical: '6%',
        paddingHorizontal: '8%',
        borderWidth: width(0.1),
        width: '30%',
        borderColor: 'grey',
        borderRadius: width(3),
    },
    Apply:{
        paddingVertical: '6%',
        paddingHorizontal: '22%',
        borderWidth: width(0.1),
        width: '60%',
        borderColor: 'grey',
        borderRadius: width(3),
        backgroundColor: '#5669FF'
    }
})