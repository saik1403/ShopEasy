import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from '../components/Header';
import { connect } from "react-redux";
import Feather from 'react-native-vector-icons/Feather';
const Profile = ({navigation,user}) =>{
    return(
        <View>
            <View>
                <Header navigation={navigation}></Header>
            </View>
            <View style={styles.headinfo}>
                <View style={styles.proimageview}>
                    <Image style={styles.proimage}source={require('../Assets/images/profile.jpg')}></Image>
                </View>
                <View style={styles.headdetails}>
                    <View style={styles.nameview}>
                        <Text style={styles.name}>{user.username}</Text>
                    </View>
                    <View>
                        <Text style={styles.idnumber}>
                            MB 4350
                        </Text>
                        <Text style={styles.idtext}>
                            ID Number
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.toprow}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Full Name</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}>{user.username}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>User Name</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}>{user.username}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Phone </Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}>(+91)901087861</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Email Address</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}>{user.email}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Shipping Address</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}>Hno:a4-4/2,Hyderabad</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Total Orders</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <Text style={styles.second}> 15 </Text>
                    </View>
                </View>
                <View style={styles.downrow}>
                    <View style={styles.toprowleft}>
                        <Text style={styles.first}>Edit Profile</Text>
                    </View>
                    <View style={styles.toprowright}>
                        <TouchableOpacity>
                        <Feather name="edit" size={30}></Feather>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.users.users
    }
}
const styles=StyleSheet.create({
    headinfo:{
        borderColor:'red',
        marginTop:25,
        margin:15,
        height:130,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10
    },
    proimageview:{
        height:'100%',
        width:'35%',
    },
    proimage:{
        height:'100%',
        width:'100%',
        borderRadius:13
    },
    headdetails:{
        margin:13
    },
    nameview:{
        marginBottom:15
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    },
    idnumber:{
        color:'black',
        fontSize:16,
        fontWeight:'400'
    },
    idtext:{
        fontSize:13
    },
    details:{
        marginTop:30,
        margin:15,
        border:1,
        borderRadius:13,
        height:'100%'
    },
    toprow:{
        flexDirection:'row',
        height:50,
        width:'100%',
        backgroundColor: '#fff',
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        justifyContent:'space-between',
        margin:1.5
    },
    toprowleft:{
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'   
    },
    toprowright:{
        marginRight:20,
        justifyContent:'center',
        alignItems:'center'   
    },
    first:{
        fontWeight:'bold',
        color:'black',
        fontSize:15
    },
    second:{
        fontSize:14,
        color:'black'
    },
    row:{
        flexDirection:'row',
        height:50,
        width:'100%',
        backgroundColor: '#fff',
        // borderTopLeftRadius:13,
        // borderTopRightRadius:13,
        justifyContent:'space-between',
        margin:1.5
    },
    downrow:{
        flexDirection:'row',
        height:50,
        width:'100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius:13,
        borderBottomRightRadius:13,
        justifyContent:'space-between',
        margin:1.5
    }
});
export default connect(mapStateToProps)(Profile);