const newBtn = document.getElementById("new-movie");
const avengersBtn = document.getElementById("avengers");
const batmanBtn = document.getElementById("batman");
const xMenBtn = document.getElementById("x-men");
const princessBtn = document.getElementById("princess");
const listOfMovies = document.getElementById("list-of-movies");
const nav = document.getElementById("filter");

let createList = function(movie){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");
    listOfMovies.appendChild(li);
    li.classList.add(".list-item");
    li.appendChild(a);
    a.href = "https://www.imdb.com/title/" + movie.imdbID;
    a.target = "_blank";
    a.appendChild(img);
    img.src = movie.Poster
};

let clearList = () => {
    let ul = document.getElementById("list-of-movies");
    let listLength = ul.children.length;
    for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.children[0])
  }
};

let filter = () => {
    if (newBtn.checked){
        clearList();
        newMovies = movies.filter((movie)=>{
            return movie.Year > 2013;
        });
        newMovies.forEach((movie)=> createList(movie))
    } else if (avengersBtn.checked){
        clearList();
        avengersMovies = movies.filter((movie)=>{
            return movie.Title.includes("Avengers")
        });
        avengersMovies.forEach((movie) => createList(movie));
        console.log(avengersMovies)
    } else if(batmanBtn.checked){
        clearList();
        batmanMovies = movies.filter((movie)=>{
            return movie.Title.includes("Batman")
        });
        batmanMovies.forEach((movie) => createList(movie));
        console.log(batmanMovies)
    } else if(xMenBtn.checked){
        clearList();
        xMenMovies = movies.filter((movie)=>{
            return movie.Title.includes("X-Men")
        });
        xMenMovies.forEach((movie) => createList(movie));
        console.log(xMenMovies)
    } else if (princessBtn.checked){
        clearList();
        princessMovies = movies.filter((movie)=>{
            return movie.Title.includes("Princess")
        });
        princessMovies.forEach((movie) => createList(movie));
        console.log(princessMovies)
    }
};

movies.forEach((movie) => createList(movie));
nav.addEventListener("click", filter);

//Bonus

const searchBar = document.getElementById("search-input");
searchBar.addEventListener("keyup", function(e){
        const searchWord = e.target.value.toLowerCase();
        const matched = movies.filter((movie) =>{
            clearList();
            return movie.Title.toLowerCase().includes(searchWord)
        })
        matched.forEach((movie) => createList(movie))  
})

