import { useState } from 'react';

// Custom hook to manage user state
export const useUserState = () => {
  const [res, setRes] = useState({
    data: {
      firstName: "",
      lastName: "",
      school: "",
      email: "",
      phone: "",
    }
  });

  const updateRes = (newRes) => {
    console.log("newRes: ", newRes);
    setRes(newRes);
  };

  console.log("res: ", res);
  return {
    res,
    setRes,
    updateRes,
  };
};
