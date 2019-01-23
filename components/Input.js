import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default class Input extends Component {

  state = {
    text: ''
  }

  onSubmit = () => {
    const {addTodo} = this.props;
    const {text} = this.state;
    if(!text) return;

    addTodo(text);
    this.setState({text: ''});
  }

  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textItem}
          blurOnSubmit={false}
          onSubmitEditing={() => this.onSubmit()} 
          onChangeText={(text) => this.setState({text})}
          placeholder={'Enter a task!'}
          value={text}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#D5DBE1',
  },
  textItem: {
    fontSize: 20,
    paddingLeft: 15,
  }
})