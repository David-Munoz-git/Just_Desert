// remove start
function remove(elemet){
    elemet.remove();
}

// remove end
var search = document.querySelector('#search')

function choices(){
    alert('You are searching for ' + search.value)
}

// count likes

var count = 68;
var countLikes = document.querySelector('#likes');
function add1(){
    count++
    countLikes.innerText = count 
    console.log(count)
}
// ---------------------------

var countUp = 212
var secondLikes = document.querySelector('#second');
function addto(){
    countUp++
    secondLikes.innerText = countUp
}

// -----------

var counts = 32;
var thirdLike = document.querySelector('#third');
function addtoo(){
    counts++
    thirdLike.innerText = counts
}