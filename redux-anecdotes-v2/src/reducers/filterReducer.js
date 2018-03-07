const reducer = (state='', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}

export const filter = (newFilter) => {
  return {
    type: 'FILTER',
    filter: newFilter
  }
}

export default reducer