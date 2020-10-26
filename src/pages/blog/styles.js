import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  width: 100%;
  max-width: 1168px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 0 24px;
  margin: 40px auto 0;
  overflow: hidden;
  button {
    text-transform: uppercase;
    font-weight: bold;
    width: 240px;
    background: #73678a;
    border-width: initial;
    border-style: none;
    border-radius: 5px;
    cursor: pointer;
    height: 54px;
    transition: background 0.2s;
    font-size: 16px;
    color: white;
    &:hover {
      background: #795a8b;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

  @media (max-width: 800px) {
    button {
      margin-left: 0px;
      margin-top: 100px;
      background: #100f12;
      border-radius: 5px;
    }
  }
`;
