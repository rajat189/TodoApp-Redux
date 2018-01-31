import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTodo} from '../actions/todoAction'

class DeleteTodo extends React.Component {
  constructor() {
    super();
    this.deleteTask = this.deleteTask.bind(this);
  };

  deleteTask() {
    // console.log('delete Task called',this.props.id);
    this.props.dispatch(deleteTodo(this.props.id));
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.todo}
        </td>
        <td className="float-right">
          <button className="btn btn-danger" onClick={this.deleteTask}>Delete</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({deleteTodo}, dispatch)
  return (
    dispatch:dispatch
  );
}

export default connect(mapDispatchToProps)(DeleteTodo);
