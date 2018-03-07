import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.filter(event.target.value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange} value={this.props.filterValue}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filterValue: state.filter
  }
}

const mapDispatchToProps = {
  filter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)