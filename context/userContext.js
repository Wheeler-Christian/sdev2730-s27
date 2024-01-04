import { createContext, useState } from "react";

export const UserContext = createContext({
  firstName: "",
  lastName: "",
  // phoneNum: "",
  // email: "",
  addFirstName: (newFirstName) => {},
  addLastName: (newLastName) => {},

});

function UserContextProvider({ children }) {
  // set up state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  function addFirstName(newFirstName) {
    setFirstName(newFirstName);
  }

  function addLastName(newLastName) {
    setLastName(newLastName);
  }

  function addPhoneNum(newPhoneNum) {
    setPhoneNum(newPhoneNum);
  }

  function addEmail(newEmail) {
    setEmail(newEmail);
  }

  const value = {
    firstName: firstName,
    lastName: lastName,
    phoneNum: phoneNum,
    email: email,
    addFirstName: addFirstName,
    addLastName: addLastName,
    addPhoneNum: addPhoneNum,
    addEmail: addEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
