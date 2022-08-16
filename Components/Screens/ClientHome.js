import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from "react-native-dimension";
import Services from "./Services";


const Topics = (props)=>{
    return<View style={styles.topic}>
    <Text style={styles.text}>{props.text}</Text>
</View>
}
const MainCard =(props)=>{
    return<TouchableOpacity activeOpacity={0.8}
    onPress = {() => {
        props.sendProps(props.heading, props.text, props.destination, props.price, props.description)
    }}>
        <View style={styles.MainCardContainer}>
        <Image 
        source={require('../Assests/Rectangle19.png')}
        style={styles.image}
        />
        <View style={styles.MainCardContainerBottom}>
            <Text style={styles.headingtxt}>{props.heading}</Text>
            <View style={styles.parentMainCard}>
                <View>
                    <Text style={styles.txt}>{props.text}</Text>
                    <TouchableOpacity>
                        <Text>see more</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.price}>
                        <Text style={styles.priceTxt}>$500-1k</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </TouchableOpacity>
}
const BottomCard = (props)=>{
    return <View style={styles.BottomCardContainer}>
    <TouchableOpacity
    onPress = {() => {
        props.sendProps(props.heading, props.text, props.destination, props.price, props.description)
    }}>
    <Image 
    source={props.destination}
    style={styles.BottomCardimage}
    />
    <View style={styles.BottomCardContainerBottom}>
        <Text style={styles.BottomCardheadingtxt}>{props.heading}</Text>
        <View style={{width: '100%',...styles.parentMainCard}}>
            <View style={{width: '45%'}}>
                <Text style={{flex: 1,...styles.BottomCardtxt}}>{props.text}</Text>
            </View>
            <TouchableOpacity style={{width: '50%'}} activeOpacity={0.7}>
                <View style={styles.BottomCardprice}>
                    <Text style={styles.BottomCardpriceTxt}>{props.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    </TouchableOpacity>
</View>
}
const ClientHome = ({navigation})=>{
    const sendProps = (heading, text, destination, price,description) => {
        navigation.navigate('ProjectDetail1', {
            heading: heading,
            text: text,
            destination: destination,
            price: price,
            description: description
        })
    }
        const Topics1 = [
            {
                key: 1,
                text: "Graphic Designing"
            },
            {
                key: 2,
                text: "Content Writing"
            },
            {
                key: 3,
                text: "Logo Designing"
            },
            {
                key: 4,
                text: "Virtual assistance"
            },
            {
                key: 5,
                text: "Logo Designing"
            },
        ]
        const mainCardData = [
            {
                key: 1,
                heading: "Mobile App UI Design",
                text: "Make an Attractive and user Friendly app design",
                destination: require('../Assests/Rectangle19.png'),
                price: '$500-1k',
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 2,
                heading: "Mobile App UI Design",
                text: "Make an Attractive and user Friendly app design",
                destination: require('../Assests/Rectangle19.png'),
                price: '$500-1k',
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            }
        ]
        const bottomCardData = [
            {
                key: 1 ,
                heading: "Ft Company" ,
                text: "Social media manager Community manager" ,
                destination: require('../Assests/Rectangle23.png'),
                price: '$200-500',
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 2,
                heading: "sr enterprises" ,
                text: "Website design developer coder" ,
                destination:require('../Assests/Rectangle24.png'),
                price: "$200-500",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 3,
                heading: "" ,
                text: "Graphic designing App design UI&UX" ,
                destination:require('../Assests/Rectangle20.png'),
                price: "$350-700",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 4,
                heading: "" ,
                text:"Photography Videography video editing",
                destination:require('../Assests/Rectangle35.png') ,
                price: "$200-500",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key:5 ,
                heading: "Ft Company" ,
                text: "Website design developer coder" ,
                destination: require('../Assests/Rectangle24.png'),
                price: "$200-500",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key:6 ,
                heading: "Ft Company" ,
                text: "Social media manager Community manager" ,
                destination:require('../Assests/Rectangle23.png') ,
                price: "$350-700",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 7,
                heading: "Ft Company" ,
                text: "Website design developer coder" ,
                destination:require('../Assests/Rectangle24.png') ,
                price: "$200-500",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 8,
                heading: "Ft Company" ,
                text: "Social media manager Community manager" ,
                destination:require('../Assests/Rectangle23.png') ,
                price: "$350-700",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
            {
                key: 9,
                heading: "Ft Company" ,
                text: "Website design developer coder" ,
                destination:require('../Assests/Rectangle24.png') ,
                price: "$200-500",
                description: 'My aim is to get very eye catching and user Friendly app design so i can get it developed properly.My aim is to get very eye catching and user Friendly app design so i can get it developed properly. My aim is to get very eye catching and user Friendly app design so i can get it developed properly. Cheers'
    
            },
        ]
        return(
            <>
            <View style={styles.conatiner}>
                <View style={styles.searchConatiner}>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('AfterSearching')} style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: '2%'}}>
                        <Text style={styles.textInput}>Search</Text>
                        <AntDesign name="search1" size={20} color={'#5669FF'}/>
                    </TouchableOpacity>
                </View>
                    <View style={{marginLeft: '3.5%', marginTop: '3.5%'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                Topics1.map(item =>{   
                                    return <Topics key = {item.key} text={item.text}/>
                                })
                            }
                        </ScrollView>
                    </View>
                <ScrollView vertical={true} showVerticalScrollIndicator={false}>
                    <View style={{marginLeft: '3.5%', marginTop: '10%', justifyContent: 'space-between'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                mainCardData.map(item =>{
                                    return <MainCard heading={item.heading} text={item.text}  key={item.key} destination={item.destination} price={item.price} description={item.description} sendProps={sendProps}/>
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
    
                        {
                            bottomCardData.map(item=>{
                                return <BottomCard heading={item.heading} text={item.text} destination={item.destination} price={item.price} key={item.key} description={item.description} sendProps={sendProps}/>
                            })
                        }
                       
                    </View>
                </ScrollView>
            </View>
          </>
        )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundcolor: '#eeeeee',
    },
    searchConatiner: {
        borderWidth: 1,
        marginTop: '8%',
        marginHorizontal: '3.5%',
        borderColor: '#5669FF',
        borderRadius: width(3),
        paddingHorizontal: width(2),
        height: height(4.5),
    },
    textInput: {
        color: '#5669FF',
        textAlignVertical: 'center'
    },
    topic: {
        height: height(3),
        borderWidth: 1,
        borderRadius: width(3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width(1),
        marginTop: height(1.5),
        marginRight: width(1.5),
        backgroundColor: '#EEF0FF',
        borderColor: '#5669FF',    
    },
    MainCardContainer: {
        width: '95%',
        height: height(28),
        borderWidth: 1,
        borderColor: '#5669FF',
        borderRadius: height(3),
        paddingBottom: height(4),
        marginRight: width(3)
    },
    text: {
        color: '#5669FF',
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Inter',
    },
    MainCardContainerBottom: {
        marginTop: height(1),
        marginLeft: height(1)
    },
    headingtxt: {
        color: '#5669FF',
        fontSize: width(3),
        fontWeight: '700'
    },
    parentMainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txt: {
        color: '#000000',
        fontSize: width(3),
        maxWidth: width(30)
    },
    image :{
        width: width(61.5),
        height: height(14),
        borderRadius: height(3)
    },
    price: {
        width: width(23),
        height: height(4),
        backgroundColor: '#EEF0FF',
        borderWidth: 1,
        borderColor: '#5669FF',
        borderRadius: width(4),
        justifyContent: 'center',
        marginTop: height(4),
        marginRight: width(2)
        
    },
    priceTxt: {
        color: '#5669FF',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700'

    },
    BottomCardContainer: {
        marginTop: '7%',
        marginHorizontal: '3.5%', 
        width: width(29),
        height: height(20),
        borderWidth: 1,
        borderColor: '#5669FF',
        borderRadius: height(2),
        paddingBottom: height(3),
        marginRight: width(0.5)
    },
    BottomCardtext: {
        color: '#5669FF',
        fontWeight: '400',
        fontSize: 12,
        fontFamily: 'Inter',
    },
    BottomCardContainerBottom: {
        marginTop: height(0.7),
        marginLeft: height(0.7)
    },
    BottomCardheadingtxt: {
        color: '#5669FF',
        fontSize: 10,
        fontWeight: '400'
    },
    BottomCardparentMainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BottomCardtxt: {
        color: '#000000',
        fontSize: 6,
        fontWeight: '400',
        maxWidth: width(15)
    },
    BottomCardimage :{
        width: width(28.5),
        height: height(11),
        borderRadius: height(2)
    },
    BottomCardprice: {
        width: width(12),
        height: height(2),
        backgroundColor: '#EEF0FF',
        borderWidth: 1,
        borderColor: '#5669FF',
        borderRadius: width(4),
        justifyContent: 'center',
        marginTop: height(2),
        marginRight: width(1),
        alignContent: 'center',        
    },
    BottomCardpriceTxt: {
        fontSize: 7,
        fontWeight: '500',
        color: '#5669FF',
        textAlign: 'center',
    }
})
export default ClientHome;