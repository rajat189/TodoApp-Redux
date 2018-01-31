import {combineReducers} from 'redux';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      state = state.concat(action.payload);
      break;
    case 'DELETE':
      state = state.slice();
      state.splice(action.payload,1);
      break;
  }
  return state;
},
reducers = combineReducers ({
  todos:todoReducer
});

export default reducers;
