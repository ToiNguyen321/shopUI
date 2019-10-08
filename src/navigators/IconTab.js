import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "native-base";

export default class IconTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, badgeCount, color, size, type } = this.props;
    return (
      <View style={styles.viewIcon}>
        <Icon name={name} style={{ color, fontSize: 25 }} type={type ? type : 'FontAwesome'} />
        {badgeCount > 0 && (
          <View
            style={styles.viewTextIcon}
          >
            <Text style={styles.text}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewIcon: {
    width: 24,
    height: 24,
    margin: 5
  },
  viewTextIcon: {
    position: 'absolute',
    left: -10,
    top: 7,
    backgroundColor: '#FF6969',
    borderRadius: 7,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold'
  }
})