import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,FlatList,SafeAreaView } from "react-native";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { createAccount } from "../services/apicalls";
import Feather from 'react-native-vector-icons/Feather';
import Data from './Data';
const Home = ({ navigation }) => {
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
                                : `${item.Title.substring(0, 12)}...`}
                        </Text>
                    </View>
                    <View style={styles.priceview}>
                        <View style={styles.price}>
                            <Text style={styles.pricetext}> ₹ {item.Price}</Text>
                        </View>
                        <View style={styles.icon}>
                            <TouchableOpacity>
                                <Feather name="heart" size={15} style={{ color: 'pink' }}></Feather>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header navigation={navigation}></Header>
            <ScrollView>
                <View style={styles.slider}>
                    <Slider></Slider>
                </View>
                <View>
                    <Text style={styles.catText}>Categories</Text>
                </View>
                <View style={styles.categories}>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Products',{category:"Footware"})}}>
                            <Image
                                style={styles.catitems}
                                source={require('../Assets/images/men-shoes.png')}
                            />
                            <Text style={styles.itemstext}>Shoes</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Products',{category:"Clothes"})}}>
                            <Image
                                style={styles.catitems}
                                source={require('../Assets/images/men-pajama.png')}
                            />
                            <Text style={styles.itemstext}>Dresses</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Products',{category:"Electronics"})}}>
                            <Image
                                style={styles.catitems}
                                source={require('../Assets/images/electronics.png')}
                            />
                            <Text style={styles.itemstext}>Electronics</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Products',{category:"Watches"})}}>
                            <Image
                                style={styles.catitems}
                                source={require('../Assets/images/watches.png')}
                            />
                            <Text style={styles.itemstext}>Watches</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity >
                            <Image
                                style={styles.catitems}
                                source={require('../Assets/images/laptop.png')}
                            />
                            <Text style={styles.itemstext}>Laptop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bestSale}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.catText}>Best Sale</Text>
                        </View>
                        <TouchableOpacity>
                            <View>
                                <Text style={styles.viewAll}>View All   <Feather name="arrow-right" size={20}></Feather></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <SafeAreaView>
                    <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={3}
                        />
                    </SafeAreaView>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6e6'
    },
    slider: {
        height: 200,
        marginTop: 10,
    },
    catText: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    viewAll: {
        padding: 15,
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    catitems: {
        borderRadius: 50,
        height: 60,
        width: 60,
        marginBottom: 5
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    itemstext: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bestSale: {
        marginTop: 8,
        width: '100%',
        backgroundColor: '#fff',
    },
    card:{

    },
    products: {
        marginTop: 10,
        marginHorizontal: 3,
        alignItems: 'center'
    },
    tinyLogo: {
        marginTop: 10,
        height: 80,
        width: 80,
        borderRadius: 10,
        borderWidth: 0.1,
    },
    product: {
        height: 140,
        width: 120,
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
        fontSize: 13
    },
    icon: {
        justifyContent: 'center'
    },
    price: {
        justifyContent: 'center'
    }
});
export default Home;