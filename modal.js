import { registrationForm, loginForm, createPostForm } from "./app.js";

export function openLoginForm() {
  loginForm.css("display", "flex");
  $("body").css("overflow", "hidden");
}

export function cancelLoginForm() {
  loginForm.css("display", "none");
  $("body").css("overflow", "");
}

export function openRegistrationForm() {
  registrationForm.css("display", "flex");
  $(".login-form-container").css("display", "none");
  $("body").css("overflow", "hidden");
}

export function cancelRegistrationForm() {
  registrationForm.css("display", "none");
  $("body").css("overflow", "");
}

export function openCreatePostForm() {
  createPostForm.css("display", "flex");
  $("body").css("overflow", "hidden");
}

export function cancelCreatePostForm() {
  createPostForm.css("display", "none");
  $("body").css("overflow", "");
}
