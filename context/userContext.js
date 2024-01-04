import { createContext, useReducer, useState } from "react";

export const UserContext = createContext({
  firstName: "",
  // lastName: "",
  // phoneNum: "",
  // email: "",
  addFirstName: (newFirstName) => {},
  // addLastName: (newLastName) => {},
  // addPhoneNum: (newPhoneNum) => {},
  // addEmail: (newEmail) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    // case "LAST_NAME":
    //   return { ...state, lastName: action.payload };
    // case "PHONE_NUM":
    //   return { ...state, phoneNum: action.payload };
    // case "EMAIL_ADDR":
    //   return { ...state, email: action.payload };
    default:
      return state;
  }
}

function UserContextProvider({ children }) {
  // set up state
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  // const [email, setEmail] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    // lastName: "",
    // phoneNum: "",
    // email: "",
  });

  function addFirstName(newFirstName) {
    dispatch({ type: "FIRST_NAME", payload: newFirstName });
  }

  // function addLastName(newLastName) {
  //   dispatch({ type: "LAST_NAME", payload: newLastName });
  // }

  // function addPhoneNum(newPhoneNum) {
  //   dispatch({ type: "PHONE_NUM", payload: newPhoneNum });
  // }

  // function addEmail(newEmail) {
  //   dispatch({ type: "EMAIL_ADDR", payload: newEmail });
  // }

  const value = {
    firstName: state.firstName,
    // lastName: lastName,
    // phoneNum: phoneNum,
    // email: email,
    addFirstName: addFirstName,
    // addLastName: addLastName,
    // addPhoneNum: addPhoneNum,
    // addEmail: addEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
