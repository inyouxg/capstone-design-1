import axiosInstance from "./axiosInstance";

export const uploadDiet = async (formData) => {
  const { data } = await axiosInstance.post("/meal/analyze", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getDietReport = async () => {
  const { data } = await axiosInstance.get(`/meal/report/${mealId}`);
  return data;
}