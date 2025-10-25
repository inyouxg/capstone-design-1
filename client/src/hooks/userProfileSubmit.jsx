import { useState } from "react";
import { registerProfile } from "../api/userAPI";

export const useProfileSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  
  const submitProfile = async (profileData) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const result = await registerProfile(profileData);
      return result;
    } catch (err) {
      setIsError(true);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitProfile, isLoading, isError };
};