var songs = [];

console.log("hi");

$(".Add-Music-View").hide();

$("#add-music-link").click(function(){
      $(".List-Music-View").hide();
      $(".Add-Music-View").show();
})

$("#list-music-link").click(function(){
      $(".Add-Music-View").hide();
      $(".List-Music-View").show();
})

var showSongs = (songs) => {
  console.log("songs", songs);
  for (var i = 0; i < songs.length; i++) {
    $("#song-names").append(`<section class="song-result">
                  <h2>${songs[i].name} </h2>
                  <p>${songs[i].artist} |</p>
                  <p>${songs[i].album} </p>
                  <button class="deleteBtn">Delete Song</button>
                </section>`);
  }
  var deleteButton = document.getElementsByClassName("deleteBtn");
           for (song = 0; song < deleteButton.length; song++) {
                deleteButton.item(song).addEventListener("click", function(event) {
                console.log("you clicked delete");
                var songToDelete = event.target.parentNode;
                console.log(songToDelete);
                document.getElementById("song-names").removeChild(songToDelete);
              })
}
}
showSongs(songs);

$('#addButton').click(function(event) {
  var newSongObject = new Object();
      newSongObject.name = document.getElementById("song-input").value;
      newSongObject.artist = document.getElementById("artist-input").value;
      newSongObject.album = document.getElementById("album-input").value;
      songs.push(newSongObject);
      console.log(newSongObject);
      $('#song-names').append(`<section class="song-result">
                    <h2>${newSongObject.name} </h2>
                    <p>${newSongObject.artist} |</p>
                    <p>${newSongObject.album} </p>
                  </section>`);
     document.getElementById("song-input").value = "";
     document.getElementById("artist-input").value = "";
     document.getElementById("album-input").value = "";
})

$("#moreBtn").click(function(event) {
   let moreSongs = (songs) => {
      for (var i = 0; i < songs.length; i++) {
        $("#song-names").append(`<section class="song-result">
                      <h2>${songs[i].name} </h2>
                      <p>${songs[i].artist} |</p>
                      <p>${songs[i].album} </p>
                      <button class="deleteBtn">Delete Song</button>
                    </section>`);
      }
}
  $.ajax({
  	url:"moresongs.json"
  }).done(moreSongs);
})

$.ajax({
	url:"songs.json"
}).done(showSongs);
