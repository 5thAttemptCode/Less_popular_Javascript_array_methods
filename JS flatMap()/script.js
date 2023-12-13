const users = [
    {name: 'Henry', favMovies: ['Friday', 'Next Friday']},
    {name: 'Timo', favMovies: ['Friday After Next', 'Training Day']},
    {name: 'Martin', favMovies: ['Chef', '2 Fast 2 Furious']}
]

const allMovies = users.flatMap(user => user.favMovies)

const displayMovies = document.querySelector("#movies")
allMovies.forEach(movie => {
  const li = document.createElement("li")
  li.textContent = movie
  displayMovies.appendChild(li)
});