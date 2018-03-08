const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  if (action.type==='VOTE') {
    const old = state.filter(a => a.id !==action.id)
    const voted = state.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {
    return [...state, { content: action.content, id: getId(), votes:0 }]
  }

  if (action.type === 'INIT') {
    return action.anecdotes
  }

  return state
}

export const createAnecdote = (content) => {
  return { 
    type: 'CREATE', 
    content 
  }
}

export const voteAnecdote = (anecdote) => {
  return { 
    type: 'VOTE', 
    id: anecdote.id 
  }
}

export const anecdotesInit = (anecdotes) => {
  return {
    type: 'INIT',
    anecdotes
  }
}

export default reducer