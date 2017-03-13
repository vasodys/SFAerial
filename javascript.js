/**
 * Created by vasilisodysseos on 3/12/17.
 */
var source;
var videos = [];
var player;
var k = 0;

function getData() {
    $.ajax({
        type: "GET",
        dataType: "json",
        crossDomain: false,
        url: "http://benjaminmayo.co.uk/scripts/apple-tv-screensavers.json",
        success: onDataReceived
    });

}
function onDataReceived(sourceFile) {
    source = sourceFile;
    console.log(source);
    for (var i = 0; i < source.length ; i++){
        for (var j = 0; j < source[i].assets.length; j++){
            var tempVid = source[i].assets[j];
            if (tempVid.accessibilityLabel == "San Francisco"){
                videos.push(tempVid.url);
            }
        }
    }
    console.log(videos);
    player = $("#myVideo")[0];
    player.src = videos[k];
    player.playbackRate = 0.5;
    player.addEventListener('ended', myHandler, false);
}

$(document).ready(getData());



function myHandler(e){
    k++;
    changeVideo(videos[k]);

}

function changeVideo(url){
    player.src = url;
    player.playbackRate = 0.5;
}
