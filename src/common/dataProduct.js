const htmlContent = `<p>🍀🍀 MÁY LÀM TÓC CHỈ TỪ #150k CHO SALON ,MAKEUP, CÁ NHÂN ...☘️☘️
      - Chỉ bán hàng HỊN không bán hàng chợ
      - Máy qua chọn lọc , chất lượng tốt nhất
      - Giá cả bình dân = 3 cốc trà sữa của ae 😂😂</p><h3>Bảo hành 6 tháng 1 đổi 1 trong 30 ngày</h3>`;
export const dataProducts = [
   { 
      id: 1, 
      color: ['gray', 'blue'],
      name: "V Neck Shirt - Pink", 
      price: 10.99, 
      rate: 4, 
      image: require('../assets/images/products/Image1.png'),
      description: htmlContent
   },
   { 
      id: 2, 
      color: ['gray', 'blue'],
      name: "V Neck Shirt - Pink", 
      price: 7.99, 
      rate: 5, 
      image: require('../assets/images/products/Image2.png'),
      description: htmlContent
   },
   { 
      id: 3, 
      color: ['yellow', 'blue'],
      name: "V Neck Shirt - Pink", 
      price: 13.99, 
      rate: 3, 
      image: require('../assets/images/products/Image3.png'),
      description: htmlContent
   },
   { 
      id: 4, 
      color: ['gray', 'blue'],
      name: "V Neck Shirt - Pink", 
      price: 7.00, 
      rate: 4, 
      image: require('../assets/images/products/Image4.png'),
      description: htmlContent
   },
   { 
      id: 5, 
      color: ['red', 'blue'],
      name: "V Neck Shirt - Red", 
      price: 4.99, 
      rate: 5, 
      image: require('../assets/images/products/Image5.png'),
      description: htmlContent
   },
   { 
      id: 6, 
      color: ['back', 'white'],
      name: "V Neck Shirt - White", 
      price: 7.99, 
      rate: 5, 
      image: require('../assets/images/products/Image6.png'),
      description: htmlContent
   },
]

export const dataColor = [
   { id: 1, color: 'red' },
   { id: 2, color: 'black' },
   { id: 3, color: 'white' },
   { id: 4, color: 'blue' },
   { id: 5, color: 'yellow' },
]

export const dataSize =  [
      { id: 1, size: 37 },
      { id: 2, size: 38 },
      { id: 3, size: 39 },
      { id: 4, size: 40 },
      { id: 5, size: 41 },
      { id: 6, size: 42 },
   ];
export const dataCarts = [
         { 
            id: 1, 
            amount: 2, 
            name: "V Neck Shirt - Pink", 
            price: 10.99, 
            rate: 4, 
            image: require('../assets/images/products/Image1.png') 
         },
         { 
            id: 2, 
            amount: 3, 
            name: "V Neck Shirt - Pink", 
            price: 7.99, 
            rate: 4.4, 
            image: require('../assets/images/products/Image2.png') 
         },            
         { 
            id: 3, 
            amount: 1, 
            name: "V Neck Shirt - Pink", 
            price: 13.99, 
            rate: 4, 
            image: require('../assets/images/products/Image3.png') 
         },
         { 
            id: 4, 
            amount: 6, 
            name: "V Neck Shirt - Pink", 
            price: 7.00,
            rate: 4.5, image: require('../assets/images/products/Image4.png') },
         { 
            id: 5, 
            amount: 4, 
            name: "V Neck Shirt - Pink", 
            price: 4.99, 
            rate: 4.4, 
            image: require('../assets/images/products/Image5.png')
         }
]