import styled from "styled-components";
import { theme } from "@src/theme";

export const InfoWindowStyled = styled.div`
  max-width: 30vw;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.1s ease-out;
    color: black;
  }

  a:hover {
    color: ${theme.palette.primary.main};
  }

  span {
    font-size: 0.875rem;
  }

  img {
    object-fit: contain;
    width: 100%;
  }
`;
