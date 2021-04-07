export function updateUI() {
  if (localStorage.getItem("token")) {
    $("#nav-login").css("display", "none");
    $("#nav-logout").css("display", "flex");
    $(".create-post-button").css("display", "flex");
    $("#message-button").css("display", "flex");
    $("#my-posts-button").css("display", "flex");
  } else {
    $("#nav-login").css("display", "flex");
    $("#nav-logout").css("display", "none");
    $(".create-post-button").css("display", "none");
    $("#message-button").css("display", "none");
    $("#my-posts-button").css("display", "none");
  }
}
