import { CommonButton } from '@/_components/common/Button/style';
import { CommonContainer } from '@/_components/common/Container/style';
import { flexStart } from '@/_styles/reusableStyle';
import styled from '@emotion/styled';

const MyInfoContainer = styled(CommonContainer)`
  ${flexStart}

  gap: 3rem;
  margin-top: 3rem;
`;

const SelectAllButton = styled.button`
  height: 4rem;
  padding: 1rem;
  margin-left: auto;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const InputCheckBox = styled.input`
  position: relative;
  width: 2rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    content: attr(data-after);
    font-size: 1.5rem;
  }
`;

const ListContainer = styled(CommonContainer)`
  max-height: calc(100vh - 17.6rem - 7.7rem - 3rem); // 전체 높이 - my-info - 3개 버튼 높이 - margin-bottom
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const FollowerItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const SubmitButton = styled(CommonButton)`
  display: inline-block;
`;

export { MyInfoContainer, SelectAllButton, InputCheckBox, ListContainer, FollowerItem, SubmitButton };
