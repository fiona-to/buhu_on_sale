import styled from "styled-components";

export const Styled = styled.div`
  .container {
    padding: 25px;
  }

  .grid {
    max-width: 760px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 20px auto;
  }

  .intro_general {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-radius: 50px;
    //border: 1px solid #000;
    background-color: #00c49f;
  }

  .intro__react {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__apollo {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__cloudinary {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__node__express {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__mobx {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__mongo-db {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .intro__graph-ql {
    grid-column-start: 1;
    grid-column-end: span 4;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  @media (min-width: 762px) {
    .grid {
      max-width: 1000px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 120px 120px 120px 120px 120px 120px 120px;
      margin: 18px auto;
      text-align: center;
    }

    .intro_general {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      //border: 1px solid #000;
      border: none;
      border-radius: 50px;
    }

    .intro__react {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
      border-right: 1px solid #000;
      border-top: 1px solid #000;
      border-radius: 50px;
    }

    .intro__apollo {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 5;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
    }

    .intro__cloudinary {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      border-radius: 50px;
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
    }

    .intro__mobx {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
    }

    .intro__mongo-db {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 6;
      grid-row-end: 8;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
    }

    .intro__graph-ql {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 8;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      border-radius: 50px;
    }
  }
`;
