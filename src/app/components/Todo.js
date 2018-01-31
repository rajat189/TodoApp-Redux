import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoAction'

class Todo extends React.Component{
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  };

  addTask() {
    console.log('add Task called ', this.refs.task.value);
    if (this.refs.task.value.length > 0) {
      this.props.dispatch(addTodo(this.refs.task.value));
    }
  }
  render() {
    return (
      <div className="container">
          <div className="col-sm-12">
            <input type="text" ref="task" className="form-control" placeholder="insert here" required/>
            <button className="btn btn-primary" onClick={this.addTask}>Add</button>
          </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return (
    dispatch : dispatch
  );
}

export default connect(mapDispatchToProps)(Todo);
