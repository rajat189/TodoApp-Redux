import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions/todoAction'

class Todo extends React.Component{
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="insert here"/>
        <button onClick={()=>this.props.addTodo(this.refs.task.value)}>Add</button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({addTodo}, dispatch)
  )
}

export default connect(() => {}, mapDispatchToProps)(Todo);
