var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () { //function
  for (var key in library.playlists) { // pulls all the keys from library.playlists
    var playlist = library.playlists[key]; // redefines 'playlist' after loop, allows to jump down to key
    console.log(playlist.id + ': ' + playlist.name + ' - ' + playlist.tracks.length + " tracks")
  }
};

printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in library.tracks) {
    var tracks = library.tracks[key];
    console.log(tracks.id + ": " + tracks.name + " by" + tracks.artist + " (" + tracks.album + ")");
  }
};

// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var listOfTracks = library.playlists[playlistId].tracks;
  var playlistName = library.playlists[playlistId].name;
  console.log(playlistId + ": " + playlistName + "- " + listOfTracks.length + " tracks");
  for( var i = 0; i< listOfTracks.length; i++) {
    var currentTrack = listOfTracks[i];
    console.log(currentTrack + ": " + library.tracks[currentTrack].name + " by " + library.tracks[currentTrack].artist + " (" + library.tracks[currentTrack].album + ")");
}
};

printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId].tracks;
  playlist.push(trackId)
  console.log(playlist);
}

addTrackToPlaylist('t03', 'p01');


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid())

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrack = {
    id: uid(),
    name: name,
    artist: artist,
    album: album
  }
  library.tracks.t04 = newTrack;
  console.log(library.tracks)
}

addTrack('Pyramids', 'Frank Ocean', 'Channel Orange');

// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylist = {
    id: uid(),
    name: name,
    tracks: []
  }
  library.playlists.p03 = newPlaylist;
  console.log(library.playlists);
}

addPlaylist('New Playlist');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}