import styled from "styled-components";
import { Paper } from "@mui/material";

export const LoginStyled = styled(Paper)`
  width: 40%;
  min-height: 100%;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 250px;
  margin: auto;
  padding: 3rem 1rem;

  button {
    color: white;
    width: fit-content;
    align-self: center;
  }
`;
