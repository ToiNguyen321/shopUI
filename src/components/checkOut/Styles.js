
import { StyleSheet } from 'react-native';
import { colorBackground, colorBorder, colorBorderButton, colorIconCam } from '../../styles/Color';

export default styles = StyleSheet.create({
   fill: {
     flex: 1,
     backgroundColor: colorBackground
   },
   scrollView: { paddingHorizontal: 20, paddingBottom: 69 },
   box: {
     paddingVertical: 20,
     borderBottomColor: colorBorder,
     borderBottomWidth: 1
   },

   boxFlexRow: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
   },
   justCenter: {
     justifyContent: 'center'
   },
   textBox: {
     fontSize: 14,
     fontWeight: '500',
     marginBottom: 10,
     opacity: 0.5,
   },
   iconBox: {
     fontSize: 18,
     color: colorBorderButton,
     marginRight: 2,
     opacity: 0.5,
   },
   viewAddress: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   textNameAddress: {
     fontSize: 15,
     fontWeight: 'bold',
   },
   textAddress: {
     marginTop: 10,
     paddingRight: 150,
     lineHeight: 20,
   },
   viewTagCode: {
     flexDirection: 'row',
     alignItems: 'center'
   },
   iconTagCode: {
     fontSize: 20,
     color: colorIconCam,
     marginRight: 10,
   },
   textTagCode: {
     color: colorIconCam,
     fontSize: 16,
   },
   textInputTag: {
     paddingVertical: 10,
     borderRadius: 20,
     marginTop: 10,
     backgroundColor: '#dcdcdc',
     justifyContent: 'center',
     textAlign: 'left',
     paddingLeft: 20,
   }

});