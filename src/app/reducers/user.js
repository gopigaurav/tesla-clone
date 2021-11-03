const initialstate = {
    user: {},
    verificationstatus: false,
    showMenu : false
  };
  
  function userRegister(state = initialstate, action) {
    if (action.type === "USER_REGISTER") {
      return {
        ...state,
        user: action.payload
      };
    }
    if (action.type === "CLOSE_MENU") {
      return {
        ...state,
        showMenu: action.payload
      };
    }
    return state;
  }
  
  export default userRegister;
  