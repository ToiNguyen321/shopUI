import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
export default class ProductInfoTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.positionTop}>
                <Text style={styles.textName}>
                    Faux Sued Ankle Boots
                </Text>
                <View style={styles.viewPriceAndRate}>
                    <Text style={styles.textPrice}>$49.99</Text>
                    <View style={styles.viewRate}>
                        <Icon name="star" type="FontAwesome" style={styles.iconRate} />
                        <Text style={styles.textRate}>4.9</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    positionTop: {
        position: 'absolute',
        top: 0,
        left: 50,
        right: 50,
        height: 42,
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 10
    },
    textName: {
        fontSize: 14,
        color: '#515C6F',
    },
    viewPriceAndRate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#515C6F'
    },
    viewRate: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6969',
        borderRadius: 13,
        paddingHorizontal: 3,
        paddingVertical: 1,
    },
    iconRate: {
        fontSize: 10,
        marginRight: 2,
        color: '#FFF'
    },
    textRate: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'bold'
    }
})
