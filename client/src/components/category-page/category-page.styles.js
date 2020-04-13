import styled from "styled-components";

export const Styled = styled.div`
  .container {
    margin-top: 30px;

    .app-spinner {
      min-width: 100%;
      min-height: 100%;
      margin: 50px auto;
      text-align: center;
    }

    @media (max-width: 420px) {
      margin-top: 10px;
    }
  }
`;
