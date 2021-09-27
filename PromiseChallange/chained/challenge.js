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

const mapToElement = (elements, imageUrl) => {
    console.log(elements, imageUrl);
    return (element) => {
        console.log(element);
        const imageToAdd = document.createElement(elements[0]);
        imageToAdd.src = imageUrl;
        document.querySelector(element).append(imageToAdd);
    };
};

document.querySelector("#movie-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#movies").innerHTML = "";
    // console.log("Form Submitted");
    const movieTitleInputs = Array.from(document.querySelectorAll(".movie-title"));
    const movieTitlePromises = movieTitleInputs.map((element) => getMovieData(element.value));
    console.log(movieTitlePromises)
    Promise.all(movieTitlePromises).then((result) => {
        result.forEach((movie) => {
            const imageUrl = `${imgUrl}${movie[0].poster_path}`;
            mapToElement`img${imageUrl}`("#movies");
        });
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });
})