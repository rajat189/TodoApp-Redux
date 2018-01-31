const addTodo= (text) => {
  return {
    type: 'ADD',
    payload: text
  };
};
const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    payload: id
  };
};

export {addTodo, deleteTodo};
