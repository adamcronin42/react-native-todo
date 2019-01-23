import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class ListItem extends Component {
  render() {
    const {toggleListItem} = this.props;
    return (
      <View style={styles.container}>
        <CheckBox
          isChecked={this.props.isChecked}
          leftText={this.props.children}
          leftTextStyle={styles.leftText}
          style={styles.checkBox}
          onClick={toggleListItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
  },
  checkBox: {
    flex: 1,
   },
   leftText: {
    fontSize: 20,
  }
})