export const getProfile = async () => {
  const res = await axios.get('/users/profile');
  return res.data;
};

export const registerProfile = async (profileData) => {
  const res = await axios.put('/users/profile', profileData);
  return res.data;
};
