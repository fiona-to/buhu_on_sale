import styled from "styled-components";

export const Styled = styled.div`
  .cart-item-text {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .item-grid-container {
    display: grid;
    grid-template-columns: 100px auto 60px 60px 60px;
    grid-gap: 6px;
    margin-top: 20px;

    div {
      font-size: 82%;
    }
  }

  .product-link,
  .product-link:visited {
    color: #1b262c;
  }

  .cart-item-remove,
  .cart-item-remove:visited {
    font-size: 82%;
    color: #1b262c;
    float: right;
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
