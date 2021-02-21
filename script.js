



var API_KEY = config.API_KEY;

var buttonObj = document.getElementById('button')
var inputObj = document.getElementById('input')
var posterObj = document.getElementById('poster')
var warningObj = document.getElementById('warning')
var resetObj = document.getElementById('reset')


resetObj.addEventListener('click', function() {
    inputObj.value = ''
    posterObj.src = ''
    document.getElementById('title').innerHTML = '';
    document.getElementById('year').innerHTML = '';
    document.getElementById('genre').innerHTML = '';
})


var addPoster = (data) => {
    posterObj.src = data.Poster
    if (data.Poster == null) {
        posterObj.src = 'images/not-found-image-15383864787lu.jpg'
    } else {
        posterObj.src = data.Poster
    } 
}

var displayResult = (data) => {
    document.getElementById('title').innerHTML = data.Title;
    document.getElementById('year').innerHTML = data.Year;
    document.getElementById('genre').innerHTML = data.Genre;
}




buttonObj.addEventListener('click', function() {
    var inputValue = inputObj.value
    var newInput = inputValue.split(' ').join('+')
    fetch('http://www.omdbapi.com/?apikey=' + API_KEY + '&t=' + newInput)
        .then(reply => reply.json())
        // .then(data => console.log(data))
        .then(data => {
            addPoster(data);
            displayResult(data);
            console.log(data);
        })
        
        
    
})




