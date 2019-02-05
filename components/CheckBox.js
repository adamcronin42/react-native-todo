import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

export default class CheckBox extends Component {
  render() {
    return (
      <View>
        {this.props.isChecked ? <Icon name="checkbox-outline" size={25} /> : <Icon name="square-outline" size={30} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});