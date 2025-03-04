// only refetch the current page data.
export async function handleRefresh(setPostsData, currentPage) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=10`
  );
  const newPosts = await res.json();
  setPostsData(newPosts);
}
