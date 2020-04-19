import styled from "styled-components";

export const Styled = styled.div`
  .container {
    padding: 25px;
  }
  //--------------------------------------------------------------------------
  // FEATURE GRID - START
  //--------------------------------------------------------------------------
  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px auto;
  }

  .features__1 {
    grid-column-start: 1;
    grid-column-end: 2;

    ul {
      margin-left: 40px;
    }
  }

  .features__2 {
    grid-column-start: 2;
    grid-column-end: 3;

    ul {
      margin-left: 40px;
    }
  }

  @media (max-width: 766px) {
    .features__1 {
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 80%;
    }

    .features__2 {
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 80%;
    }
  }
  //--------------------------------------------------------------------------
  // FEATURE GRID - END
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  // TECHNOLOGY GRID - START
  //--------------------------------------------------------------------------
  .grid {
    max-width: 412px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 70px 120px 120px 120px 120px 120px 120px 120px 120px;
    margin: 20px auto;
  }

  .intro_general {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-radius: 40px;
    background-color: #48bd67;
    position: relative;
    color: #fff;

    & .open__source {
      position: absolute;
      font-size: 118%;
      transform: translate(30%, 6%);
    }

    & .open__packages {
      font-size: 118%;
      position: absolute;
      transform: translate(40%, 120%);
    }
  }

  .intro__react {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__react-logo {
      position: absolute;
      width: 60%;
      transform: translate(30%, 10%);
    }
  }

  .intro__apollo {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__apollo-logo {
      position: absolute;
      width: 70%;
      transform: translate(20%, 20%);
    }
  }

  .intro__cloudinary {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__cloudinary-logo {
      position: absolute;
      width: 36%;
      transform: translate(80%, 5%);
    }
  }

  .intro__node__express {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__node__express-logo {
      position: absolute;
      width: 60%;
      transform: translate(30%, 1%);
    }
  }

  .intro__mobx {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__mobx-logo {
      width: 70%;
      position: absolute;
      transform: translate(20%, 10%);
    }
  }

  .intro__mongo-db {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__mongo-logo {
      position: absolute;
      width: 78%;
      transform: translate(15%, 10%);
    }
  }

  .intro__graph-ql {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__graph-logo {
      position: absolute;
      width: 70%;
      transform: translate(20%, 20%);
    }
  }

  .intro__heroku {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 40px;
    position: relative;

    .intro__heroku-logo {
      position: absolute;
      width: 80%;
      transform: translate(13%, 12%);
    }
  }

  @media (min-width: 413px) {
    .grid {
      max-width: 800px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 60px 60px 60px 60px 60px 60px 60px 60px 60px;
      margin: 18px auto;
      text-align: center;
    }

    .intro_general {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      border: none;
      border-radius: 50px;
      position: relative;
      color: #fff;

      & .open__source {
        font-size: 100%;
        position: absolute;
        transform: translate(10%, 90%);
      }

      & .open__packages {
        font-size: 100%;
        position: absolute;
        transform: translate(10%, 250%);
      }
    }

    .intro__react {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__react-logo {
        position: absolute;
        width: 85%;
        transform: translate(-50%, 55%);
      }
    }

    .intro__cloudinary {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 5;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__cloudinary-logo {
        width: 70%;
        position: absolute;
        transform: translate(-50%, 30%);
      }
    }

    .intro__apollo {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__apollo-logo {
        width: 88%;
        position: absolute;
        transform: translate(-50%, 150%);
      }
    }

    .intro__node__express {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__node__express-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 40%);
      }
    }

    .intro__mobx {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mobx-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 110%);
      }
    }

    .intro__mongo-db {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mongo-logo {
        position: absolute;
        width: 90%;
        transform: translate(-50%, 130%);
      }
    }

    .intro__graph-ql {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__graph-logo {
        position: absolute;
        width: 140%;
        transform: rotate(90deg) translate(70%, 170%);
      }
    }

    .intro__heroku {
      grid-column-start: 1;
      grid-conlumn-end: 5;
      grid-row-start: 8;
      grid-row-end: 9;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__heroku-logo {
        positive: absolute;
        width: 37%;
        transform: translate(-50%, 5%);
      }
    }
  }

  @media (min-width: 762px) {
    .grid {
      max-width: 800px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 60px 60px 60px 60px 60px 60px 60px 60px 60px;
      margin: 18px auto;
      text-align: center;
    }

    .intro_general {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      border: none;
      border-radius: 50px;
      position: relative;
      color: #fff;

      & .open__source {
        position: absolute;
        transform: translate(50%, 60%);
      }

      & .open__packages {
        position: absolute;
        transform: translate(60%, 220%);
      }
    }

    .intro__react {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__react-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 20%);
      }
    }

    .intro__cloudinary {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 5;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__cloudinary-logo {
        width: 70%;
        position: absolute;
        transform: translate(-50%, 10%);
      }
    }

    .intro__apollo {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__apollo-logo {
        width: 88%;
        position: absolute;
        transform: translate(-50%, 80%);
      }
    }

    .intro__node__express {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__node__express-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 10%);
      }
    }

    .intro__mobx {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mobx-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 60%);
      }
    }

    .intro__mongo-db {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mongo-logo {
        position: absolute;
        width: 90%;
        transform: translate(-50%, 70%);
      }
    }

    .intro__graph-ql {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 8;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__graph-logo {
        position: absolute;
        width: 110%;
        transform: rotate(90deg) translate(50%, 170%);
      }
    }

    .intro__heroku {
      grid-column-start: 1;
      grid-conlumn-end: 5;
      grid-row-start: 8;
      grid-row-end: 9;
      border: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__heroku-logo {
        positive: absolute;
        width: 27%;
        transform: translate(-50%, 1%);
      }
    }
  }

  @media (min-width: 1010px) {
    .grid {
      max-width: 1000px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 120px 120px 120px 120px 120px 120px 120px 120px;
      margin: 18px auto;
      text-align: center;
    }

    .intro_general {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      border: none;
      border-radius: 50px;
      position: relative;
      color: #fff;

      & .open__source {
        font-size: 180%;
        position: absolute;
        transform: translate(30%, 80%);
      }

      & .open__packages {
        font-size: 180%;
        position: absolute;
        transform: translate(40%, 230%);
      }
    }

    .intro__react {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
      border-right: 1px solid #000;
      border-top: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__react-logo {
        position: absolute;
        width: 95%;
        transform: translate(-50%, 40%);
      }
    }

    .intro__cloudinary {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 5;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__cloudinary-logo {
        width: 85%;
        position: absolute;
        transform: translate(-50%, 20%);
      }
    }

    .intro__apollo {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__apollo-logo {
        width: 98%;
        position: absolute;
        transform: translate(-50%, 120%);
      }
    }

    .intro__node__express {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 8;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__node__express-logo {
        position: absolute;
        width: 80%;
        transform: translate(-50%, 40%);
      }
    }

    .intro__mobx {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mobx-logo {
        position: absolute;
        width: 90%;
        transform: translate(-50%, 90%);
      }
    }

    .intro__mongo-db {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 8;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__mongo-logo {
        position: absolute;
        width: 90%;
        transform: translate(-50%, 115%);
      }
    }

    .intro__graph-ql {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 8;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__graph-logo {
        position: absolute;
        width: 160%;
        transform: rotate(90deg) translate(50%, 170%);
      }
    }

    .intro__heroku {
      grid-column-start: 1;
      grid-conlumn-end: 5;
      grid-row-start: 8;
      grid-row-end: 9;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
      position: relative;

      .intro__heroku-logo {
        positive: absolute;
        width: 36%;
      }
    }
  }
  //--------------------------------------------------------------------------
  // TECHNOLOGY GRID - END
  //--------------------------------------------------------------------------
`;
