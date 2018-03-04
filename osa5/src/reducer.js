const initState = {
  good: 0,
  neutral: 0,
  bad: 0
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        good: state.good + 1
      }
    case 'NEUTRAL':
      return {
        ...state,
        neutral: state.neutral + 1
      }
    case 'BAD':
      return {
        ...state,
        bad: state.bad + 1
      }
    case 'CLEAR': 
      return initState
  }
  return state
}


export default counterReducer
