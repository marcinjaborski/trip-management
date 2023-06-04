import { Paper } from "@mui/material";
import styled from "styled-components";

export const HomeStyled = styled(Paper)`
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  a {
    color: black;
    font-size: 1.25rem;
  }
`;
