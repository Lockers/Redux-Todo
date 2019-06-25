import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, markComplete } from '../actions/Actions';
import { Todo } from './Todo' 

export class Todos extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input/>
                </form>
                <div>
                    {
                        this.props.todos.map(todo => {
                            return <Todo todo={todo} key={todo.id} markComplete={markComplete} deleteTodo={deleteTodo} />
                     })
                    }
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addTodo, deleteTodo, markComplete }
)(Todos);