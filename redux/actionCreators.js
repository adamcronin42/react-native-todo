import { types } from "./reducer";

export const actionCreators = {
  addTodo: (text) => {
    return {
      type: types.ADD,
      payload: {text: text, isChecked: false}
    }
  },
  toggleTodo: (index) => {
    return {
      type: types.TOGGLE,
      index: index
    }
  },
  removeTodo: () => {
    return {
      type: types.REMOVE,
    }
  },
}