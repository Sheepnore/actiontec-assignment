export async function fetchUser(userId) {
  try{
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) {
      throw new Error("Posts Data fetched is invalid.");
    }
    const data = await res.json();
    return data
  
  } catch(err){
    console.log(err)
    return {};
  }
  
}

export async function fetchUsers() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Posts Data fetched is invalid.");
    }
    const data = await res.json();
    return data
  } catch(err){
    console.log(err)
    return [];
  }
}
