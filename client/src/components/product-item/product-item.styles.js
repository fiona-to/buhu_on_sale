import styled from "styled-components";

export const Styled = styled.div`
  .card {
    margin-top: 30px;

    @media (max-width: 420px) {
      margin-top: 20px;
    }
  }

  .img-container {
    position: relative;

    .card-img-top {
      height: 36vh;
      overflow: hidden;
      opacity: 1;
      transition: opacity ease-in-out 0.2s;
    }

    .btn-container {
      font-size: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-46%, -50%);
      opacity: 0;

      .detail,
      .add-cart {
        background-color: #0f4c75;
        color: #fff;
        margin: 5px;
        padding: 3px;
        text-align: center;
        border-radius: 5px;
        text-transform: uppercase;

        &:hover {
          cursor: pointer;
        }
      }
    }

    &:hover .card-img-top {
      opacity: 0.3;
    }

    &:hover .btn-container {
      opacity: 1;
    }

    @media (max-width: 1024px) {
      .card-img-top {
        height: 23vh;
      }
    }

    @media (max-width: 800px) {
      .card-img-top {
        height: 23vh;
      }
    }
  }

  .txt-container {
    padding: 5px;
    font-size: 72%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      font-size: 72%;
    }
    @media (max-width: 800px) {
      font-size: 72%;
    }
    @media (max-width: 420px) {
      font-size: 72%;
    }
  }
`;
