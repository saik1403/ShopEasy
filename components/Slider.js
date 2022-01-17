import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

const images = [
  'https://www.shopickr.com/wp-content/uploads/2015/09/amazon-india-discount-large-home-appliances-sale-2016.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpOXtaLhtoN19GBrz9rhbAAyJjweTxe3ceWnjsO06hwz0Xb-_MAxKRacQoLjorC7poGs&usqp=CAU',
  'https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/07/28/155241-untitled-design-4.jpg?itok=zEgpJ5bW',
]

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
      this.setState({
        active:slide
      })
      }
    }
  
  }

  render() {
    const { active } = this.state;
    return (
      <View style={styles.maincontainer}>
      <SafeAreaView style={styles.container}>
        {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>HomeScreen</Text>
        </View> */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent })=>this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e, index) =>
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((e, index) =>
                <Text
                  key={e}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>

      </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  maincontainer:{
  },
  container: {
    flex: 1,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25 // 25% windo
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  }


});

export default Slider;