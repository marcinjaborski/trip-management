import styled from "styled-components";

export const TripsListStyled = styled.div`
  height: 100%;
  width: 80%;
  background: #fcf7e5;
  padding: 1em;
  box-sizing: border-box;

  .filters {
    display: flex;
    gap: 2em;
  }

  .tiles {
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    align-items: baseline;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .tiles {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 426px) {
    .filters {
      flex-direction: column;
    }
    .tiles {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
