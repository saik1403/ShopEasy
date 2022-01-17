import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../redux/users/usersActions';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { callSignUpApi } from '../services/effects';
const CreateAccount = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const addUser = async () => {
        let isExist = false;
        if (!userName || userName === '') {
            setError('Please Enter user name');
            return
        }
        if (userName.length < 3) {
            setError("Enter Valid userName length greater than 3");
            return
        }
        if (!email || email === '') {
            setError('Please Enter email');
            return
        }
        if (email.length < 3) {
            setError("Enter Valid email");
            return
        }
        if (!Password || Password === '') {
            setError('Please enter Password');
            return
        }
        if (Password.length < 3) {
            setError("Enter a valid password length greater than 3");
            return
        }
        const user = {
            username: userName,
            email: email,
            provider: "local",
            password: Password
        };
        let data = await callSignUpApi(user);
        console.log(data);
        if (data != "success") {
            setError(data);
        }
        else {
            setUserName('');
            setEmail('');
            setPassword('');
            setError('');
            navigation.navigate('Login');
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ height: '30%' }}>
                    <Text style={styles.signuptext}> Sign Up </Text>
                    <Text style={styles.signupslogan}> Let's creat your account</Text>
                </View>
                <View style={{ justifyContent: 'space-between' }}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        style={styles.tinyLogo}
                        source={require('../Assets/images/logo.png')}
                    />
                </View>
            </View>
            <Animatable.View style={styles.signups} animation="slideInUp" duration={800}>
                <Text style={styles.lables}>User Name</Text>
                <View style={styles.icons}>
                    <Icon name="user" size={45} style={{ marginLeft: 15 }}></Icon>
                    <TextInput
                        style={styles.inputbox}
                        onChangeText={setUserName}
                        value={userName}
                        placeholder="Enter User Name"
                    />
                </View>
                <Text style={styles.lables}>Email</Text>
                <View style={styles.icons}>
                    <Icon name="at" size={45} style={{ marginLeft: 15 }}></Icon>
                    <TextInput
                        style={styles.inputbox}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter Email"
                    />
                </View>
                <Text style={styles.lables}>Password</Text>
                <View style={styles.icons}>
                    <Icon name="key" size={45} style={{ marginLeft: 10 }}></Icon>
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
                    style={styles.signupbutton}
                    onPress={() => {
                        addUser();
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}
const mapDispatchToProps = (dispatch) => ({
    callSignUpApi: (user) => dispatch(callSignUpApi(user))
})
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
    signuptext: {
        fontWeight: 'bold',
        color: 'black',
        padding: 5,
        fontSize: 40,
        textAlign: 'center'
    },
    signups: {
        justifyContent: 'center',
        height: '60%',
        width: '100%',
        overflow: 'hidden',
        marginTop: 10,
        padding: 5,
        backgroundColor: 'mintcream',
        borderRadius: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    inputbox: {
        flexDirection: 'row',
        width: 285,
        height: 48,
        padding: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 3
    },
    signupbutton: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "yellowgreen",
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 20
    },
    signup: {
        marginTop: 10,
        justifyContent: 'flex-start',
        alignContent: 'flex-end',
        color: 'white'
    },
    lables: {
        fontSize: 16,
        padding: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontWeight: 'bold',
        color: 'red'
    },
    top: {
        height: '40%'
    },
    signupslogan: {
        fontWeight: 'bold',
        color: 'black',
        padding: 5,
        fontSize: 20,
        textAlign: 'center'
    },
    icons: {
        flexDirection: 'row'
    }
});
export default connect(null, mapDispatchToProps)(CreateAccount);