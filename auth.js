import {
  state,
  BASE_URL,
  REGISTER_USER_ENDPOINT,
  LOGIN_USER_ENDPOINT,
} from "./app.js";

export async function registerUser(userObj) {
  try {
    const url = `${BASE_URL}${REGISTER_USER_ENDPOINT}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const newUser = await response.json();
    if (!newUser.success) alert(newUser.error.message);
    if (newUser.success) {
      localStorage.setItem("token", newUser.data.token);
      alert(newUser.data.message);
    }
    console.log(newUser);
    return newUser;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(loginObj) {
  try {
    const url = `${BASE_URL}${LOGIN_USER_ENDPOINT}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });
    const loggedUser = await response.json();
    if (!loggedUser.success) alert(loggedUser.error.message);
    if (loggedUser.success) {
      console.log(state);
      state.token = loggedUser.data.token;
      localStorage.setItem("token", state.token);
      alert(loggedUser.data.message);
      console.log(state);
    }
    return loggedUser;
  } catch (error) {
    throw error;
  }
}
