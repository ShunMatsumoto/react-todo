import React from 'react'
import "../css/CheckAll.css"

class CheckAll extends React.Component {
  render() {
    const { allCompleted } = this.props

    return (
      <div className="check-all">
        <label>
          <input type="checkbox" checked={allCompleted} onChange={this.handleChange} />
          全て<span>{allCompleted ? "未完了" : "完了"}</span>にする
        </label>
      </div>
    );
  }
  handleChange = () => {
    const { onChange, allCompleted } = this.props
    onChange(!allCompleted)
  }
}

export default CheckAll;