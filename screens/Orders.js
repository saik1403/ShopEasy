import  React from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { connect, useDispatch } from 'react-redux';
import { callGetOrders } from "../services/effects";
import Header from "../components/Header";
import Feather from 'react-native-vector-icons/Feather';
const Orders = ({ user, orders, callGetOrders, navigation }) => {
    useEffect(()=>{
        callGetOrders(user);
    },[]);
    const renderItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity style={styles.product} onPress={() => { navigation.navigate('Product', { product: item.product }) }}>
                    <View style={styles.image}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.product.Image.name,
                            }}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titletext}>
                            {item.product.Title.length < 30
                                ? `${item.product.Title}`
                                : `${item.product.Title.substring(0, 25)}.`}
                        </Text>
                        <View style={styles.price}>
                            <Text style={styles.pricetext}> ₹ {item.product.Price}</Text>
                        </View>
                    </View>
                    <View style={styles.iconview}>
                        <View style={styles.icon}>
                            <TouchableOpacity >
                                <Feather name="check-circle" size={30} style={{ color: 'green' }}></Feather>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const showOrders = () => {
        return (
            <View>
            {orders.map((order, index) => {
                return (
                    <View key={index}>
                        <View style={{margin:7}}>
                            <Text style={styles.purchase}>Purchased On  {order.created_at.substring(0,10)} </Text>
                        </View>
                        <FlatList
                            data={order.OrderItems}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                )
            })}
          </View>
        );
    }
    return (
        <View style={styles.container}>
            <View>
                <Header navigation={navigation}></Header>
            </View>
            <View>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start'}}onPress={() => { navigation.navigate('Electronics', { category: "Electronics" }) }}>
                    <View style={{width:'40%',margin:5}}>
                        <Feather name="arrow-left" size={20} style={{ color: 'black' }}> <Text style={styles.viewAll}>Back</Text> </Feather>
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.headingText}>
                            My Orders
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <SafeAreaView>
                <View style={styles.products}>
                    { orders[0] ?
                        showOrders()
                        : <Text> No Data present !!! </Text>
                    }
                </View>
            </SafeAreaView>
            </ScrollView>
            {/* <View style={styles.button}>
                <TouchableOpacity style={styles.addcart} onPress={() => { orderItems() }}>
                    <View style={styles.innerbutton}>
                        <Text style={{ color: 'white', fontSize: 25 }}> Place Order </Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
const mapDispatchToProps = (dispatch) => ({
    callGetOrders: (user) => dispatch(callGetOrders(user)),
})
const mapStateToProps = (state) => {
    return {
        user: state.users.users,
        orders: state.orders.orders
    }
}
const styles = StyleSheet.create({
    container: {

    },
    products: {
        marginTop: 5,
        marginHorizontal: 3,
    },
    purchase:{
        fontWeight:'600',
        fontSize:17,
        color:'black'
    },
    heading:{
        alignItems:'center',
        justifyContent:'center'
    },
    headingText:{
        fontWeight:'bold',
        color:'black',
        fontSize:20
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
        margin:5,
        fontSize: 18,
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
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
