import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class Footer extends Component {
  render() {
    const {removeTodo} = this.props;
    return(
      <View style={styles.container}>
        <Button 
          color='red'
          title={this.props.children}
          onPress={removeTodo}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D5DBE1',
    height: 75,
  },
})