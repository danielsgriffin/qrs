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