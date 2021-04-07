import { getPosts, renderPostsList, sendNewPost } from "./renderPosts.js";

import {
  openLoginForm,
  cancelLoginForm,
  openRegistrationForm,
  cancelRegistrationForm,
  openCreatePostForm,
  cancelCreatePostForm,
} from "./modal.js";
import { loginUser, registerUser } from "./auth.js";
import { updateUI } from "./updateUI.js";

// global variables
export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2101-vpi-rm-web-pt/";
export const POST_ENDPOINT = "posts";
export const REGISTER_USER_ENDPOINT = "users/register";
export const LOGIN_USER_ENDPOINT = "users/login";
export const loginForm = $(".login-form-container");
export const registrationForm = $(".registration-form-container");
export const newPostForm = $(".create-post-form");
const toggleButton = $(".toggle-button");
export const navLinks = $(".nav-links");
export const createPostForm = $(".create-post-form-container");
export let state = { posts: [], matches: [], users: [], token: [] };

//Toggle Active Class Event Listener for Hamburger Menu
toggleButton.click(function () {
  navLinks.toggleClass("active");
});

//Registration Form Validation
$(document).ready(function () {
  $("#confirm-password, #create-password").keyup(function () {
    let password1 = $("#create-password").val();
    let password2 = $("#confirm-password").val();
    let username = $("#create-username").val();
    if (
      password1 !== password2 ||
      password1 === "" ||
      password2 === "" ||
      username === ""
    ) {
      $(".create-button").prop("disabled", true);
      $(".password-warning-message").css("display", "block");
    } else {
      $(".create-button").prop("disabled", false);
      $(".password-warning-message").css("display", "none");
    }
  });
});

//Login form validation
$(document).ready(function () {
  $("#login-user-name, #login-password").keyup(function () {
    let username = $("#login-user-name").val();
    let password = $("#login-password").val();
    if (username === "" || password === "") {
      $(".login-submit-button").prop("disabled", true);
    } else {
      $(".login-submit-button").prop("disabled", false);
    }
  });
});

// open login form
$("#nav-login").click(openLoginForm);
// cancel login form
$(".login-cancel").click(cancelLoginForm);
// open registration form
$(".create-account-button").click(openRegistrationForm);
// cancel registration form
$(".registration-cancel-button").click(cancelRegistrationForm);
// open create post form
$(".create-post-button").click(openCreatePostForm);
//cancel create post form
$(".cancel-post-button").click(cancelCreatePostForm);
//register new newuser
$(".register-form").on("submit", async (event) => {
  event.preventDefault();
  const userObj = {
    user: {
      username: $("#create-username").val(),
      password: $("#create-password").val(),
    },
  };
  await registerUser(userObj);
  registrationForm.css("display", "none");
  $("body").css("overflow", "");
});

//user login
$("#login-form").on("submit", async (event) => {
  event.preventDefault();
  const loginObj = {
    user: {
      username: $("#login-user-name").val(),
      password: $("#login-password").val(),
    },
  };
  await loginUser(loginObj);
  loginForm.css("display", "none");
  $("body").css("overflow", "");
  updateUI();
});

//user logout
$("#nav-logout").on("click", function () {
  localStorage.removeItem("token");
  alert("You have successfully logged out!");
  $("#login-form").trigger("reset");
  state.token = [];
  updateUI();
});

//create post
$("#post-form").on("submit", async (event) => {
  event.preventDefault();
  let delivery;
  if ($("#delivery").val() === "Yes") {
    delivery = true;
  } else {
    delivery = false;
  }
  const postObj = {
    post: {
      title: $("#create-title").val(),
      description: $("#create-description").val(),
      price: $("#create-price").val(),
      location: $("#create-location").val(),
      willDeliver: delivery,
    },
  };
  await sendNewPost(postObj);
  createPostForm.css("display", "none");
  $("body").css("overflow", "");
  bootstrap();
  updateUI();
});

async function bootstrap() {
  console.log(state);
  const posts = await getPosts();
  state.token = localStorage.getItem("token");
  state.posts = posts;
  renderPostsList(state.posts);
  updateUI();
}
bootstrap();
