$(document).ready(function() {

    var trackList = $('#tracks');
         // console.log(track.title);
    var trackTitle,
    trackImage,
    trackHolder,
    trackFile;


    rocktracks.forEach(function(track) {


      trackTitle = '<p>' + track.title + '</p>';

      trackImage = '<img src="' + track.artwork_url + '"/>';

      trackFile='<audio id="audio-test" controls src="' + track.stream_url + '?client_idPERSONALAPITOKEN"></audio>';


      trackHolder = '<li>' + trackTitle + trackImage + trackFile + '</li>';

        trackList.append(trackHolder);




    });

});
