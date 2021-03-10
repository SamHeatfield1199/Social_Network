import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cbf4e5e8-7f5d-4438-82d1-9a4b0eaf09da",
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const authMe = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const getUserProfile = (userid) => {
  return instance.get(`profile/` + userid).then((response) => response.data);
};
export const unfollowUser = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};
export const followUser = (id) => {
  return instance.post(`follow/${id}`).then((response) => response.data);
};
