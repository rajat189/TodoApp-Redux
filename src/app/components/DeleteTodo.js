import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTodo} from '../actions/todoAction'

class DeleteTodo extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.todo}
        </td>
        <td>
          <button onClick={()=>this.props.deleteTodo(this.props.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteTodo}, dispatch)
}

export default connect(() => {return {};}, mapDispatchToProps)(DeleteTodo);
