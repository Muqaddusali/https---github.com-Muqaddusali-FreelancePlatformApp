import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { height, width } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ViewMoreText from 'react-native-view-more-text';
import { ScrollView } from 'react-native-gesture-handler';

function renderViewMore(onPress){
    return(
      <Text onPress={onPress} style={{color: '#5669FF'}}>Show more</Text>
    )
  }
  function renderViewLess(onPress){
    return(
      <Text onPress={onPress} style={{color: '#5669FF'}}>Show less</Text>
    )
  }

const Component = ()=>{
    return<View style={{marginTop: height(3)}} showsVerticalScrollIndicator={false} vertical={true}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.Rev}>
                    <Image 
                    source={require('../Assests/profile_fiver.jpeg')}
                    style={styles.Image}
                    />
                    <View style={styles.RevHeading}>
                        <Text style={styles.RevHeadingTxt}>Paul walker</Text>
                        <Text style={styles.RevHeadingStar}>
                        <AntDesign name={'star'} size={12} />
                        <AntDesign name={'star'} size={12} />
                        <AntDesign name={'star'} size={12} />
                        <AntDesign name={'star'} size={12} />
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.txxt}>10 Feb</Text>
                </View>
            </View>
            <View>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    textStyle={{textAlign: 'center'}}
                    >
                    <Text style={styles.AboutTxt}>
                        This is dummy text just for testing purpose, Nothing Else,
                        Copied Text: This is dummy text just for testing purpose, Nothing Else,
                        Agian Copied: This is dummy text just for testing purpose, Nothing Else,
                    </Text>
                </ViewMoreText>
            </View>
    </View>
}
const ClientSideReviews = ({ navigation}) => {
  return (
    <View style={{marginHorizontal: width(6)}}>
        <AntDesign name={"arrowleft"} style={styles.arrow} size={20} onPress={()=> navigation.navigate('ClientTabNav')}/>
            <View style={{alignItems: 'center', marginTop: height(8)}}>
                <Image
                style={styles.image}
                source={require('../Assests/image89.png')}
                />
                <Text style={styles.text}>David Silba</Text>
            </View>

            <View style={styles.heading}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ClientAbout')}>
                    <Text style={styles.txt}>ABOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ClientsServices')}>
                    <Text style={styles.txt}>SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={[styles.txt, styles.txtx]}>REVIEWS</Text>
                </TouchableOpacity>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
                <Component/>
                <Component/>
                <Component/>
                <Component/>
                <Component/>
                <Component/>
            </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
    arrow: {
        marginTop: height(2.5),
        color: 'black'
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
        // marginHorizontal: width(6),
        marginTop: height(1),
        marginBottom: height(3)
    },
    Image: {
        height: height(5),
        width: width(10),
        borderRadius: width(5),
        marginTop: height(0.5)
    },
    Rev: {
        flexDirection:'row',   
    },
    RevHeading: {
        marginLeft: width(3)
    },
    RevHeadingTxt: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400'
    },
    RevHeadingStar: {
        flexDirection: 'row',
        color: 'gold',
    },
    txxt: {
        fontSize: 15,
        fontWeight: '400'
    },
    AboutTxt: {
        color: 'black',
        fontFamily: 'poppins',
        fontSize: 16,
    },
})
export default ClientSideReviews;