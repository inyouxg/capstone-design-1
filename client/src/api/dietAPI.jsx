import axiosInstance from "./axiosInstance";

export const uploadDiet = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/meal/analyze", formData);
    return data;
  } catch (error) {
    console.error("식단 업로드 실패:", error);
    throw error;
  }
};

export const getDietReport = async () => {
  const { data } = await axiosInstance.get("/meal/report");
  return data;
}