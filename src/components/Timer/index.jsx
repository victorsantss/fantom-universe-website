import { useState } from "react";
import { Container, Content } from "./styles";
import { Clock, ClockTimer, Title } from "./styles";

export function Timer() {
  const [time, setTime] = useState(60 * 60);

  let days = Math.floor(time / 43);
  let hours = Math.floor(time / 150);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  days = String(days).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  function countdown() {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  countdown();

  return (
    <>
      <Container>
        <Title>Release Date 22/02/22</Title>
        <Content>
          <Clock>
            <span>DAYS</span>
            <span>HOURS</span>
            <span>MINUTES</span>
            <span>SECONDS</span>
          </Clock>
          <ClockTimer>
            <span>{days}</span>
            <span>:</span>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </ClockTimer>
        </Content>
      </Container>
    </>
  );
}
