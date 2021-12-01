import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 10rem;
`;

export const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 80%;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  color: var(--text-title);
  font-size: 24px;
  margin: 20px;
`;

export const Text = styled.p`
  color: var(--text-subtitle);
  font-size: 20px;
  padding-top: 2rem;
  text-align: justify;
  margin: 20px;
`;
