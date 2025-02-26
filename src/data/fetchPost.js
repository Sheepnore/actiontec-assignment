export default async function fetchPost(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
