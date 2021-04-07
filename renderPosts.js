import { BASE_URL, POST_ENDPOINT } from "./app.js";

export async function getPosts() {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2101-VPI-RM-WEB-PT/posts",
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}
    );
    const data = await response.json();
    console.log(data);
    return data.data.posts;
  } catch (error) {
    throw error;
  }
}

export function renderPosts(post) {
  let { title, price, description, location, willDeliver, isAuthor } = post;
  if (location === "[On Request]" || location === "") {
    location = "Location available on request.";
  }
  return $(`
    <div class="item">
      <header class="item-header">
        <h3 class="item-title">${title}</h3>
        </header>
      <p class="item-author"><strong>Author: </strong>${
        post.author.username
      }</p>
      <p class="item-price"><strong>Price: </strong>${price}</p>
      <p class="item-description"><strong>Description: </strong> ${description}</p>
      <p class="item-location"><strong>Location</strong>: ${location}</p>
      <p class="item-delivery"><strong>Delivery available</strong>: ${
        willDeliver ? "Yes" : "No"
      }</p>
      <footer class = item-footer>
      ${
        localStorage.getItem("token")
          ? isAuthor
            ? '<button class="edit-post-button">EDIT</button><button class="delete-post-button">DELETE</button>'
            : '<button class="message-button">MESSAGE</button>'
          : ""
      }
      </footer>
    </div>
  `).data("post", post);
}

export function renderPostsList(postList) {
  const postElement = $("#post-container");
  postElement.empty();

  postList.forEach((post) => {
    postElement.prepend(renderPosts(post));
  });
}

export async function sendNewPost(postObj) {
  try {
    const url = `${BASE_URL}${POST_ENDPOINT}`;
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postObj),
    });
    const newPost = await response.json();
    if (!newPost.success) alert(newPost.error.message);
    if (newPost.success) {
      console.log(newPost);
    }
    return newPost;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(postId) {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2101-VPI-RM-WEB-PT/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (error) {
    throw error;
  }
}
