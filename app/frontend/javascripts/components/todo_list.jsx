import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <h1>Hope this works</h1>
    );
  }
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
