// import { getPosts, renderPostsList } from "./renderPosts.js";
import { bootstrap } from "./bootstrap.js";
import {
  openLoginForm,
  cancelLoginForm,
  openRegistrationForm,
  cancelRegistrationForm,
  openCreatePostForm,
  cancelCreatePostForm,
} from "./modal.js";

// global variables
export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2101-vpi-rm-web-pt/";
export const POST_ENDPOINT = "posts";
export const loginForm = $(".login-form-container");
export const registrationForm = $(".registration-form-container");
const toggleButton = $(".toggle-button");
export const navLinks = $(".nav-links");
export const createPostForm = $(".create-post-form-container");

//Toggle Active Class Event Listener for Hamburger Menu
toggleButton.click(function () {
  navLinks.toggleClass("active");
});

// open login form
$(".login-button").click(openLoginForm);
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

bootstrap();
