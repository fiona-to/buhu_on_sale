import styled from "styled-components";

export const Styled = styled.div`
  #page-container {
    min-height: 100%;
    position: relative;
  }

  #content-wrapper {
    padding-bottom: 3.6rem; /* Height of the footer */
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 9999;
  }

  .view-all {
    font-size: 90%;
    margin-left: 20px;
  }

  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.6rem; /* Height of the footer */
  }
`;
