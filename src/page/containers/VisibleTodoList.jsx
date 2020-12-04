import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/action/index';
import TodoList from '../component/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
            return todos;
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            console.log(id);
            dispatch(toggleTodo(id));
        }
    }
}

const visibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default visibleTodoList;