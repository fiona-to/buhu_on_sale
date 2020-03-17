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
    padding: 5px 0px 8px 0px;
    margin: 0px 18px 20px 17px;
    border-bottom: 1px solid #3282b8;

    .navbar-brand__text {
      padding: 0px 23px 0px 10px;
    }
  }

  .navbar-nav .nav-link,
  .navbar-nav .nav-link:visited {
    color: #bbe1fa;
    font-size: 68%;
    padding: 9px 9px;
    margin: 0px 0px 7px 10px;
    text-transform: uppercase;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;

    .side-bar__text {
      padding: 0px 23px 0px 10px;
    }

    &:hover {
      color: #bbe1fa;
      background-color: #455a64;
    }
  }

  .navbar-nav .nav-link__selected,
  .navbar-nav .nav-link__selected:visited {
    background-color: #3282b8;
    text-decoration: none;

    &:hover {
      color: #bbe1fa;
      background-color: #3282b8;
    }
  }

  @media (min-width: 760px) {
    .navbar {
      position: relative;
      height: 100vh;
    }

    .navbar-collapse {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }

  @media (width: 768px) {
    .navbar-brand {
      .navbar-brand__text {
        padding: 0px 26px 0px 16px;
      }
    }
    .navbar-nav .nav-link,
    .navbar-nav .nav-link__selected {
      .side-bar__text {
        padding: 0px 26px 0px 16px;
      }
    }
  }

  @media (min-width: 1200px) {
    .navbar-brand {
      .navbar-brand__text {
        padding: 0px 46px 0px 16px;
      }
    }
    .navbar-nav .nav-link,
    .navbar-nav .nav-link__selected {
      .side-bar__text {
        padding: 0px 46px 0px 16px;
      }
    }
  }

  @media (min-width: 1300px) {
    .navbar-brand,
    .navbar-brand:hover,
    .navbar-brand:visited {
      .navbar-brand__text {
        padding: 0px 66px 0px 16px;
      }
    }
    .navbar-nav .nav-link,
    .navbar-nav .nav-link__selected {
      .side-bar__text {
        padding: 0px 66px 0px 16px;
      }
    }
  }
`;
