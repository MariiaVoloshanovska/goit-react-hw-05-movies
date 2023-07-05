import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background-color: #101523;
  border-radius: 14px;
  transition: background-color 0.3s;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }

  span {
    color: #FFFAF0;
    font-weight: bold;
  }

  &:hover {
    background-color: #1f3047;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff69b4; 
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s ease-in-out;
`;
