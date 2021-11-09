import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './images/bg-stars.svg';
import Hill from './images/pattern-hills.svg';
import { ReactComponent as Facebook} from './images/icon-facebook.svg';
import { ReactComponent as Instagram} from './images/icon-instagram.svg';
import { ReactComponent as Pinterest} from './images/icon-pinterest.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Red Hat Text', sans-serif;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage}), linear-gradient(to bottom, hsl(234, 17%, 12%), hsl(235, 16%, 14%), hsl(236, 21%, 26%));
  display: flex;
  justify-content: center;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Hill});
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Card = styled.div`
  position: relative;
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;


const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 25%;
  letter-spacing: 5px;
  color: hsl(0, 0%, 100%);
`;

const Timer = styled.div``;

const Social = styled.div`
  position: absolute;
  bottom: 8%;
  z-index: 3;
`;

const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;
  margin: 0 20px;
  color: white;
  cursor: pointer;
  fill: white;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>We're launching soon</Title>
          <Timer></Timer>
          <Social>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Pinterest />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </Social>
        </Card>
      </Wrapper>
      <BackgroundBottom />
    </Container>
  );
}

export default App;
