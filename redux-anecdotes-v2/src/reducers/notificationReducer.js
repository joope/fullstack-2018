const initialState = {content: 'Tämä on notifikaatio', show: true}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        content: action.content,
        show: true
      }
    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        show: false
      }

    default:
      return state
  }
}

export const showNotification = (content) => {
  return {
    type: 'SHOW_NOTIFICATION',
    content
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
  }
}

export default reducer