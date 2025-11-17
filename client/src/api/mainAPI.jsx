import axiosInstance from "./axiosInstance";

export const getDashboardData = async () => {
  const { data } = await axiosInstance.get("/users/main/dashboard");
  return data;
}

export const getMealsToday = async () => {
  const { data } = await axiosInstance.get("/meal/list");
  return data;
}