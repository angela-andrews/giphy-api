//topics
var topics = ["Janet Jackson","Low Down Dirty Shame","Beyonce", "Blackish", "Game Of Thrones","Curb Your Enthusiam","Sons of Anarchy","ANTM","Eye roll", "Black Panther"];


//make buttions from topics array
function makeButtons (){
    var  btnHere = $("#gifBtn") ;
    btnHere.empty();
    
    for (var i=0; i< topics.length; i++){
        var arrayBtns = $("<button>");
        arrayBtns.addClass("displayGifsBtn");
        arrayBtns.attr("data-name", topics[i]);
        arrayBtns.text(topics[i]);
        btnHere.append(arrayBtns );
        
    };
};

  
//   $("#findGifs").on("click", function(event) {
//from button to submit
//grab the text from the form & push it onto the topics array, then re-render the buttons
    $("form").submit(function(){
    event.preventDefault();
    
    var moreTopics = $("#search").val().trim();
    topics.push(moreTopics);
    //console.log(moreTopics);
    makeButtons();
    //testApi();
  });

function getMoreTopics(){
    var getGiphys = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + getGiphys + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&";

    //console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        //get static, non-animated gifs on page
        
        //rating under each image

        //when static  is clicked, gifs animates & it toggles with each image click


    });
};


// function testApi(){
//     var newArtist = 'drake';       
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newArtist + "&api_key=dc6zaTOxFJmzC&limit=10";       
    
//     $.ajax({
//         url: queryURL,          
//         method: "GET"      
//      }).done(function(response){ 
//           console.log(response);
//        });
    
//     };


//listener for the dynamically created buttons
$(document).on("click", ".displayGifsBtn", 
getMoreTopics);

makeButtons();