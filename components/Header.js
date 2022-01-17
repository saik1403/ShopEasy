import React from "react";
import { Text, View,StyleSheet,TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Fa from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";
const Header = ({navigation}) =>{
    return(
        <View style={styles.container}>
        <View style={{justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{ navigation.navigate('Home') }}>
        <Animatable.Image
              animation="bounceIn" 
              duration={600}
              style={styles.tinyLogo}
              source={require('../Assets/images/logo.png')}
            />
        </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <TextInput style={styles.inputbox}>
            <Feather name="search" size={20}></Feather>
              <Text>   Search Any Thing</Text>  
            </TextInput>
        </View>
        <View style={{justifyContent:'center'}}>
        <TouchableOpacity >
        <Feather name="align-justify" size={40} style={styles.icon}></Feather>
        </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:70,
        width:'100%',
        padding: 0,
        flexDirection:'row',
        backgroundColor: '#fff',
        justifyContent:'space-between',
    },
    tinyLogo:{
        marginLeft:10,
        height:80,
        width:100,
    },
    inputbox: {
        flexDirection: 'row',
        width:200,
        height: 48,
        margin:10,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 15,
        marginVertical: 3,
        backgroundColor:'#DCDCDC'
      },
    icon:{
        marginRight:7,
    },
    inputtext:{
        backgroundColor:'#D3D3D3',
    }
});
export default Header;