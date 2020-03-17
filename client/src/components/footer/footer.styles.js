import styled from "styled-components";

export const Styled = styled.div`
  .row {
    background-color: #0f4c75;
    margin-top: 30px;
    text-align: center;

    p {
      color: #e3f2fd;
      font-size: 68%;
      text-transform: uppercase;
      padding-top: 15px;
    }

    @media (max-width: 420px) {
      margin-top: 10px;
    }
  }
`;
