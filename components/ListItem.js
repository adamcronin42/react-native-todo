import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Alert, StyleSheet} from 'react-native';
import Icon from './Icon';
import CheckBox from './CheckBox';

export default class ListItem extends Component {
  onLongPress = () => {
   console.log('Long press!!!');
  }
  render() {
    const {toggleListItem} = this.props;
    return (
      <TouchableHighlight
        onPress={toggleListItem}
        onLongPress={this.onLongPress}
        >
        <View style={styles.container} >
          <Text
            style={styles.leftText}
            numberOfLines={1}
          >
            {this.props.children}
          </Text>
          <CheckBox
            isChecked={this.props.isChecked}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
  },
  checkBox: {
    flex: 1,
   },
   leftText: {
    fontSize: 20,
    width: 325,
  },
  touchHighlight: {
    backgroundColor: 'pink',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }
})