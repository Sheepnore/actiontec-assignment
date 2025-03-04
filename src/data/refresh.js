// only refetch the current page data.
export async function handleRefresh(setPostsData, currentPage, setIsLoading) {
  try {
    // Set loading state if available
    if (setIsLoading) setIsLoading(true);
    
    console.log('Starting refresh for page:', currentPage);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=10`
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    
    const newPosts = await res.json();
    console.log('New posts data received:', newPosts);
    
    // Update the state with new data
    setPostsData(newPosts);
    console.log('Posts data updated');
    
    return true; // Indicate success
  } catch (error) {
    console.error('Error refreshing data:', error);
    return false; // Indicate failure
  } finally {
    // Reset loading state if available
    if (setIsLoading) setIsLoading(false);
  }
}
