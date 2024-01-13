export const getCategoriesService = async () => {
  let url = "http://localhost:3001/categories";
  let response = await fetch(url, { method: "GET" });
  return response.json()
};


export const getCategoriesWiseProductService = async (id) => {
  let url = `http://localhost:3001/products?c_id=${id}`;
  let response = await fetch(url, { method: "GET" });
  return response.json()
};
// ccccc