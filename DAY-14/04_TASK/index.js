/* 


4. Simulate an API call function fetchData(url). 
If the URL does not start with "https", 
throw an "Invalid URL" error. Handle it using try...catch

*/

function fetchData(url) {
  const key = "https";
  try {
    for (let i = 0; i < key.length; i++) {
      if (url[i] !== key[i]) {
        throw new Error("Invalid URL");
      }
      console.log("valid URL")
    }
  } catch (error) {
    console.log("An Error occured", error.message);
  }
}

fetchData(
  "https://app.notion.com/",
);
