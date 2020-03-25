import React from 'react';

import '../css/App.css'

import Form from './Form';
import Filter from './Filter';
import Todo from './Todo';
import EditTodo from './EditTodo';
import CheckAll from './CheckAll';

let currentId = 0

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      todos: []
    }
  }

  render() {

    const { todos, filter } = this.state
    const filteredTodos = todos.filter(({ completed }) => {
      switch (filter) {
        case 'all':
          return true;

        case 'uncompleted':
          return !completed;

        case 'completed':
          return completed;

        default:
          return true;
      }
    })

    return (
      <div className="container">
        <h1>Todos</h1>
        <div className="contents">
          <Form onSubmit={this.handleSubmit} />

          <CheckAll allCompleted={
            todos.length > 0 && todos.every(({ completed }) => completed)
          }
            onChange={this.handleChangeAllCompleted}
          />

          <Filter filter={filter} onChange={this.handleChangeFilter} />

          <ul>
            {filteredTodos.map(({ id, text, completed, editing }) => (
              <li key={id}>
                {editing ? (
                  <EditTodo
                    id={id}
                    text={text}
                    onCancel={this.handleChangeTodoAttribute}
                    onSubmit={this.handleUpdataTodoText}
                  />
                ) : (
                    <Todo
                      id={id}
                      text={text}
                      completed={completed}
                      onChange={this.handleChangeTodoAttribute}
                      onDelete={this.handleClickDelete}
                    />
                  )}
              </li>
            ))}
          </ul>
          <button onClick={this.handleClickDeleteCompleted} className="all-delete">
            <span>完了済を全て削除する</span>
          </button>
        </div>
      </div>
    );
  }
  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
      completed: false,
      editing: false
    }
    const newTodos = [...this.state.todos, newTodo]  // すでにあるTodosに新しいnewTodoを加える
    this.setState({ todos: newTodos })
    currentId++
  }
  handleChangeAllCompleted = completed => {
    const newTodos = this.state.todos.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    })
    this.setState({ todos: newTodos })
  }

  handleChangeTodoAttribute = (id, key, value) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,  // id,text,completedを一つ一つ埋め込んだオブジェクトを作る
          [key]: value
        }
      }

      return todo
    })

    this.setState({ todos: newTodos })
  }

  handleClickDeleteCompleted = () => {
    const newTodos = this.state.todos.filter(({ completed }) => !completed) // 完了済を削除＝未完了だけを新たにtodosに入れる
    this.setState({ todos: newTodos })
  }
  handleChangeFilter = filter => {
    this.setState({ filter })
  }
  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)  // 渡したid(削除を押したid)を除外したtodo配列が新たに作られる
    this.setState({ todos: newTodos })
  }
  handleUpdataTodoText = (id, text) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          editing: false
        }
      }

      return todo  // ifに入らない奴はそのまま返す
    })
    this.setState({ todos: newTodos })
  }
}

export default App;