export const initialLoginForm = {
  email: "",
  password: "",
  emailErr: false,
  emailErrMsg: "",
  passErrMsg: "",
  passErr: false,
};
export const loginFormReducer = (state, action) => {
  let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const { field, payload } = action;
  switch (action.type) {
    case "email":
      console.log(payload + " " + field);
      if (emailRegex.test(payload)) {
        return {
          ...state,
          [field]: payload,
          emailErr: false,
        };
      } else {
        return { ...state, [field]: payload, emailErr: true };
      }
    case "PASSWORD":
      if (passwordRegex.test(payload)) {
        return {
          ...state,
          [field]: payload,
          passErr: false,
        };
      } else {
        return { ...state, [field]: payload, passErr: true };
      }
    case "FIELD_ERR":
      return { ...state, [field]: "Field Can't be empty." };
    case "EMAIL_ERROR":
      return {
        ...state,
        [field]: "Invalid Email",
      };
    case "PASSWORD_ERROR":
      return {
        ...state,
        passErrMsg:
          " *Password must contains 8 letters, atleast 1 uppercase, 1 lowercase, 1 special characters.",
      };

    case "PASSWORD_ERROR_FIX":
      return {
        ...state,
        passErrMsg: "",
      };
    case "EMAIL_ERROR_FIX":
      return {
        ...state,
        emailErrMsg: "",
      };
    case "ERROR_FIX":
      return {
        ...state,
        [field]: "",
      };
    default:
      return state;
  }
};
export const initialSignupForm = {
  name: "",
  nameErr: "",
  email: "",
  emailErr: "",
  password: "",
  passwordErr: "",
  confirm_password: "",
  confirm_passwordErr: "",
  username: "",
  usernameErr: "",
};
export const signupFormReducer = (state, action) => {
  const { payload, field } = action;
  console.log(field);
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        [field]: payload,
      };
    case "EMAIL":
      return {
        ...state,
        [field]: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        [field]: payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        [field]: payload,
      };
    case "USERNAME":
      return {
        ...state,
        [field]: payload,
      };
    case "FIELD_ERR":
      return { ...state, [field]: "Field Can't be empty." };
    case "ERROR_FIX":
      return { ...state, [field]: "" };
  }
};
