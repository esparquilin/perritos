import React, { useState } from "react";

export const FormContext = React.createContext({
  formIsShown: false,
  setFormIsShown: () => {},
  formSucceed: false,
  setFormSucceed: () => {},
});

export const DataProvider = ({ children }) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [formSucceed, setFormSucceed] = useState(false);

  return (
    <FormContext.Provider
      value={{ formIsShown, setFormIsShown, formSucceed, setFormSucceed }}
    >
      {children}
    </FormContext.Provider>
  );
};
