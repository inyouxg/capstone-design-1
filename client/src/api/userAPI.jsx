import axiosInstance from "./axiosInstance";

export const ensureAnonymousSession = async () => {
  try {
    await axiosInstance.post("/users/auth/anonymous");
  } catch (error) {
    console.log("익명 세션 확인 오류", error);
  }
};

export const getProfileStatus = async () => {
  // 서버는 { completed: boolean } 형태로 응답한다고 가정하기!
  const { data } = await axiosInstance.get("/users/profile/status");
  console.log("서버 응답 데이터:", data);
  return data;
};

export const getProfile = async () => {
  const { data } = await axiosInstance.get('/users/profile');
  return data;
};

export const registerProfile = async (profileData) => {
  const { data } = await axiosInstance.put('/users/profile', profileData);
  return data;
};
