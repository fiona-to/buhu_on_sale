import styled from "styled-components";

export const Styled = styled.div`
  .container {
    background-color: #fff;
    min-height: 100%;
  }

  .content {
    text-align: center;
    display: block;
    margin: 100px auto;
  }

  .text__404 {
    display: inline-block;
    color: #fff;
  }

  .text__digits {
    display: inline-block;
    background-color: #07b3f9;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: relative;

    span {
      font-size: 120px;
      font-weight: bold;
      position: absolute;
      transform: translate(-36px, -18px);
    }
  }

  .text__description {
    text-align: center;
    display: block;
    font-size: 200%;
    line-height: 80%;
    color: #a2a2a2;
    font-weight: bold;
    margin: 48px auto;
  }

  .text__go-home {
    text-align: center;
    display: block;
    font-size: 110%;
    color: #a2a2a2;
    text-decoration: underline;
    text-transform: uppercase;
    padding-bottom: 6px;
  }

  @media (max-width: 420px) {
    .text__digits {
      width: 90px;
      height: 90px;

      span {
        font-size: 70px;
        transform: translate(-19px, -8px);
      }
    }

    .text__description {
      font-size: 130%;
    }

    .text__go-home {
      font-size: 86%;
    }
  }
`;
