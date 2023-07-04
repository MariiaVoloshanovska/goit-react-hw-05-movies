import styled from 'styled-components';


export const Div = styled.div`
  display: flex;
  text-align: center;

  /* Woman-specific styles */
  &.woman {
    background-color: lavender;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  margin: 0;

  /* Woman-specific styles */
  &.woman {
    background-color: purple;
  }
`;


export const Li = styled.li`
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #cfcaca;
  border-radius: 3px;
  border: 1px solid;

  /* Woman-specific styles */
  &.woman {
    background-color: purple;
    color: white;
  }
`;
