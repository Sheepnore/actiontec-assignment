const fetchComments = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export default fetchComments;
