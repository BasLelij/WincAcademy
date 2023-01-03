// movies and li's

function createListItems(items) {
  const listUl = document.getElementById("films-ul");

  items.map((poster) => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = poster;
    listItem.appendChild(image);
    listUl.appendChild(listItem);
  });

  return listUl;
}

const posters = movies.map((movie) => movie.poster);
const list = createListItems(posters);
document.body.appendChild(list);

// radio buttons

const movieTitles = movies.map((movie) => movie.title);

filterMovies = (wordInMovies) => {
  const moviesWithWordInIt = movieTitles.filter((title) =>
    title.includes(wordInMovies)
  );
  console.log(moviesWithWordInIt);
};

const movieDates = movies.map((movie) => movie.year);

filterLatestMovies = () => {
  const moviesLaterThan = movieDates.filter((year) => year >= 2014);
  console.log(moviesLaterThan);
};

const handleOnChangeEvent = (event) => {
  switch (event.target.id) {
    case "latest-movies":
      filterLatestMovies();
      break;
    case "avenger-movies":
      filterMovies("Avenger");
      break;
    case "xmen-movies":
      filterMovies("X-Men");
      break;
    case "princess-movies":
      filterMovies("Princess");
      break;
    case "batman-movies":
      filterMovies("Batman");
      break;
    default:
      filterMovies("Princess, Avenger, Batman, X-Men");
  }
};

const latestMoviesButton = document.getElementById("latest-movies");
latestMoviesButton.addEventListener("change", handleOnChangeEvent);

const avengerMoviesButton = document.getElementById("avenger-movies");
avengerMoviesButton.addEventListener("change", handleOnChangeEvent);

const xmenMoviesButton = document.getElementById("xmen-movies");
xmenMoviesButton.addEventListener("change", handleOnChangeEvent);

const princessMoviesButton = document.getElementById("princess-movies");
princessMoviesButton.addEventListener("change", handleOnChangeEvent);

const batmanMoviesButton = document.getElementById("batman-movies");
batmanMoviesButton.addEventListener("change", handleOnChangeEvent);

// deleting the list items

// dit is mij niet gelukt, in de console kun je wel zien dat de juiste films worden "geselecteerd" als je op de buttons klikt.

// making anchor tags

const posterForAnchors = posters;

function addAnchorTags(posterForAnchors, movies) {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    const posterForAnchor = image.src;
    const movieForAnchor = movies.find(
      (movie) => movie.poster === posterForAnchor
    );
    if (movieForAnchor) {
      const anchor = document.createElement("a");
      anchor.href = `https://www.imdb.com/title/${movieForAnchor.imdbID}`;
      image.parentNode.replaceChild(anchor, image);
      anchor.appendChild(image);
    }
  });
}

addAnchorTags(posterForAnchors, movies);

// ul was buiten de main tags geplaatst

const mainElement = document.querySelector("main");
const changeUlPlace = document.getElementById("films-ul");
mainElement.appendChild(changeUlPlace);
