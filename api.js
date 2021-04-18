export const getPostsById = id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getPostByBulk = () => fetch("https://jsonplaceholder.typicode.com/posts");