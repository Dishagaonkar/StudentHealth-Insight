import { set } from 'mongoose';
import { useState } from 'react';

// Initial state
const [res, setRes] = useState("empty");

// Custom hook to manage user state
export const updateRes = (newRes) => { 
  setRes(newRes);
}