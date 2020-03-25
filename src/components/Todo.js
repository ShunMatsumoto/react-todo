import React from 'react'
import "../css/Todo.css"

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props

    return (
      <div className="todo-box">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.handleChangeCompleted}
          />
          <span>{text}</span>
        </label>
        <div className="todo-button-box">
          <button onClick={this.handleClickEdit} className="btn-sticky">編集</button>
          <button onClick={this.handleClickDelete} className="btn-sticky">削除</button>
        </div>
      </div>
    );
  }
  handleChangeCompleted = () => {
    const { onChange, id, completed } = this.props
    onChange(id, 'completed', !completed)
  }
  handleClickDelete = () => {
    const { onDelete, id } = this.props
    onDelete(id)
  }
  handleClickEdit = () => {
    const { onChange, id, editing } = this.props
    onChange(id, 'editing', !editing)
  }
}

export default Todo;