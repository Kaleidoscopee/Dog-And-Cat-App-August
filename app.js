/*
fetch('https://api.open-meteo.com/v1/forecast?latitude=40.758896&longitude=-73.98513&hourly=temperature_2m&temperature_unit=fahrenheit')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  */

/*  fetch('https://api.open-meteo.com/v1/forecast?latitude=40.758896&longitude=-73.98513&hourly=temperature_2m&temperature_unit=fahrenheit')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
}); */

fetch('https://api.open-meteo.com/v1/forecast?latitude=40.758896&longitude=-73.98513&hourly=temperature_2m&temperature_unit=fahrenheit')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("There has been an error: " + error));