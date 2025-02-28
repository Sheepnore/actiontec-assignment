export default async function fetchComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const data = await res.json();
  return data;
}
