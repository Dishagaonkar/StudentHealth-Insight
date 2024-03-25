import { set } from 'mongoose';
import { useState } from 'react';

// Initial state

// Custom hook to manage user state
export const updateRes = (newRes) => { 
  const [res, setRes] = useState("empty");
  setRes(newRes);
}