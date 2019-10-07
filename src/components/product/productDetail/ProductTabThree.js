import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductReview from './ProductReview';

export default class ProductTabThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
       data: [
          {id: 1, name: 'Tomy', rate: 4, time: '19/09/2019', content: 'Sản phẩm chất lượng rất tốt! Sẽ mua ủng hộ thêm!', imageReview: [1,2,3,4,5] },
          {id: 2, name: 'Tomy', rate: 3, time: '19/09/2019', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', imageReview: [] },
          {id: 3, name: 'Tomy', rate: 2, time: '19/09/2019', content: 'Sản phẩm chất lượng rất tốt!', imageReview: [] },
       ]
    };
  }

  render() {
    return (
      <View>
         <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}) => <ProductReview item={item} />}
         /> 
      </View>  
    );
  }
}
