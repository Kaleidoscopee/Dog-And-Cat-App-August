//WORKING
fetch('')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("There has been an error: " + error));



