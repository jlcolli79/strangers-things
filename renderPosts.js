import { BASE_URL, POST_ENDPOINT } from "./app.js";

export async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}${POST_ENDPOINT}`);
    const data = await response.json();
    console.log(data);
    return data.data.posts;
  } catch (error) {
    throw error;
  }
}

export function renderPosts(post) {
  let { title, price, description, location, willDeliver } = post;
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
    
      </footer>
    </div>
  `).data("post", post);
}

export function renderPostsList(postList) {
  const postElement = $("#post-container");
  postElement.empty();

  postList.forEach((post) => {
    postElement.append(renderPosts(post));
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
