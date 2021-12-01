import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const Title = styled.h1`
  color: var(--text-title);
  font-weight: 700;
  font-size: 42px;
`;

export const Content = styled.div`
  color: var(--text);
  font-weight: 700;
  font-size: 55px;
`;

export const Clock = styled.h2`
  display: flex;
  justify-content: center;
  gap: 7rem;
  font-size: 55px;
  margin-left: 3rem;
`;

export const ClockTimer = styled.p`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 144px;
`;
