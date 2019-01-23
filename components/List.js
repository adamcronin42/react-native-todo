import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const {todos, toggleListItem} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {todos.map((todo,index) => {
            return <ListItem key={index} style={styles.item} toggleListItem={() => toggleListItem(index)} isChecked={todo.isChecked}>{todo.text}</ListItem>
          })}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    minHeight: 200,
  },
  item: {
    paddingBottom: 5
  }
})