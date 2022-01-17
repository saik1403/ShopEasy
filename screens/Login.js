import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CreateAccount from './CreateAccount';
import * as Animatable from 'react-native-animatable';
import Fa from 'react-native-vector-icons/FontAwesome';
import { callLoginApi } from '../services/effects';
import { connect, useDispatch } from 'react-redux';
import {storeUsers} from '../redux/users/usersActions';
const Login = ({navigation,callLoginApi}) =>{
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const checkCredentials = async () => {
      if (!email || email === '') {
        setError('Please Enter a Email');
        return
      }
      if (!Password || Password === '') {
        setError('Please enter Password');
        return
      }
      const user={
          identifier: email,
          password: Password
        };
      console.log(user);
      const isLoginSuccess = await callLoginApi(user);
      if(isLoginSuccess){
        setEmail("");
        setPassword("");
        navigation.navigate('TabRoutes');
      }
      else{
        setError("Email or password invalid");
      }
    }

    return (
      <View style={styles.container} >
        <View style={styles.top}>
          <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.logintext}> Welcome Back! </Text>
            <Text style={styles.loginslogan}> Log back into your account</Text>
          </View>
          <View >
            <Animatable.Image
              animation="bounceIn" 
              duration={1500}
              style={styles.tinyLogo}
              source={require('../Assets/images/logo.png')}
            />
          </View>
        </View>
        <Animatable.View style={styles.login} animation="fadeInUpBig" duration={900}>
          <Text style={styles.logintextdown}>Login</Text>
          <Text style={styles.lables}>User Name</Text>
          <View style={styles.icons}>
          <Fa name="at" size={45} style={{marginLeft:15}}></Fa>
          <TextInput
            style={styles.inputbox}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />
          </View>
          <Text style={styles.lables}>Password</Text>
          <View style={styles.icons}>
          <Fa name="key" size={45} style={{marginLeft:10}}></Fa>
          <TextInput
            style={styles.inputbox}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={Password}
            placeholder="Enter password"
          />
          </View>
          <Text style={styles.error}> {error} </Text>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => {
              checkCredentials();
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup} onPress={() => { navigation.navigate('CreateAccount') }}>
            <Text style={{ fontSize: 15 }}> Didn't have an Account   </Text>
            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 15 }}>Sign Up</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
  
    );
  }
  const mapDispatchToProps = (dispatch) => ({
      callLoginApi: (user) => dispatch(callLoginApi(user))
  })
//   const mapDispatchToProps = (dispatch) => ({
//     onLoginClick: (user) => dispatch(onLoginClick(user)),
//     resetCurrentFormData: () => dispatch(resetCurrentFormData())
// })
  const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 0,
      flex: 1,
      backgroundColor: 'bisque',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial',
    },
    container1: {
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      fontFamily: 'Arial',
    },
    logintext: {
      fontWeight: 'bold',
      color: 'black',
      padding: 5,
      fontSize: 40,
      textAlign: 'center'
    },
    loginslogan: {
      fontWeight: 'bold',
      color: 'black',
      padding: 5,
      fontSize: 20,
      textAlign: 'center'
    },
    login: {
      justifyContent: 'center',
      height: '60%',
      width: '100%',
      overflow: 'hidden',
      padding: 5,
      backgroundColor: 'mintcream',
      borderRadius: 15,
      borderTopRightRadius: 30,
      marginHorizontal: 20,
      borderTopLeftRadius: 30,
      marginBottom: 15
    },
    inputbox: {
      flexDirection: 'row',
      width:285,
      height: 48,
      padding: 5,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      borderRadius: 15,
      marginHorizontal: 15,
      marginVertical: 3
    },
    loginbutton: {
      marginTop: 20,
      alignItems: "center",
      backgroundColor: "yellowgreen",
      padding: 10,
      marginHorizontal: 20,
      borderRadius: 20
    },
    signup: {
      flexDirection: 'row',
      fontSize: 10,
      fontWeight: 'bold',
      marginTop: 10,
      justifyContent: 'flex-end',
      alignContent: 'space-between',
      color: 'white',
    },
    lables: {
      padding: 15,
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center'
    },
    error: {
      fontWeight: 'bold',
      color: 'red'
    },
    top: {
      height: '45%',
      marginTop: 23,
    },
    tinyLogo: {
      margin: 10,
    },
    logintextdown: {
      fontWeight: 'bold',
      color: 'black',
      padding: 5,
      fontSize: 25,
      textAlign: 'left'
    },
    icons:{
      flexDirection:'row'
    }
  });
  export default connect(null, mapDispatchToProps)(Login);