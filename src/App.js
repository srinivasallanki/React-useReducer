import { useReducer } from 'react'

const initialState = {
  wish: 'Hello ',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'day':
      return {
        wish: action.payload,
      }
    case 'noon':
      return {
        wish: action.payload,
      }

    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      <h3>Message: {state.wish}</h3>
      <button
        onClick={() => dispatch({ type: 'day', payload: 'Hi, Good Morning' })}
      >
        Day
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'noon', payload: 'Hi, Good After Noon' })
        }
      >
        Noon
      </button>
    </div>
  )
}

export default App
