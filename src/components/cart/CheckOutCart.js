import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class CheckOutCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.fill]}>
            <Text style={styles.textTotal}>TOTAL</Text>
            <Text style={styles.priceTotal}>${this.props.priceTotal}</Text>
        </View>
        <View style={[styles.fill, { alignItems: 'flex-end', }]}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={ [styles.button, styles.buttonCart]}
                onPress={() => this.props.navigation.navigate(`CheckOut`)}
            >
                <Text style={styles.buttonText}>CHECKOUT</Text>
                <Icon 
                    style={[styles.buttonIcon]}
                    name="rightcircleo" 
                    type="AntDesign"
                />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
        
    },
    button: {
        flexDirection: 'row',
        width: (Dimensions.get('window').width - 30) / 2,
        height: 50,
        borderRadius: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#727C8E',
        paddingRight: 10,
        paddingLeft: 20,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonIcon:{
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold',
    },
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F6F8',
        borderTopWidth: 1,
        borderColor: 'rgba(114,124,142,0.3)'
    },
    buttonCart: {
        backgroundColor: '#FF6969'
    },
    textTotal: {
       color: '#515C6F',
       fontSize: 15,
    },
    priceTotal: {
      color: '#515C6F',
      fontSize: 20,
      fontWeight: 'bold'
    }
    
})
