import styled from "styled-components";

export const Styled = styled.div`
  .container {
    margin-top: 30px;
  }

  .card-img-top {
    height: 68vh;
    overflow: hidden;

    @media (max-width: 1100px) {
      height: 35vh;
    }

    @media (max-width: 770px) {
      height: 35vh;
    }

    @media (max-width: 420px) {
      height: 30vh;
    }
  }

  .product-name {
    font-size: 230%;

    @media (max-width: 420px) {
      font-size: 120%;
    }
  }

  .product-summary {
    div {
      line-height: 2.6rem;

      @media (max-width: 420px) {
        line-height: 1.6rem;
        font-size: 68%;
      }
    }

    .in-stock {
      background-color: #46a74e;
      color: #fff;
      padding: 10px;
      margin-right: 10px;
      font-size: 78%;
    }

    .out-of-stock {
      background-color: #ef9a9a;
      color: #fff;
      padding: 10px;
      margin-right: 10px;
      font-size: 78%;
    }

    .order-soon-label {
      color: #46a74e;
    }
  }

  .quantity {
    width: 60px;
  }

  .btn {
    background-color: #1e88e5;
    color: #fff;
    font-size: 78%;
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0f4c75;
    }
  }

  .add-to-cart-text {
    margin-left: 10px;
  }

  .product-detail {
    div {
      line-height: 1.8rem;
    }

    @media (max-width: 420px) {
      font-size: 72%;
    }
  }
`;
