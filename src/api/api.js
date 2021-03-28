import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cbf4e5e8-7f5d-4438-82d1-9a4b0eaf09da",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize =10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },

  logout() {
    return instance.delete(`auth/login`)
}
}

export const profileAPI = {
  getUserProfile(userid) {
    return instance.get(`profile/` + userid).then((response) => response.data);
  },
  getStatus(userid) {
    return instance.get(`profile/status/` + userid).then((response) => response.data);
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status}).then((response) => response.data);
  },

  savePhoto(photoFile){
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {headers:{
      "Content-Type": 'multipart/form-data'
    }}).then((response) => response.data);
  },
  
  savePhoto(profile){
    return instance.put(`profile`,profile).then((response) => response.data);
  }

};
