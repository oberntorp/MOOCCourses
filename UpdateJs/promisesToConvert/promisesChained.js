const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;

// The Promise Way
function getMovieData(movieTitle) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: apiUrl + movieTitle,
			method: 'get',
			success: (movieData) => {
				// console.log(movieData)
				resolve(movieData.results);
			},
			error: (errorMsg) => {
				reject(errorMsg)
			}
		})
	})
}

function getCast(movie) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${castUrl}/${movie.id}/credits?api_key=${apiKey}`,
			method: 'get',
			success: (castData) => {
				resolve(castData.cast[0])
			}
		})
	})
}

function getPerson(person) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${peopleUrl}/${person.id}?api_key=${apiKey}`,
			success: (personData) => {
				resolve(personData)
			}
		})
	})
}

async function startMoviePromises(){
	const movieElem = Array.from(document.getElementsByClassName('movie-title'))
	const moviePromise = getMovieData(movieElem[0].value)
	const movieData = await moviePromise;
	const castInfo = await getCast(movieData[0]);
	const personInfo = await getPerson(castInfo)
	console.log(personInfo);
}

document.getElementById('movie-form').addEventListener('submit', (event) => {
	event.preventDefault();
	startMoviePromises();
});