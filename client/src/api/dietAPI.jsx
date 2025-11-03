import axiosInstance from "./axiosInstance";

export const uploadDiet = async (formData) => {
  try {
    const res = await axiosInstance.post("/meal/analyze", formData);
    return res.data;
  } catch (error) {
    console.error("식단 업로드 실패:", error);
    throw error;
  }
};