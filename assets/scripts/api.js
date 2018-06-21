

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
};//end makeButtons()
makeButtons();
  
    //get new topics from form
    $("form").submit(function(){
    event.preventDefault();
    
    var moreTopics = $("#search").val().trim();
    topics.push(moreTopics);
    makeButtons();
    //testApi();
    }); //end push to topics function

    //listener for the dynamically created buttons

  $(document).on("click",".displayGifsBtn", function(){
    var getGiphys = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + getGiphys + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&";
    
    //console.log(getGiphys);
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        
            var returned = response.data;
            for (var j= 0; j < topics.length ; j++){
                //create div for gifs
                var imgDiv = $("<div>");
                //create p tags for ratings text
                var ratingP = $("<p>").text("Rating: " + returned[j].rating);
                //create the img placeholder
                var gifImg = $("<img>");
                gifImg.attr("src", returned[j].images.fixed_height_still.url);
                //add attr of still image
                gifImg.attr("data-state", "still");
                gifImg.attr("data-still", staticImgsURL );
                gifImg.attr("data-animated", animatedImgsURL );
                gifImg.addClass("animate");
                //add atr of data-state
                var staticImgsURL= (returned[j].images.fixed_height_still.url);
                //put static img url in var
                var animatedImgsURL=(returned[j].images.fixed_height.url);
                //append rating to imgdiv
                imgDiv.append(gifImg);
                //put animated img url in var
                imgDiv.append(ratingP);
                //append gif to imgdiv
                $("#displayGifs").prepend(imgDiv);
                //prepend imgdivs to the page
                

            }; //end for Loop 
        
        
    }) //end repsonse   

}); //findGifs on click function
$(document).on("click",".animate", function(){
    var state = $(this).attr("data-state");
    if (state ==="still"){
        //alert("my state is " + state);
        console.log(this);
        $(this).removeAttr("date-state");
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("date-state", "animate");
    } else{
        //alert("my state is " + state);
        console.log(this);
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});











makeButtons();