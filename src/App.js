import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  //const renders = useRef(0)
  // const inputRef = useRef();
  const previousName = useRef();
  //  const focusInput = () => {
  //     inputRef.current.focus()
  //   }

  useEffect(() => {
    //renders.current = renders.current + 1;
    previousName.current = name;
  });

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! My name is {name}</p>
        <p>And my name was {previousName.current}</p>
      </div>
    </div>
  );
}
