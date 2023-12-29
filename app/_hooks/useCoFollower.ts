import { getFollower, getFollowing } from '@/_apis/getFollow';

import { useQuery } from '@tanstack/react-query';

interface UserInfo2 {
  avatar_url: string;

  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface UserInfo {
  avatar_url: string;
  login: string;
}
const useGetCoFollower = (pat: string, username: string, type: string) => {
  //나를 팔로우하는 사람
  const followerList = useQuery({
    queryKey: ['followerList'],
    queryFn: async () => await getFollower(pat, username),
  });

  const followingList = useQuery({
    queryKey: ['followingList'],
    queryFn: async () => await getFollowing(pat, username),
  });

  const follwerInfoList = followerList?.data?.map((follower: UserInfo) => {
    return follower;
  });

  const followingInfoList = followingList?.data?.map((following: UserInfo) => {
    return following;
  });

  // 왜 안되는지.. 모르겠습니다
  // const nonFollowingList =
  //   follwerInfoList &&
  //   followingInfoList &&
  //   follwerInfoList.filter((item: UserInfo) => {
  //     followingInfoList.find((item2: UserInfo) => item2.login === item.login);
  //   });

  const followingInfoLogin =
    follwerInfoList && followingInfoList && new Set(followingInfoList?.map((item: UserInfo2) => item.login));
  const nonFollowList = follwerInfoList?.filter((item1: UserInfo2) => !followingInfoLogin?.has(item1.login));

  const coFollowList = follwerInfoList?.filter((item1: UserInfo2) => followingInfoLogin?.has(item1.login));
  if (type === 'coFollowList') {
    return coFollowList;
  } else if (type === 'nonFollowList') {
    return nonFollowList;
  } else {
    return ['error'];
  }
};

export default useGetCoFollower;
