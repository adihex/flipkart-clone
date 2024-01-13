export const get = async (url, options = {}) => {
  options["method"] = "get";
  try {
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
  } catch (error) {
    alert("server error");
    console.log(error);
    return false;
  }
};
