export default async function fetchPostsData(currentPage) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=10`
    );

    if (!res.ok) {
      throw new Error("Posts Data fetched is invalid.");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch posts data", err);
    return [];
  }
}
