import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
  },
  headerText: {
    paddingTop: 20,
    fontSize: 16,
    color: 'white',
  }
})