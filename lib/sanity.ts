import { createClient, groq } from "next-sanity";

const SANITY_CONFIG = {
  projectId: "u1pbhkc6",
  dataset: "production",
  apiVersion: "2021-10-21",
};
export async function getProducts() {
  // const posts = await client.fetch('*[_type == "product"]');
  const products = createClient(SANITY_CONFIG).fetch(
    groq`*[_type == "product"]`
  );
  // console.log(posts)
  return products;
}

// export async function createPost(post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }
