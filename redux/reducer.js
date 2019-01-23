export const types = {
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  REMOVE: 'REMOVE',
}

const initialState = {
  todos: [{ text: 'My first todo', isChecked: true}, { text: 'My second todo', isChecked: false}, {text:'Number 3 todo', isChecked: true}],
}

export const reducer = (state = initialState, action) => {
  const {todos} = state;
  const {type} = action;

  switch(type) {
    case types.ADD: {
      const {payload} = action;
      return {
        ...state,
        todos: [payload, ...todos],
      }
    }
    case types.TOGGLE: {
      const {index} = action;
      const newTodos = todos.slice();
      if(newTodos[index].isChecked != null) {
        newTodos[index].isChecked = !newTodos[index].isChecked;
      }
      return {
        ...state,
        todos: newTodos
      }
    }
    case types.REMOVE: {
      const newTodos = todos.filter((todo) => {
        return !todo.isChecked
      });
      return {
        ...state,
        todos: newTodos
      }
    }
    default: {
      return state;
    }
  }
}