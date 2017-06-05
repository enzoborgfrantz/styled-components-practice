import styled from 'styled-components';
import React from 'react';
import helloWorld from '../modules/hello.module';

const Wrapper = styled.div`
  padding: 5px;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
`;

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: white;
  font-family: Arial;
`;

export default function () {
  const result = helloWorld();
  return (
    <Wrapper>
      <Title>{result}</Title>
    </Wrapper>
  );
}
