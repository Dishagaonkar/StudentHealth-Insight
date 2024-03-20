import { useState } from 'react';

// Initial state
const initialState = "empty";

// Custom hook to manage user state
export const useUserState = () => {
  const [res, setRes] = useState(initialState);

  return {
    res,
    setRes,
  };
};
