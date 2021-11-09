import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './images/bg-stars.svg';
import Hill from './images/pattern-hills.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage}), linear-gradient(to bottom, hsl(234, 17%, 12%), hsl(235, 16%, 14%), hsl(236, 21%, 26%));
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Hill});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>

      </Wrapper>
      <BackgroundBottom />
    </Container>
  );
}

export default App;
