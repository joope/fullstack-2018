import React from 'react'

class Notification extends React.Component {
  render() {
    const { notification={} } = this.props.store.getState()
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

export default Notification
