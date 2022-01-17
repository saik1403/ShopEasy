import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { createAccount } from "../services/apicalls";
import Feather from 'react-native-vector-icons/Feather';
const Home = ({ navigation }) => {
    const images = [
        { url: "https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-hon-moi-ngay.jpg" },
        { url: "https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-nhu-cau-dan-dau-lua-chon.jpg" },
    ];
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
                        <View style={styles.card}>
                            <View>
                            </View>
                            <View>
                            </View>
                        </View>
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
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
    },
    card:{

    }
});
export default Home;