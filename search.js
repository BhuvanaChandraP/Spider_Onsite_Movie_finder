const movie = new Movie();
const displaymovies = new displaymovie();

const search = document.getElementById('searchMovieInfo');

search.addEventListener('keyup',(event)=>{
    let text = event.target.value;
    displaymovies.clear();
    if(text !== ''){
        movie.getMovieInfo(text).then(data => {
            if(data.Error){
                displaymovies.showError(data.Error);
            }else{
                displaymovies.addToList(data);
            }
        });
    }
});

search.addEventListener('focus', (event) => {
    event.target.style.background = '#f3f3f3';    
    });
  
search.addEventListener('blur', (event) => {
    event.target.style.background = '';    
    });