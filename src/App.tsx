import { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundImage from "./images/bg-stars.svg";
import Hill from "./images/pattern-hills.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Red Hat Text", sans-serif;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage}), linear-gradient(to bottom,	hsl(235, 15%, 14%), 	hsl(271, 23%, 18%));
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Hill});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  z-index: 1;
  @media (max-width: 375px) {
    background-size: 200vw 200px;
  }
`;

const Card = styled.div`
  position: relative;
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
`;

const Title = styled.div`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.span`
  color: hsl(0, 0%, 100%);
  font-size: 1.8rem;
  letter-spacing: 8px;
  text-transform: uppercase;
  font-weight: 700;
  @media (max-width: 375px) {
    font-size: 1.2rem;
    width: 90%;
    text-align: center;
  }
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30vh;
  min-width: 700px;
  @media (max-width: 375px) {
    min-width: 350px;
  }
`;

const CardTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.p`
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #8486a9;
  font-weight: 700;
  @media (max-width: 375px) {
    margin-top: 1.5rem;
    font-size: 0.4rem;
  }
`;

const Time = styled.div`
  width: 150px;
  height: 150px;
  background-color: #343650;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 12px 5px #191a24;
  &:after {
    position: absolute;
    content: "";
    width: 6px;
    height: 12px;
    background: #191a24;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 3;
  }
  &:before {
    position: absolute;
    content: "";
    width: 6px;
    height: 12px;
    background: #191a24;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 3;
  }
  @media (max-width: 375px) {
    width: 70px;
    height: 70px;
  }
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(25, 26, 36, 0.25);
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  height: 1px;
  width: 100%;
  transform: translateY(-50%);
  background: rgba(25, 26, 36, 0.3);
`;

const TimeText = styled.span`
  font-size: 5rem;
  color: hsl(345, 95%, 68%);
  font-weight: 700;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

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
  &:hover path {
    fill: ${({ color }) => color || "hsl(345, 95%, 68%)"};
  }
`;

const App = () => {
  const [days, setDays] = useState<number>(8);
  const [hours, setHours] = useState<number>(23);
  const [minutes, setMinutes] = useState<number>(55);
  const [seconds, setSeconds] = useState<number>(41);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setDays((days) => days - 1);
        setHours(24);
      }
      if (minutes === 0 && seconds === 0) {
        setHours((hours) => hours - 1);
        setMinutes(60);
      }
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(60);
      }
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(countdownTimer);
  }, [days, hours, minutes, seconds]);

  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>
            <TitleText>We're launching soon</TitleText>
          </Title>
          <Timer>
            <CardTimer>
              <Time>
                <Top />
                <Line />
                <Bottom />
                <TimeText>
                  {Math.floor(days / 10) === 0 ? `0${days}` : days}
                </TimeText>
              </Time>
              <Tag>Days</Tag>
            </CardTimer>
            <CardTimer>
              <Time>
                <Top />
                <Line />
                <Bottom />
                <TimeText>
                  {Math.floor(hours / 10) === 0 ? `0${hours}` : hours}
                </TimeText>
              </Time>
              <Tag>Hours</Tag>
            </CardTimer>
            <CardTimer>
              <Time>
                <Top />
                <Line />
                <Bottom />
                <TimeText>
                  {Math.floor(minutes / 10) === 0 ? `0${minutes}` : minutes}
                </TimeText>
              </Time>
              <Tag>Minutes</Tag>
            </CardTimer>
            <CardTimer>
              <Time>
                <Top />
                <Line />
                <Bottom />
                <TimeText>
                  {Math.floor(seconds / 10) === 0 ? `0${seconds}` : seconds}
                </TimeText>
              </Time>
              <Tag>Seconds</Tag>
            </CardTimer>
          </Timer>
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
};

export default App;
