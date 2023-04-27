import React, { useState } from 'react';
import styled from 'styled-components';
import '../style.css';

const Container = styled.h1`
  text-align: center;
`;

const ButtonCustom = styled.button`
  border-radius: 30px;
`;

export default function HookState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //setCount(count + 1)
    setCount((prevState) => prevState + 1);
  };

  return (
    <Container>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <ButtonCustom onClick={increment}> Increment</ButtonCustom>
    </Container>
  );
}
