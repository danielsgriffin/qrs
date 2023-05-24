'use strict';

// A listener for when a user enters input into the omnibox (address bar).
// This function will be called with the text that the user entered.
chrome.omnibox.onInputEntered.addListener(function (text) {

  // This is a list of the preset URLs that the extension will use to search.
  // The '%s' in each URL will be replaced with the text the user entered.
  var presetList = [
    'https://duckduckgo.com/?q=%s',
    'https://search.brave.com/search?q=%s',
    'https://twitter.com/search?q=%s',
    'https://www.bing.com/search?q=%s',
    'https://www.ecosia.org/search?q=%s',
    'https://www.google.com/search?q=%s',
    'https://www.qwant.com/?q=%s',
    'https://you.com/search?q=%s',
    'https://www.perplexity.ai/search/?q=%s'];

  // Get the length of the presetList array.
  var listLen = presetList.length;

  // Generate a random index number, within the range of the length of the presetList array.
  var randomIdx = Math.floor(Math.random() * listLen);

  // Use the random index number to select a random URL from the presetList array.
  // Replace the '%s' in the selected URL with the text the user entered.
  // The encodeURIComponent function is used to ensure that the text is properly encoded for use in a URL.
  var newURL = presetList[randomIdx].replace("%s", encodeURIComponent(text));

  // Create a new tab in the user's browser and open the generated URL.
  chrome.tabs.create({ url: newURL });
});
