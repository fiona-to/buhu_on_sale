import styled from "styled-components";

export const Styled = styled.div`
  .navbar {
    background-color: #0f4c75;
  }

  .navbar-brand,
  .navbar-brand:hover,
  .navbar-brand:visited {
    color: #e3f2fd;
    font-size: 140%;
  }

  .navbar-nav .nav-link,
  .navbar-nav .nav-link:visited {
    color: #bbe1fa;
    font-size: 68%;
    margin-left: 35px;
    padding-bottom: 0;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s;

    .cart-text {
      margin-left: 8px;
    }

    .badge {
      font-size: 92%;
      color: white;
      background-color: #46a74e;
      transform: translateY(-8px);
    }

    &:hover {
      color: #3282b8;
      border-bottom: 2px solid #3282b8;
    }
  }

  .btn {
    background-color: #e3f2fd;
    color: #0f4c75;
    border: none;
    text-transform: uppercase;
    font-size: 68%;
  }

  .form-control {
    font-size: 68%;
  }
`;
