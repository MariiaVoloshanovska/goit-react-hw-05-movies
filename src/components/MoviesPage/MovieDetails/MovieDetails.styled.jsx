import styled from 'styled-components';
// import { Form, Field } from 'formik';

export const Input = styled.input`
  width: 250px;
  padding: 5px;
  font-size: 15px;
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
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 5px;
  background-color: #7B68EE;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #9370DB;
  }
`;


