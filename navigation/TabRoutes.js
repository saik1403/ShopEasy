import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image,View,TouchableOpacity ,StyleSheet,Text} from 'react-native';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Fa from 'react-native-vector-icons/FontAwesome';
import Evil from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import Products from '../screens/Products';
import Product from '../screens/Product';
const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    height:70,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    borderWidth: 0.5,
                    borderColor: 'grey',

                }
            }}
        >
            <Tab.Screen
                name={"Home"} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                            <Feather name="home" size={30}></Feather>
                            <Text style={styles.itemstext}>Home</Text>
                        </TouchableOpacity>
                    </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"Orders"} component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Orders")}}>
                            <Feather name="shopping-bag" size={30}></Feather>
                            <Text style={styles.itemstext}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"Cart"} component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Cart")}}>
                            {/* <Feather name="shopping-cart" size={30}></Feather> */}
                            <Ion name="cart-outline" size={33}></Ion>
                            <Text style={styles.itemstext}>Cart</Text>
                        </TouchableOpacity>
                    </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"Profile"} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                            {/* <Fa name="user" size={30}></Fa> */}
                           
                            <Ion name="person-outline" size={30}></Ion>
                            <Text style={styles.itemstext}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Products" component={Products} options={{ tabBarItemStyle: { display: 'none', }, }} />
            <Tab.Screen name="Product" component={Product} options={{ tabBarItemStyle: { display: 'none', }, }} />
        </Tab.Navigator>
    )
}
const styles=StyleSheet.create({
    catitems: {
        borderRadius: 50,
        height: 60,
        width: 60,
        marginBottom: 5
    },
    itemstext: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    icons:{
    }
})
export default TabRoutes;