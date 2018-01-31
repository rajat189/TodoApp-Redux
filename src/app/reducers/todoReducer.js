import {combineReducers} from 'redux';
let arr=[]
const todoReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD':
      //if(){

      console.log('state before ', state, 'text ', action.text);
      arr = state.slice();
      arr.splice(action.id, 0, action.text);
      //return arr;
      //state = state.concat(action.payload);
      //}
      console.log('state after ', state);
      break;
    case 'DELETE':
      arr = state.slice();
      arr.splice(action.payload,1);

      //arr= state.filter( (todo, id) => id !== action.payload);
      break;
  }
  return arr;
},
reducers = combineReducers ({
  todos:todoReducer
});

export default reducers;
