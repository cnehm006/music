import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f6f3;
  color: #222;
  font-family: 'Inter', sans-serif;
  padding: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  letter-spacing: 0.04em;
`;

const Text = styled.p`
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  opacity: 0.85;
`;

function Ask() {
  return (
    <Wrapper>
      <Title>ask</Title>
      <Text>
        (Coming soon.)
      </Text>
    </Wrapper>
  );
}

export default Ask; 