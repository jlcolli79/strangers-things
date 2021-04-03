import { getPosts, renderPostsList } from "./renderPosts.js";

export async function bootstrap() {
  const posts = await getPosts();
  renderPostsList(posts);
}
