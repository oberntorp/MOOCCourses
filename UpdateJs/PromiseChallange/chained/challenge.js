const apiKey = `2760c28468b025f67c16cdc338b17cef`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;

// The promise way
function getMovieData(movieTitle) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiUrl}${movieTitle}`,
            method: `get`,
            success: (movieData) => {
                // console.log(movieData);
                resolve(movieData.results);
            },
            error: (errorMessage) => {
                reject(errorMessage);
            }
        });
    })
}

const getCast = (movie) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
            method: "get",
            success: (castData) => {
                resolve(castData.cast[0]);
            }
        });
    });
}

const getPerson = (person) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
            method: "get",
            success: (personData) => {
                resolve(personData);
            }
        });
    });
}

document.querySelector("#movie-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const movieTitleInputs = Array.from(document.querySelectorAll(".movie-title"));
    const moviePromise = getMovieData(movieTitleInputs[0].value);

    moviePromise.then((movieData) => {
        return getCast(movieData[0]);
    }).then((castInfo) => {
        return getPerson(castInfo);
    }).then((personInfo) => console.log(personInfo));

})