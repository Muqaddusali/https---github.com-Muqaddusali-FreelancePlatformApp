import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { height, width } from "react-native-dimension";
import ViewMoreText from 'react-native-view-more-text';
import AntDesign from 'react-native-vector-icons/AntDesign'




const ClientSideAbout =( {navigation, navigation: { goBack } })=>{
    function renderViewMore(onPress){
        return(
          <Text onPress={onPress} style={{color: '#5669FF',
            alignSelf: 'flex-end',

        }}>Read more</Text>
        )
      }
      function renderViewLess(onPress){
        return(
          <Text onPress={onPress} style={{color: '#5669FF',
          alignSelf: 'flex-end',

        
        }}>Read less</Text>
        )
      }
    return(
        <View style={styles.container}>
            <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={()=>goBack()}/>
            <View style={{alignItems: 'center', marginTop: height(8)}}>
                <Image
                style={styles.image}
                source={require('../Assests/image89.png')}
                />
                <Text style={styles.text}>David Silba</Text>
            </View>

            <View style={styles.heading}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={[styles.txt, styles.txtx]}>ABOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ServicesTwo')}>
                    <Text style={styles.txt}>SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Reviews')}>
                    <Text style={styles.txt}>REVIEWS</Text>
                </TouchableOpacity>
            </View> 

            <View style={{marginHorizontal: width(4),  borderBottomWidth: 0.5, marginTop: '4%'}}>
                <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    textStyle={{textAlign: 'left'}}
                    >
                    <Text style={styles.AboutTxt}>
                        This is dummy text just for testing purpose, Nothing Else,
                        Copied Text: This is dummy text just for testing purpose, Nothing Else,
                        Agian Copied: This is dummy text just for testing purpose, Nothing Else,
                    </Text>
                </ViewMoreText>
                </ScrollView>
            </View>            

            <View style={{marginHorizontal: width(4), borderBottomWidth: 0.5, marginTop: '4%'}}>
                <Text style={styles.companytxt}>Our Comapny</Text>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    >
                    <Text style={styles.AboutTxt}>
                        This is dummy text just for testing purpose, Nothing Else,
                        Copied Text: This is dummy text just for testing purpose, Nothing Else,
                        Agian Copied: This is dummy text just for testing purpose, Nothing Else,                    </Text>
                </ViewMoreText>
            </View>       

        </View>
    );
}

const styles = StyleSheet.create({
    arrow: {
        marginTop: height(2.5),
        marginLeft: width(4),
        color: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: width(20),
        height: height(11),
        borderRadius: width(10), 
    },
    text: {
        marginTop: height(2),
        fontSize: 24,
        fontWeight: '400', 
        fontFamily: 'poppins',
        color: 'black'
    },
    txt: {
        fontSize: 16,
        fontWeight: '400', 
        fontFamily: 'poppins',
    },
    txtx: {
        color: '#5669FF',
        borderBottomWidth: 2,
        borderBottomColor: '#5669FF',
        paddingBottom: height(0.5)
    },
    txtxx: {
        color: '#5669FF'
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: width(6),
        marginTop: height(1),
        marginBottom: height(3)
    },
    AboutTxt: {
        color: 'black',
        fontFamily: 'poppins',
        fontSize: 16,
        lineHeight: height(3)
    },
    companytxt: {
        marginTop: height(1),
        color:'#5669FF',
        fontFamily: 'poppins',
        fontSize: 16,
        fontWeight: '400'
    },
    
});
export default ClientSideAbout;