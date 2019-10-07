import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
export default class ProductTabTwo extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      const htmlContent = `<p>🍀🍀 MÁY LÀM TÓC CHỈ TỪ #150k CHO SALON ,MAKEUP, CÁ NHÂN ...☘️☘️
      - Chỉ bán hàng HỊN không bán hàng chợ
      - Máy qua chọn lọc , chất lượng tốt nhất
      - Giá cả bình dân = 3 cốc trà sữa của ae 😂😂</p><h3>Bảo hành 6 tháng 1 đổi 1 trong 30 ngày</h3>`;
      return (
         <View style={styles.container}>
            <HTMLView
               value={htmlContent}
               stylesheet={stylesHTML}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      margin: 10,
      borderWidth: 1,
      borderColor: '#727C8E',
      padding: 10,
      borderRadius: 5,
   }
});
const stylesHTML = StyleSheet.create({
   p: {
      fontWeight: '500',
      color: '#000', // make links coloured pink
      lineHeight: 22,
   },
   h3: {
      margin: 0,
      padding: 0,
      fontSize: 16,
   }
});
