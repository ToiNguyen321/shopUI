import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductAddCartBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log('xxxx')
    return (
      <View style={styles.container}>
        <View style={[styles.fill]}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={ styles.button}
            >
                <Text style={styles.buttonText}>SHARE THIS</Text>
                <Icon 
                    style={[styles.buttonIcon, {  }]}
                    name="arrow-up-circle" 
                    type="Feather"
                />
            </TouchableOpacity>
        </View>
        <View style={[styles.fill, { alignItems: 'flex-end', }]}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={ [styles.button, styles.buttonCart]}
                onPress={ ()=>this.props._addCart() }
            >
                <Text style={styles.buttonText}>ADD TO CART</Text>
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
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#F5F6F8'
    },
    buttonCart: {
        backgroundColor: '#FF6969'
    }
    
})
