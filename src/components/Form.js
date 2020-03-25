import React from 'react'
import "../css/Form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="form-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.hendleChange} />
          <button>
            <span>
              追加
            </span>
          </button>
        </form>
      </div>
    )
  }

  hendleChange = e => {
    this.setState({ input: e.currentTarget.value })
  };

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.input) return;
    this.props.onSubmit(this.state.input)
    this.setState({ input: "" })
  }
}

export default Form;