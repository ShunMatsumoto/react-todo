import React from 'react'
import "../css/EditTodo.css"

class EditTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  render() {
    return (
      <div className="edit-box">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div className="edit-button-box">
          <button onClick={this.handleClickCancel} className="btn-sticky">取消</button>
          <button onClick={this.handleSubmit} className="btn-sticky">更新</button>
        </div>

      </div>
    );
  }
  handleChange = e => {
    this.setState({ text: e.currentTarget.value })
  }

  handleClickCancel = () => {
    const { onCancel, id } = this.props
    onCancel(id, "editing", false)
  }

  handleSubmit = () => {
    const { onSubmit, id } = this.props
    if (!this.props.text) return
    onSubmit(id, this.state.text)
  }
}

export default EditTodo;