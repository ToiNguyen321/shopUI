import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Animated, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class BestSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.translateX = new Animated.Value(0)
    }
    componentDidMount(){
        this._animatedLoop();
    }
    _animatedLoop(){
        this.translateX.setValue(0)
        Animated.loop(
            Animated.sequence([
                Animated.delay(2000),
                Animated.timing(
                    this.translateX,
                    
                    {
                        toValue: 1,
                        duration: 1000,
                        // easing: Easing.back()
                    }
                )
            ])
        ).start();
    }
    render() {
        const translateX = this.translateX.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 30, 0],
            extrapolate: 'clamp'
        })
        const color = this.translateX.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['rgba(186, 218, 237, 1)', 'rgba(240, 190, 81,1)', 'rgba(186, 218, 237,1)'],
            extrapolate: 'clamp'
        })
        const scale = this.translateX.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.9, 1.0, 0.9],
            extrapolate: 'clamp'
        })
        return (
            <View style={styles.container}>
                <View style={[styles.fill]}>
                    <Animated.View
                        style={[styles.viewButtonBest, { transform: [{translateX}]}]}
                    >
                        <TouchableOpacity
                            style={[styles.buttonBest, ]}
                        >
                            <Animated.Text style={[styles.textButtonBest, { color }]}>Best Seller</Animated.Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <View
                        style={[styles.viewName]}
                    >
                        <Text style={styles.textName}>Beats By Solo Dr.Dre Wireless</Text>
                    </View>
                    <View
                        style={[styles.viewPrice ]}
                    >
                        <Text style={styles.textPrice}>$250</Text>
                    </View>
                </View>
                <View style={styles.fill}>
                    <Animated.Image 
                        style={[styles.imageProduct, {transform: [{scale}]}]}
                        source={require('../../assets/images/product.png')} />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1,
        // borderWidth: 2,
    },
    container: {
        width: '100%',
        height: 160,
        backgroundColor: '#BADAED',
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 5
    },
    viewButtonBest: {
        flex: 3,
        justifyContent: 'flex-end',
        marginLeft: 25,
    },
    buttonBest: {
        width: 70,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonBest: {
        fontSize: 12,
        color: '#BADAED'
    },
    viewName: {
        flex: 4,
        justifyContent: 'center',
        marginLeft: 25,
    },
    textName: {
        // paddingTop: 10,
        color: '#FFF',
        fontSize: 14,
    },
    viewPrice: {
        flex: 3,
        justifyContent: 'flex-start',
        marginLeft: 25,
    },
    textPrice: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageProduct: {
        width: '100%',
        height: '100%'
    },
    
})