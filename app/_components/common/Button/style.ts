import styled from '@emotion/styled';

interface ICommonButtonTypesProps {
  $isActive?: boolean;
  disabled?: boolean;
}

const CommonButton = styled.button<ICommonButtonTypesProps>`
  display: inline-block;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ $isActive, disabled, theme }) =>
    disabled ? theme.colors.darkGrey : $isActive ? theme.colors.darkGrey : theme.colors.lightGrey};
  transition: all 0.3s ease;
  font-size: 1.4rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? '' : theme.colors.grey)};
  }
`;

export { CommonButton };
