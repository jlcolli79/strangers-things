import { registrationForm, loginForm, createPostForm } from "./app.js";

export function openLoginForm() {
  $("#login-form").trigger("reset");
  loginForm.css("display", "flex");
  $("body").css("overflow", "hidden");
}

export function cancelLoginForm() {
  $("#login-form").trigger("reset");
  loginForm.css("display", "none");
  $("body").css("overflow", "");
  $("#login-form").trigger("reset");
}

export function openRegistrationForm() {
  $("#login-form").trigger("reset");
  registrationForm.css("display", "flex");
  $(".login-form-container").css("display", "none");
  $("body").css("overflow", "hidden");
}

export function cancelRegistrationForm() {
  registrationForm.css("display", "none");
  $("body").css("overflow", "");
  $("#register-form").trigger("reset");
}

export function openCreatePostForm() {
  createPostForm.css("display", "flex");
  $("body").css("overflow", "hidden");
  $("#login-form").trigger("reset");
}

export function cancelCreatePostForm() {
  createPostForm.css("display", "none");
  $("body").css("overflow", "");
}
