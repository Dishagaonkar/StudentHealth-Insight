import { set } from 'mongoose';
import { useState } from 'react';

// Initial state
const initialState = "empty";

export const updateRes = (newRes) => { 
  setRes(newRes);
}

// Custom hook to manage user state
export const useUserState = () => {
  const [res, setRes] = useState(initialState);

  return {
    res,
    setRes,
  };
};
