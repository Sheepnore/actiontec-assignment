export async function fetchUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return data;
}

export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
