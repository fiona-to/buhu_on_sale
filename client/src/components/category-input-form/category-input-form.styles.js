import styled from "styled-components";

export const Styled = styled.div`
  .container {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    font-size: 82%;
    margin: 0;
  }

  .form-group {
    margin-bottom: 0;
  }

  .action-btn {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .hidden-text {
    @media (min-width: 760px) {
      margin-left: 1rem;
    }
  }
`;
