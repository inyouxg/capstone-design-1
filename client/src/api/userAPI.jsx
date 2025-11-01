import axiosInstance from "./axiosInstance";

export const ensureAnonymousSession = async () => {
  try {
    await axiosInstance.post("/auth/anonymous");
  } catch (error) {
    console.log("익명 세션 확인 오류", error);
  }
};

export const getProfileStatus = async () => {
  // 서버는 { completed: boolean } 형태로 응답한다고 가정하기!
  const res = await axiosInstance.get("/users/profile/status");
  return res.data;
};

export const getProfile = async () => {
  const res = await axiosInstance.get('/users/profile');
  return res.data;
};

export const registerProfile = async (profileData) => {
  const res = await axiosInstance.put('/users/profile', profileData);
  return res.data;
};
