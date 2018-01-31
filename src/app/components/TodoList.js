import React from 'react';
import {connect} from 'react-redux';
import DeleteTodo from './DeleteTodo';

class TodoList extends React.Component{
  render() {
    return (
      <div className="container">
          <div className="col-sm-12">
            <table className="table">
                <thead>
                  <tr>
                    <th>Tasks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.todos.map((todo, id)=> <DeleteTodo key={id} todo={todo} />)}
                </tbody>
            </table>
          </div>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    todos:state.todos
  }
}

export default connect(mapStateToProps)(TodoList);
