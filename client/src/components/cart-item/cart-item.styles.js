import styled from "styled-components";

export const Styled = styled.div`
  .item-grid-container {
    display: grid;
    grid-template-columns: 100px auto 50px 70px 60px;
    grid-gap: 6px;
    margin-top: 20px;

    div {
      font-size: 82%;
      font-weight: bold;
    }
  }

  .product-link,
  .product-link:visited {
    color: #1b262c;
  }

  .form-control-sm {
    font-size: 92%;
  }

  .cart-item-remove,
  .cart-item-remove:visited {
    font-size: 82%;
    color: #1b262c;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
  }

  .right-align {
    text-align: right;
  }

  .emphasise-text {
    font-weight: bold;
  }
`;
