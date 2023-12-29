import styled from '@emotion/styled';

const CommonContainer = styled.div`
  width: calc(100% - 4rem); /* 100% - 양 옆 margin */
  max-width: 80rem;
  padding: 2rem;
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export { CommonContainer };
