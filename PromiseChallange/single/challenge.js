const apiKey = `2760c28468b025f67c16cdc338b17cef`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;

// Wrong way
let globalMovieData = [];
// $.ajax({
//     url: `${apiUrl}Interstellar`,
//     method: `get`,
//     success: (movieData) =>{
//         console.log(movieData);
//         globalMovieData = movieData.results;
//     }
// })

// console.log(globalMovieData);

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

document.querySelector("#movie-form").addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("Form Submitted");
    const movieData = getMovieData(document.querySelector("#movie-title").value);
    console.log(movieData);
    movieData.then((data) => {
        console.log(`${imgUrl}${data[0].poster_path}`);
        document.querySelector("#movies").innerHTML = `<img src="${imgUrl}${data[0].poster_path}"/>`;
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });
})