const initialState = 'Tämä on notifikaatio'

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.content

    default:
      return state
  }
}

export const showNotification = (content) => {
  return {
    type: 'NOTIFICATION',
    content
  }
}

export default reducer