// import React, { Component } from 'react'
// import { Text, StyleSheet, View, Dimensions } from 'react-native'
// import { connect } from 'react-redux'
// import * as actions from '../../redux/actions';
// import Modal from 'react-native-modal';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const { width, height } = Dimensions.get('window');
// class Popup extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             isShow: true,
//             message: "Login Thành Công!"
//         }
//     }
//     // componentDidMount(){
//     //     setTimeout(() => this.setState({
//     //         isShow: false
//     //     }), 2000);
//     // }
//     setModalVisible(visible) {
//         this.setState({isShow: visible});
//       }
//     render() {
//         const deviceWidth = Dimensions.get("window").width;
//         const deviceHeight =  Dimensions.get("window").height;
//         alert(this.state.isShow)
//         return (
//             // <View style={{marginTop: 22}}>
//                 <Modal
//                 animationType="slide"
//                 transparent={false}
//                 visible={this.state.isShow}
//                 onRequestClose={() => {
//                     Alert.alert('Modal has been closed.');
//                 }}>
//                 <View style={{marginTop: 22}}>
//                     <View>
//                     <Text>Hello World!</Text>

//                     <TouchableOpacity
//                         onPress={() => {
//                         this.setModalVisible(!this.state.isShow);
//                         }}>
//                         <Text>Hide Modal</Text>
//                     </TouchableOpacity>
//                     </View>
//                 </View>
//                 </Modal>
//         )
//     }
// }

// export default connect(null, actions)(Popup);
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.2)',
//         // position: 'absolute',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     content: {
//         width: 250,
//         height: 200,
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         // position: 'absolute',
//         // zIndex: 999,
//     }
// })
