// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map( onlyDirectors => onlyDirectors.director);
       
    return newArray;
    }
     
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesFilter = moviesArray.filter((currentMovie) =>{
        return (currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama"))
    });
       
    return moviesFilter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    
    }
    const avgScore = moviesArray.reduce(function(sum,score1){
        return (sum + score1.score)
    },0);
     const avgScore1 = avgScore/moviesArray.length
     
     return Math.round(avgScore1*100)/100
    
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter((dramaMovie) =>
    {
        return dramaMovie.genre.includes("Drama")
    }
    )
    const dramaAvg = moviesDrama.reduce(function(sum,score1 ){
        return (sum + score1.score)
    },0);
    const dramaAvg1 = dramaAvg/moviesDrama.length
    return Math.round(dramaAvg1*10)/10
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const moviesArray2 = moviesArray.map((moviesArray3) => moviesArray3)
   const moviesYear = moviesArray2.sort(function(a,b){
    if(a.year === b.year){
        return a.title.localeCompare(b.title);
    }
    return a.year - b.year
   })
 return moviesYear
   }

  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArray2 = moviesArray.map((moviesArray3) => moviesArray3.title)
    const moviesTitle = moviesArray2.sort(function(a,b){
        if(a< b){
        return -1;
        }
        else{
            return true
        }
       })
       return moviesArray2
       
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
