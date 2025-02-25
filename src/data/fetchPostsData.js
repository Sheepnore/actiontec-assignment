export default async function fetchPostsData() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10"
    );

    // if (!res.ok) {
    //   throw new Error("Data fetched is invalid.");
    // }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch posts data", err);
  }
}
