
function twitchCheck(){$.getJSON("https://api.twitch.tv/kraken/streams/mickagamer_?client_id=YOUR API KEY TWITCH", function(channel) {
 
  if (channel["stream"] == null) {
    console.log("Stream is offline");

    linkUrl = "https://www.youtube.com/user/micka69250";
    chrome.browserAction.setIcon({path: "img/offline.png"});
    console.log("set icon offline");

 
  } else {
      linkUrl = "http://twitch.tv/mickagamer_/";
      chrome.browserAction.setIcon({path: "img/online.png"});
      console.log("set icon online");
    }
})};
var linkUrl = "";
twitchCheck();

chrome.alarms.create('twitchAlarm', {delayInMinutes: 5, periodInMinutes: 5});

chrome.alarms.onAlarm.addListener(function( twitchAlarm ) {
  twitchCheck();
});

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = linkUrl;
    chrome.tabs.create({ url: newURL });
});
