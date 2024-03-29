import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { connect, useDispatch } from 'react-redux';
import { deleteItem, incrementCount, decrementCount } from "../redux/cart/cartActions";
import Header from "../components/Header";
import Feather from 'react-native-vector-icons/Feather';
import { callPlaceOrders } from "../services/effects";
const Cart = ({ navigation, cartitems, deleteItem, user, callPlaceOrders, incrementCount, decrementCount }) => {
    const [amount,setAmount]=useState(0);
    console.log(user.jwt);
    useEffect(() => {
        console.log("at cart itesm", cartitems, user);
        let total=0;
        for(let i in cartitems){
            console.log("at cart for",i);
            total=total+cartitems[i].Price
        }
        setAmount(total);
    }, []);
    const orderItems = () => {
        const orderItems = [];
        for (let item in cartitems) {
            const tempObj = {}
            tempObj["id"] = cartitems[item].id;
            tempObj["product"] = cartitems[item];
            tempObj["Price"] = cartitems[item].Price;
            for (let i=cartitems[item].count; i>0; i--) {
                orderItems.push(tempObj);
            }
        }
        console.log(orderItems);
        callPlaceOrders(orderItems, user);
    }
    const renderItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity style={styles.product} onPress={() => { navigation.navigate('Product', { product: item }) }}>
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
                                : `${item.Title.substring(0, 23)}`}
                        </Text>
                        <View style={styles.price}>
                            <Text style={styles.pricetext}> ₹ {item.Price}</Text>
                        </View>
                    </View>
                    <View style={styles.iconview}>
                        <View style={styles.icon}>
                            <View style={styles.additems}>
                                <TouchableOpacity onPress={() => { decrementCount(item.id) }}>
                                    <Feather name="minus" size={27} style={{ color: 'green' }}></Feather>
                                </TouchableOpacity>
                                <View style={styles.countbox}>
                                    <Text style={styles.count}>{item.count}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { incrementCount(item.id) }}>
                                    <Feather name="plus" size={27} style={{ color: 'green' }}></Feather>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.deleteicon} onPress={() => { deleteItem(item.id) }}>
                                <Feather name="trash-2" size={30} style={{ color: 'red' }}></Feather>
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
            <View style={styles.top}>
                <TouchableOpacity onPress={() => { navigation.navigate('Electronics', { category: "Electronics" }) }}>
                    <View>
                        <Feather name="arrow-left" size={20} style={{ color: 'black' }}> <Text style={styles.viewAll}>Back</Text> </Feather>
                    </View>
                </TouchableOpacity>
                <View style={styles.amount}>
                    <Text style={styles.amounttext}>Amount : {amount} </Text>
                </View>
            </View>
            <SafeAreaView>
                <View style={styles.products}>
                    {cartitems ?
                        <FlatList
                            data={cartitems}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        : null
                    }
                </View>
            </SafeAreaView>
            <View style={styles.button}>
                <TouchableOpacity style={styles.addcart} onPress={() => { orderItems() }}>
                    <View style={styles.innerbutton}>
                        <Text style={{ color: 'white', fontSize: 25 }}> Place Order </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapDispatchToProps = (dispatch) => ({
    callGetProducts: (category, user) => dispatch(callGetProducts(category, user)),
    deleteItem: (deleteId) => dispatch(deleteItem(deleteId)),
    callPlaceOrders: (orders, user) => dispatch(callPlaceOrders(orders, user)),
    incrementCount: (id) => dispatch(incrementCount(id)),
    decrementCount: (id) => dispatch(decrementCount(id))
})
const mapStateToProps = (state) => {
    return {
        cartitems: state.cart.cart,
        user: state.users.users
    }
}
const styles = StyleSheet.create({
    container: {

    },
    products: {
        marginTop: 5,
        marginHorizontal: 3,
        height: 535
    },
    tinyLogo: {
        margin: 10,
        height: 120,
        width: 100,
        borderRadius: 10,
        borderWidth: 0.1
    },
    product: {
        height: 160,
        width: 380,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    extend: {
        height: 100
    },
    image: {
        justifyContent: 'center',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titletext: {
        fontWeight: '600',
        color: 'black'
    },
    iconview: {
        margin: 20,
        justifyContent: 'center'
    },
    pricetext: {
        marginTop: 10,
        fontWeight: '600',
        color: 'black',
        fontSize: 18
    },
    icon: {
    },
    price: {
    },
    viewAll: {
        padding: 15,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontWeight: '600'
    },
    addcart: {
        backgroundColor: 'black',
        height: 45,
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
    },
    additems: {
        flexDirection: 'row',
        height: 30,
        width: 77,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 20,
        borderRadius: 5
    },
    count: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'black'
    },
    countbox: {
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 20,
        alignItems: 'center',
    },
    deleteicon: {
        alignItems: 'center'
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    amount:{
        marginRight:10
    },
    amounttext:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);