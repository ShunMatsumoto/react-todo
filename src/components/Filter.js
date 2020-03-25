import React from 'react'
import "../css/Filter.css"

class Filter extends React.Component {
  render() {
    const { filter } = this.props

    return (
      <div className="filter-box cp_sl04">
        <select value={filter} onChange={this.handleChange}>
          <option value="all">全て</option>
          <option value="uncompleted">未完了</option>
          <option value="completed">完了済</option>
        </select>
      </div>
    )
  }
  handleChange = e => {
    this.props.onChange(e.currentTarget.value)
  }
}

export default Filter;