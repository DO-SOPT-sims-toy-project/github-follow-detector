/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import Button from '@/_components/common/Button';
import { flexCenter, flexColumn, flexStart } from '@/_styles/reusableStyle';
import FollowerList from './FollowerList';

/** 내 정보 부분 */
const UserInfo = () => {
  return (
    <S.MyInfoContainer>
      <Image css={userImage} src="/egg_princess.png" alt="user-profile-img" width={100} height={100} priority />
      <div css={userInfo}>
        <p>simeunseo</p>
        <p>what rly matters</p>
        <div css={followerCounts}>
          <span>팔로워: 51</span>
          <span>팔로잉: 60</span>
        </div>
      </div>
    </S.MyInfoContainer>
  );
};

type ListType = 'coFollowList' | 'nonFollowList';
interface ListTypeInterfaces {
  isActiveState: string;
  isActiveHandler: (_str: string) => void;
  setListType: Dispatch<SetStateAction<ListType>>;
}
/** 맞팔 아닌 사람 / 맞팔 확인하기 / 뒤로 가기 버튼 부분 */
const ListButtons = ({ isActiveState, isActiveHandler, setListType }: ListTypeInterfaces) => {
  return (
    <div css={followerButton}>
      <Button
        isActive={isActiveState === 'all'}
        onClick={() => {
          setListType('nonFollowList');
          isActiveHandler('no-all');
        }}
      >
        맞팔 아닌 사람
      </Button>
      <Button
        isActive={isActiveState === 'no-all'}
        onClick={() => {
          setListType('coFollowList');
          isActiveHandler('all');
        }}
      >
        맞팔 확인하기
      </Button>
      <Button>
        <Link href="/">뒤로 가기</Link>
      </Button>
    </div>
  );
};

/** list page */
const ListPage = () => {
  const [listType, setListType] = useState<ListType>('coFollowList');
  const [isActive, setIsActive] = useState('all'); // 맞팔 아닌 사람 / 맞팔 확인하기 버튼 active 상태 표시

  return (
    <>
      <UserInfo />
      <ListButtons
        isActiveState={isActive}
        isActiveHandler={(str: string) => {
          setIsActive(str);
        }}
        setListType={setListType}
      />
      <FollowerList isNoAll={isActive === 'no-all'} listType={listType} />
    </>
  );
};

export default ListPage;

const userImage = css`
  border-radius: 50%;
`;

const userInfo = css`
  ${flexColumn}

  gap: 0.5rem;
`;

const followerCounts = css`
  ${flexStart}

  gap: 3rem;
`;

const followerButton = css`
  ${flexCenter}

  gap: 3rem;
  margin: 2rem 0;
  font-size: 2rem;
`;
