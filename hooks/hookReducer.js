import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const HookReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <p>{state.count}</p>
    </div>
  );
};

export default HookReducer;
