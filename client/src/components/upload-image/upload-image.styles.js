import styled from "styled-components";

export const Styled = styled.div`
  .select-img-card {
    display: table;
    float: left;
    width: 104px;
    height: 104px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-align: center;
    vertical-align: top;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;

    @media (min-width: 760px) {
      margin-left: 1rem;
    }
  }

  .upload-card {
    width: 104px;
    height: 104px;
    margin: 8px;
    text-align: center;
    vertical-align: top;
  }
`;
