onload = function () {
//click on a track name and it's number displays on the page

//elNumber variable holds the value of the track number

var elNumber = document.getElementById("number");

function setupClickHandlers(){
    //elTracks stores all the track name elements that are on the page
    var elTracks = document.getElementsByClassName("track");
  
    //the generateClickHandler function returns clickHandler as a value
    //use trackNumber arguement instead of referencing the iterator
    //value of i(trackNumber) is different each time during the loop
    function generateClickHandler(trackNumber){

          return function clickHandler(){
            
              elNumber.innerHTML = trackNumber;
          };
    }
  
    //for loop iterates through all the track elements
    for (var i = 0; i < elTracks.length; i ++){
    //for each iteration, a click event handler and listener are added to each track
          elTracks[i].addEventListener("click", generateClickHandler(i + 1));
    //have called generateClickHandler which returns the function trackNumber
    }
    
}

setupClickHandlers();
};