import styled from 'styled-components';


export const Input = styled.input`
  width: 250px;
  padding: 5px;
  font-size: 15px;

  /* Woman-specific styles */
  &.woman {
    border: 2px solid pink;
  }
`;


export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-align: center;

  /* Woman-specific styles */
  &.woman {
    background-color: lavender;
  }
`;


export const Button = styled.button`
  padding: 8px;
  margin-left: 5px;
  background-color: #6360f7;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: #3936f5;
  }

  /* Woman-specific styles */
  &.woman {
    background-color: pink;
  }
`;
