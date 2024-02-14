import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'


export function Counter() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}