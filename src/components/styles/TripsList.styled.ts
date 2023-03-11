import styled from "styled-components";

export const TripsListStyled = styled.div`
  height: 100%;
  width: 80%;
  background: #fcf7e5;
  padding: 1em;
  box-sizing: border-box;

  .tiles {
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    grid-gap: 1em;
  }
`;
