import styled from "styled-components";

export const Styled = styled.div`
  .cart-item-text {
    margin-top: 20px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 80px auto 50px 50px 50px;
    grid-gap: 6px;
    margin-top: 20px;
  }

  .grid-container > div {
    font-size: 82%;
    //background-color: #1e88e5;
  }

  .check-out-total {
    font-size: 82%;
    line-height: 32px;
  }

  .btn {
    background-color: #1e88e5;
    color: #fff;
    font-size: 78%;
    border: none;
    margin-top: 10px;
    transition: background-color 0.2s;

    .check-out {
      margin-left: 10px;
      margin-right: 10px;
    }

    &:hover {
      background-color: #0f4c75;
    }
  }
`;
