

export const getPosts = async () => {
 try {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const json = await response.json();
   return json;
 } catch (error) {
   console.log('API Error:', error);
   return [];
 }
};
