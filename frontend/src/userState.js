import { useState } from 'react';

// Custom hook to manage user state
export const useUserState = () => {
  const [res, setRes] = useState("empty");

  const updateRes = (newRes) => {
    setRes(newRes);
  };

  return {
    res,
    setRes,
    updateRes,
  };
};
