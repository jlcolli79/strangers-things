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
  const { title, price, description, location, willDeliver } = post;
  return $(`
    <div class="item">
      <header class="item-header">
        <h3 class="item-title">${title}</h3>
        </header>
      <p class="item-price"><strong>Price:</strong>${price}</p>
      <p class="item-description"><strong>Description:</strong> ${description}</p>
      <p class="item-location"><strong>Location</strong>: ${location}</p>
      <p class="item-delivery"><strong>Delivery available</strong>: ${willDeliver}</p>
      <footer class = item-footer>
        <div>Edit Button</div>     <div>Delete Button</div>
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
