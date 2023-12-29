import client from './client';

const PER_PAGE: number = 100;

//나를 팔로우 하는 사람
export const getFollower = async (pat: string, username: string) => {
  const { data } = await client.get(`/users/${username}/followers?per_page=${PER_PAGE}`, {
    headers: {
      Authorization: `Bearer ${pat}`,
    },
  });
  return data;
};

//내가 팔로잉하는 사람
export const getFollowing = async (pat: string, username: string) => {
  const { data } = await client.get(`/users/${username}/following?per_page=${PER_PAGE}`, {
    headers: {
      Authorization: `token ${pat}`,
    },
  });

  return data;
};
