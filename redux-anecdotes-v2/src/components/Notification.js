import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const { notification={} } = this.props
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    if (!notification.show) return null
    return (
      <div style={style}>
        {notification.content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
