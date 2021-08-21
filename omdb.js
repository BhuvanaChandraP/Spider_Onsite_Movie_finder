class Movie{
    constructor(){
        
        this.apikey = "b8b7a94e"
    }

    async getMovieInfo(text){
        let endpoint = `http://www.omdbapi.com/?t=${text}&apikey=${this.apikey}`;
        let response = await fetch(endpoint);
        let data = await response.json();
        return data;
    }

}