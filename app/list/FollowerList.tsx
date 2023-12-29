/** @jsxImportSource @emotion/react */

import * as S from './style';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import useGetCoFollower from '@/_hooks/useCoFollower';
import { useSearchParams } from 'next/navigation';
import Button from '@/_components/common/Button';
import { flexBetween, flexColumn, flexStart } from '@/_styles/reusableStyle';

interface ISelectedRadioTypesProps {
  isNoAll: boolean;
  listLength: number;
  selectedUser: number[];
  /**
   * _allSelected 앞에 __를 붙인 이유:
   * allSelected 라고 했더니
   * allSelected is defined but never used
   * 라는 에러가 떠서
   * eslint.json에
   * "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }] 추가한 뒤
   * _allSelected로 변경함
   */
  selectAllUsersHandler: (_allSelected: boolean) => void;
}
interface UserInfo {
  id: number;
  avatar_url: string;
  login: string;
}

/** 모두 선택 / 모두 해지 선택하는 radio 부분 */
const SelectRadio = ({ isNoAll, listLength, selectedUser, selectAllUsersHandler }: ISelectedRadioTypesProps) => {
  const selectedUserLength = selectedUser.length;
  const allSelected = selectedUserLength === listLength;

  return (
    <div css={buttons}>
      {isNoAll && (
        <Button type="submit" disabled={selectedUserLength === 0}>
          맞팔하기
        </Button>
      )}
      <S.SelectAllButton
        type="button"
        onClick={() => {
          selectAllUsersHandler(allSelected);
        }}
      >
        {allSelected ? '모두 해제' : '모두 선택'}
      </S.SelectAllButton>
    </div>
  );
};
type ListType = 'coFollowList' | 'nonFollowList' | '';

interface FollowListPropTypes {
  isNoAll: boolean;
  listType: ListType;
}

type ListTypes = {
  login: string;
  avatar_url: string;
  id: number;
};

interface IFollowerDataTypesProps {
  list: ListTypes[];
  selectedUser: number[];
  selectUsersHandler: (_isAdded: boolean, _userId: number) => void;
}

/** follower 목록 보여주는 부분 */
const FollowerData = ({ list, selectedUser, selectUsersHandler }: IFollowerDataTypesProps) => {
  const selectUserHandler = (e: FormEvent<HTMLInputElement>) => {
    const userId = Number((e.target as HTMLInputElement).value);

    return selectUsersHandler(selectedUser.includes(userId), userId);
  };

  return (
    <ul css={followerList}>
      {list?.map(({ id, avatar_url, login }: UserInfo) => (
        <S.FollowerItem key={`${avatar_url}-${login}`}>
          <label css={followerInfo} htmlFor={`${login}`}>
            <Image css={userImage} src={avatar_url} alt="user-profile-img" width={50} height={50} priority />
            <span>{login}</span>
            <S.InputCheckBox
              id={`${login}`}
              type="checkbox"
              value={id}
              checked={selectedUser.includes(id)}
              onChange={selectUserHandler}
            />
          </label>
        </S.FollowerItem>
      ))}
    </ul>
  );
};

const FollowerList = ({ isNoAll, listType }: FollowListPropTypes) => {
  const [selectedUser, setSelectedUsers] = useState<number[]>([]);

  // const key: string = sessionStorage.getItem('token') ?? '';
  // const username: string = sessionStorage.getItem('username') ?? '';
  const searchParams = useSearchParams();
  const key = searchParams.get('token') ?? '';
  const username = searchParams.get('username') ?? '';
  const list = useGetCoFollower(key, username, listType);
  const listLength = list?.length;

  /** 전체 선택 / 전체 해제 */
  const selectAllUsersHandler = (allSelected: boolean) => {
    allSelected ? setSelectedUsers([]) : setSelectedUsers(list.map(({ id }: { id: number }) => id));
  };

  const selectUserHandler = (isAdded: boolean, userId: number) => {
    isAdded
      ? setSelectedUsers(selectedUser.filter((selectedUserId) => selectedUserId !== userId))
      : setSelectedUsers((prev) => [...prev, userId]);
  };

  return (
    <S.ListContainer>
      <form>
        <SelectRadio
          isNoAll={isNoAll}
          listLength={listLength}
          selectedUser={selectedUser}
          selectAllUsersHandler={selectAllUsersHandler}
        />
        <FollowerData list={list} selectedUser={selectedUser} selectUsersHandler={selectUserHandler} />
      </form>
    </S.ListContainer>
  );
};

export default FollowerList;

const buttons = css`
  ${flexBetween}

  margin-bottom: 2rem;
`;

const followerList = css`
  ${flexColumn}

  gap: 3rem;
`;

const followerInfo = css`
  ${flexStart}

  gap: 2rem;
  padding: 2rem;
`;

const userImage = css`
  border-radius: 50%;
`;
