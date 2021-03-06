/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import List from './components/List';
import Input from './components/Input';
import { actionCreators } from './redux/actionCreators';
import Header from './components/Header';
import Footer from './components/Footer';

const mapStateToProps = state => ({ todos: state.todos });

class App extends Component {
  addTodo = (text) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.addTodo(text));
  }

  toggleListItem = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toggleTodo(index));
  } 

  removeTodo = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeTodo())
  }

  render() {
    const {todos} = this.props;
    return (
      <View style={styles.top}>
        <Header>Todo List</Header>
        <View style={styles.container}>
          <Input addTodo={this.addTodo}/>
          <List todos={todos} toggleListItem={this.toggleListItem}></List>
        </View>
        <Footer removeTodo={this.removeTodo}>Remove Completed Tasks</Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps)(App)