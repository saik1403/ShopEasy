import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from "react-native";
import { connect, useDispatch } from 'react-redux';
import { callGetProducts } from "../services/effects";
import Header from "../components/Header";
import Feather from 'react-native-vector-icons/Feather';
const Products = ({ navigation, route, callGetProducts, user,products }) => {
    const val = true;
    console.log(user.jwt);
    useEffect(()=>{
        callGetProducts(route.params.category,user);
    },[]);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.product}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Product',{product:item})}}>
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
                            {item.Title.length < 30
                                ? `${item.Title}`
                                : `${item.Title.substring(0, 20)}...`}
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
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Header navigation={navigation}></Header>
            </View>
            <ScrollView>
                {/* <View>
                    {Data && showProducts(Data)}
                </View>
                <Text>{route.params.categorie}</Text> */}
            </ScrollView>
            <SafeAreaView>
            <View style={styles.products}>
                {products ?
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
                : null
            }
            </View>
            </SafeAreaView>
        </View>
    )
}
const mapDispatchToProps = (dispatch) => ({
    callGetProducts: (category, user) => dispatch(callGetProducts(category, user))
})
const mapStateToProps = (state) => {
    return {
        user: state.users.users,
        products:state.products.products
    }
}
const styles = StyleSheet.create({
    container: {

    },
    products: {
        marginTop: 10,
        marginHorizontal: 3,
        alignItems: 'center'
    },
    tinyLogo: {
        marginTop: 10,
        height: 140,
        width: 120,
        borderRadius: 10,
        borderWidth: 0.1,
    },
    product: {
        height: 225,
        width: 180,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff',
    },
    extend:{
        height:100
    },
    image: {
        alignItems: 'center',
    },
    title: {
        marginTop: 5,
        alignItems: "center"
    },
    titletext: {
        fontWeight: '600',
        color: 'black'
    },
    priceview: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    pricetext: {
        fontWeight: '600',
        color: 'black',
        fontSize: 18
    },
    icon: {
        justifyContent: 'center'
    },
    price: {
        justifyContent: 'center'
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Products);
