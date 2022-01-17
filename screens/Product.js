import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { connect, useDispatch } from 'react-redux';
import { callGetProducts } from "../services/effects";
import { addToCart } from "../redux/cart/cartActions";
import Header from "../components/Header";
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
const Product = ({ navigation, route, addToCart }) => {
    const item = route.params.product;
    console.log(item);
    return (
        <View style={styles.container}>
            <View>
                <Header navigation={navigation}></Header>
            </View>
            <ScrollView>
                    <View style={styles.product}>
                        <View style={styles.image}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: item.Image.name,
                                }}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titletext}>
                                {item.Title}
                            </Text>
                        </View>
                        <View style={styles.priceview}>
                            <View style={styles.price}>
                                <Text style={styles.pricetext}> ₹ {item.Price}</Text>
                            </View>
                            <View style={styles.icon}>
                                <TouchableOpacity>
                                    <Feather name="heart" size={30} style={{ color: 'pink' }}></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.descriptionTitle}>Description</Text>
                            <Text style={styles.descriptionText}>
                                {item.Description}
                            </Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.addcart} onPress={ () =>{addToCart(item)} }>
                                <View style={styles.innerbutton}>
                                    <Text style={{ color: 'white', fontSize: 25 }}> Add To Cart   </Text>
                                    <Ion name="cart-outline" size={30} style={{ color: 'white' }}></Ion>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                <View style={styles.extend}>
                </View>
            </ScrollView >
        </View >
    )
}
const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product))

})
const styles = StyleSheet.create({
    container: {

    },
    products: {
        marginTop: 10,
        marginHorizontal: 3,
        alignItems: 'center'
    },
    tinyLogo: {
        marginTop: 20,
        height: 425,
        width: '100%',
        borderRadius: 10,
        borderWidth: 0.1,
    },
    product: {
        height: '100%',
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 7,
        backgroundColor: '#fff',
    },
    image: {
        alignItems: 'center',
        marginHorizontal: 13,
        borderRadius: 10
    },
    title: {
        margin: 10,
        alignItems: "center"
    },
    titletext: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black'
    },
    priceview: {
        marginTop: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pricetext: {
        fontWeight: '600',
        color: 'black',
        fontSize: 25
    },
    icon: {
        justifyContent: 'center'
    },
    price: {
        justifyContent: 'center',
    },
    extend: {
        height: 100
    },
    description: {
        margin: 12,
    },
    descriptionTitle: {
        margin: 8,
        fontWeight: '600',
        color: 'black',
        fontSize: 18
    },
    descriptionText: {
        marginTop: 5,
        marginHorizontal: 12,
        fontWeight: '600',
        fontSize: 15,
        color: 'black',
        textAlign: 'justify'
    },
    addcart: {
        backgroundColor: 'black',
        height: 40,
        width: '90%',
        borderColor: 'red',
        borderRadius: 10
    },
    button: {
        alignItems: 'center'
    },
    innerbutton: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
export default connect(null, mapDispatchToProps)(Product);