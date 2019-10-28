import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dataProducts, dataCarts } from '../../common/dataProduct';
class CheckOutCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMoney: 0,
      dataCarts: this.props.carts,
      data: dataCarts
    };
  }
  _navigate = (navigate) => {
    if(this.props.carts.length === 0) {
      alert("Giỏi hàng trống!");
      return false;
    }
    if(navigate !== 'CheckOut'){
      this.props.actionRemoveCart()
    }
    console.log(this.props.carts)
    this.props.navigation.navigate(navigate)
  }
  render() {

    const {nameNavigate, nameButton } = this.props
    let navigate = nameNavigate ? nameNavigate : 'CheckOut';
    return (
      <View style={styles.container}>
        <View style={[styles.fill]}>
            <Text style={styles.textTotal}>TOTAL</Text>
            <Text numberOfLines={1} style={styles.priceTotal}>{`${this.props.totalMoney}K`}</Text>
        </View>
        <View style={[styles.fill, { alignItems: 'flex-end' }]}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={ [styles.button, styles.buttonCart]}
                onPress={() => this._navigate(navigate)}
            >
                <Text style={styles.buttonText}>{nameButton ? nameButton : 'CHECKOUT'}</Text>
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
const mapStateToProps = (state, ownProps) => {
  return {
     carts: state.carts
  }
}
export default connect(mapStateToProps, actions)(CheckOutCart)
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
        borderColor: 'rgba(114,124,142,0.3)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
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
