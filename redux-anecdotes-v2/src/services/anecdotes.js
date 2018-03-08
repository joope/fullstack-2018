import axios from 'axios'

const getAll = async () => {
  const res = await axios.get('http://localhost:3010/anecdotes')
  return res.data
}

export { getAll }