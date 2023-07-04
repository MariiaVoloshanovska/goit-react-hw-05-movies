import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #6149fc;
  }

  /* Woman-specific styles */
  &.woman {
    color: pink;
  }
`;


export const Ul = styled.ul`
  list-style: none;
  margin: 0;

  /* Woman-specific styles */
  &.woman {
    background-color: lavender;
  }
`;


export const Li = styled.li`
  margin-top: 5px;
  padding: 5px;
  font-weight: 600;

  /* Woman-specific styles */
  &.woman {
    color: purple;
  }
`;


export const H1 = styled.h1`
  margin-left: 10px;

  /* Woman-specific styles */
  &.woman {
    color: pink;
  }
`;
