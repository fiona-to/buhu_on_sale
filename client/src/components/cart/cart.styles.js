import styled from "styled-components";

export const Styled = styled.div`
  .cart-header-text {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .right-align {
    text-align: right;
  }

  .emphasise-text {
    font-weight: bold;
  }

  .checkout-grid-container {
    display: grid;
    grid-template-columns: auto 80px;
    grid-gap: 6px;
    margin-top: 30px;

    div {
      font-size: 82%;
    }
  }

  .btn {
    background-color: #1e88e5;
    color: #fff;
    font-size: 78%;
    border: none;
    margin-top: 20px;
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
