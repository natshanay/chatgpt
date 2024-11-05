let fetchData = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error in fetching data");
    }
  });
  
  fetchData
    .then(response => console.log(response))  // Success handler
    .catch(error => console.error(error));   // Error handler