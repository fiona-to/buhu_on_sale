import styled from "styled-components";

export const Styled = styled.div`
  .card-deck {
    margin-top: 10px;
  }

  .card-img-top {
    height: 30vh;
    overflow: hidden;

    @media (max-width: 1100px) {
      height: 20vh;
    }

    @media (max-width: 800px) {
      height: 20vh;
    }

    @media (max-width: 420px) {
      height: 30vh;
    }
  }

  .card-text {
    font-size: 82%;
    font-style: italic;
  }

  .btn {
    background-color: #1e88e5;
    color: #fff;
    font-size: 72%;
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0f4c75;
    }
  }
`;
