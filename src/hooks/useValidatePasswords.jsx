import React, { useEffect, useState } from "react";
const useValidatePasswords = () => {
  const [userData, setUserData] = useState({
    curPassword: "",
    password: "",
    confirmPassword: "",
    token: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const validatePasswords = (curPassword, password, confirmPassword) => {
    const validations = {
      // curPassword: curPassword.length >= 6,
      password: password.length >= 6,
      confirmPassword: confirmPassword.length >= 6,
      passwordMatch: password === confirmPassword,
    };
    const isFormValid = Object.values(validations).every((valid) => valid);
    setIsDisabled(!isFormValid);
    console.log(userData);
    console.log(`isFormValid is: ${isFormValid} Setting it to ${!isFormValid}`);
  };
  useEffect(() => {
    validatePasswords(null, userData.password, userData.confirmPassword);
  }, [userData]);
  return {
    handler: handleUserData,
    password: userData.password,
    confirmPassword: userData.confirmPassword,
    isDisabled,
  };
};

export default useValidatePasswords;
