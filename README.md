### Requirements (Students A - Part 4: GET and Display Data)

- In the server ./routes/index.js file:
  - Add a new variable in the global scope called userList and initalize it to an array with a single example user
    - const userList = [{
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "jd@gmail.com"
    }];
  - Add a new GET route "/get-users", it should:
    - Send userList as a response

- In the client, implement the following:
  - In <App />, add a new useEffect to fetch the userList from the server and pass the userList as a prop into <HomePage />. Here is an outline of the approach:
    - Create a new state variable in <App /> to store the userList data
    - Create a new useEffect that will initiate a GET request using fetch to the server
    - In the useEffect, set the state variable you created for the userList to the data fetched from the server
    - Pass the state variable as a prop into <HomePage />
  - In <HomePage />, 
    - Create a new map function in the JSX of <HomePage /> 
    - The map function should iterate through the state variable you made for the userList in <App /> that you have passed into <HomePage /> as a prop
    - The map should return a simple JSX element that displays the firstName, lastName, and email of each user in the userList
