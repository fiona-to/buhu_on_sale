import styled from "styled-components";

export const Styled = styled.div`
  .carousel .carousel-item img {
    height: 48vh;
    overflow: hidden;

    @media (max-width: 424px) {
      height: 30vh;
    }

    @media (max-width: 800px) {
      height: 40vh;
    }

    @media (max-width: 1100px) {
      height: 40vh;
    }
  }
`;
