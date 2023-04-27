import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import './style.css';

export default function hookMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  const doubleNumber = useMemo(() => {
    slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setNumber(2);
        }}
      >
        Increment Name
      </button>
      <p>text: {text} </p>
    </>
  );
}

const slowFunction = (num) => {
  console.log('slow function is being called!');

  for (let i = 0; i < 10000; i++) {
    return num * 2;
  }
};
