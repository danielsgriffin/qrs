'use strict';

chrome.omnibox.onInputEntered.addListener(function(text) {
  var presetList = [
    'https://duckduckgo.com/?q=%s',
    'https://search.brave.com/search?q=%s',
    'https://twitter.com/search?q=%s',
    'https://www.bing.com/search?q=%s',
    'https://www.ecosia.org/search?q=%s',
    'https://www.google.com/search?q=%s',
    'https://www.qwant.com/?q=%s',
    'https://you.com/search?q=%s'];
  var listLen = presetList.length;
  var randomIdx = Math.floor(Math.random() * listLen);
  var newURL = presetList[randomIdx].replace("%s", encodeURIComponent(text));
  chrome.tabs.create({ url: newURL });
});

// Credit to:
// - This comment for getting me started: https://www.reddit.com/r/brave_browser/comments/np9xdr/randomize_search_engines/
// - This for helping me get to something I understood: https://developer.chrome.com/docs/extensions/reference/omnibox/