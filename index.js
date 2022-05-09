// Add your code here

//Fetch
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Bob",
      email: "Bob@gmail.comgkii8",
    }),
  };
  
fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });

fetch("http://localhost:3000/users", configurationObject);
const formData = {
    name: "Bob",
    email: "Bob@gmail.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  