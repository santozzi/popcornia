
const apikey="2a7896295f0360c0dedccbd6745f1182";
const account_id= "20780129";
const URL = "https://api.themoviedb.org/3";
const movieej = "/movie/551?api_key="+apikey;
const discover = "/discover/movie?api_key="+apikey+"&page=1";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',

    }
  };
const language = "es";
const sort_by=[
    "popularity.asc",
    "popularity.desc",
    "release_date.asc",
    "release_date.desc",
    "revenue.asc",
    "revenue.desc",
    "primary_release_date.asc",
    "primary_release_date.desc",
    "original_title.asc",
    "original_title.desc",
    "vote_average.asc",
    "vote_average.desc",
    "vote_count.asc",
    "vote_count.desc"

]
const image_sizes=[
    "w300",
    "w500",
    "w780",
    
    "w1280",
    "original"
]

//GETs
export async function getMovieById(movieId) {
    const response = await fetch(`${URL}/movie/${movieId}?api_key=${apikey}`, {options});
    const data = await response.json();
    return await data;
    }

export async function getMoviesByPage(page,year='2023') {
    const response = await fetch(`${URL}/discover/movie?api_key=${apikey}&page=${page}&language=${language}&primary_release_year=${year}`, {options});
    const data = await response.json();
    return await data;
    }
export async function getCertifications(){
    const response = await fetch(`${URL}/certification/movie/list?api_key=${apikey}`, {options});
    const data = await response.json();
    return await data;
    }
export async function languagesList(){
    const response = await fetch(`${URL}/configuration/languages?api_key=${apikey}`, {options});
    const data = await response.json();
    return await data;
    }


export async function getMovieByProtagonist(protagonist) {
    const response = await fetch(`${URL}/discover/movie?api_key=${apikey}&with_cast=${protagonist}`, {options});
    const data = await response.json();
    return await data;
    }
export async function getCredits(movieId){
    const response = await fetch(`${URL}/movie/${movieId}/credits?api_key=${apikey}`, {options});
    const data = await response.json();

    return await data;
    }

export async function getMovieTrailer(movieId){
    const response = await fetch(`${URL}/movie/${movieId}/videos?api_key=${apikey}`, {options});
    const data = await response.json();

    return await data;
}





