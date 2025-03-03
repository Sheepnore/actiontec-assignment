// after click, it should 1. clean up the content, 2. fetch new posts data and 3. render new posts data
// handleRefresh fetch and update posts state, update isRefreshed state;

// only refetch the current page data,

export async function handleRefresh(setPostsData, currentPage) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=10`
  );
  const newPosts = await res.json();
  setPostsData(newPosts);
}
