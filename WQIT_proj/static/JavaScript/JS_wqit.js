
//get array of unique people (no duplicates)
var unique_sources = [...new Set(my_quotes_sources)];

//shuffle uniques
var shuffled = unique_sources.sort(() => 0.5 - Math.random());

//default mode is hard
var numOptions=6;

//add click listeners
var cards = document.querySelectorAll(".card");
for (var i=0; i<numOptions; i++){
  cards[i].addEventListener("click", function(){
    var clickedAnswer = this.childNodes[3].innerHTML;
    if (clickedAnswer===correctAnswer){
      this.classList.add("selected-right");
    }
    else{
      this.classList.add("selected-wrong");
    }
  })
}

//reset button listener
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", ResetGame)

//easy button listener
var easyBtn = document.querySelector("#easy");
easyBtn.addEventListener("click", function(){
  if (numOptions != 3){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOptions=3;
    document.querySelectorAll("#row_div_2 > .col-sm-3")
      .forEach(function(c) {
        c.style.display="none";
      });
    ResetGame();
  }
});

//hard button listener
var hardBtn = document.querySelector("#hard");
hardBtn.addEventListener("click", function(){
  if (numOptions != 6){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOptions=6;
    document.querySelectorAll("#row_div_2 > .col-sm-3")
      .forEach(function(c) {
        c.style.display="";
      });
    ResetGame();
  }
});


ResetGame();

setTimeout(function(){
    setMarginTop();
}, 250);



function ResetGame(){

  //randomly choose 6 people(first one is the correct answer)
  var listAnswers = getRandomPeople(numOptions);
  correctAnswer = listAnswers[0];

  //get quotes of correct answer and pick 1 randomly
  displayQuote = getPersonQuote(correctAnswer);

  //change display images
  ShowImages(listAnswers.sort(() => 0.5 - Math.random()));

  //change display quote
  ShowQuote(displayQuote);

  //adjust margin top of cards according to height of jumbotron
  //(depends on length of displayed quote)
  setMarginTop();

}

function ShowImages(_listAnswersNames){
  //get image urls for all 4 answers (="options")
  optionsURLS = getOptionsImages(_listAnswersNames);

  //select card footers
  var card_images = document.querySelectorAll(".card-img-top");
  var card_footers = document.querySelectorAll(".card-footer");
  var cardsDivs = document.querySelectorAll(".card");

  //populate random people from shuffeled array -
  for (var i=0; i<numOptions; i++){
    card_images[i].src = optionsURLS[i];
    card_footers[i].innerHTML = _listAnswersNames[i];
    cardsDivs[i].style.opacity = 1;
    cardsDivs[i].classList.remove("selected-wrong","selected-right");
  }

  /*hide/show bottom row depending on easy/hard mode*/
    for (var i=3; i<6; i++){
      if (numOptions===3){
        cardsDivs[i].classList.add("hide-card");
      }
      else{ //numOptions==6
        cardsDivs[i].classList.remove("hide-card");
      }
    }
}

function ShowQuote(_displayQuote){
  document.getElementById("quote-container").innerHTML = _displayQuote;
}

//returns 1 random quote from correct answer
function getPersonQuote(_correctAnswer){
  var quotesArray = []; //array of quotes from answer
  for (var i=0; i<my_quotes.length; i++){
    if (my_quotes_sources[i]===_correctAnswer){
      quotesArray.push(my_quotes[i]);
    }
  }
  return quotesArray[Math.floor(Math.random()*quotesArray.length)];
}

//return list of 3 or 6 rendom people (depends on difficulty mode)
function getRandomPeople(num){
  var uniqueSources = [...new Set(my_quotes_sources)];
  var shuffledSources = uniqueSources.sort(() => 0.5 - Math.random());
  return shuffledSources.slice(0, num);
}

//iterate on people array and get image url for evry person that
// is one of the four possible answers
function getOptionsImages(_optionsNames){
  result=[];
  for (var i=0; i<my_quotes_sources.length; i++){
    for(var j=0; j<6; j++){
      if(!result[j] && my_quotes_sources[i]===_optionsNames[j]){
        result[j] = img_urls[i];
      }
    }
  }
  return result;
}

//adjust the top margin of the images depending on the length of the
//displayed quotes and how many "lines" in the jambotron it takes.
function setMarginTop(){
  //console.log(document.getElementById('jambo').scrollHeight);
  var jumboHeight=document.querySelector("#jumbo").clientHeight;
  if(jumboHeight<250){//1 line
    document.querySelector("#cards-cont").style.marginTop="370px";
  }
  else if (jumboHeight>400) { //3 lines
    document.querySelector("#cards-cont").style.marginTop="610px";
  }
  else{ //2 lines
    document.querySelector("#cards-cont").style.marginTop="480px";
  }
}
