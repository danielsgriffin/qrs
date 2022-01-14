# qrs

An extension that selects a random search engine from a preset list.

See: https://twitter.com/danielsgriffin/status/1476639963798114304

_N.b. Chrome/Brave only._

# install

1. Read the code to understand what it is doing.
2. Download locally.
3. Chrome/Brave: Extensions > Load unpacked > Hit "Select" once in the folder (seeing only search.js, images folder, and manifest.json)

N.b. Not currently on the Chrome Web Store.

# use

1. Type 'q' into the address bar, then space. That should select "query random se", showing a favicon and "query random se" (the 'name' in manifest.json)).
2. Type your query as you normally would and press enter.
3. Search opens in new tab. 

_N.b. I'm not sure yet how to change the "default" engine randomly w/o the burden of a popup telling you that it has been changed._

The search opening in a new tab is not my normal process. I would prefer, I think, to run in the current tab. TODO

_Remember: Get to the address bar by hitting Cmd+L (Mac) / Ctrl+L (Windows)._

# preset list of search engines

- www.duckduckgo.com
- www.search.brave.com
- www.twitter.com
- www.bing.com
- www.ecosia.org
- www.google.com
- www.qwant.com
- www.you.com
- www.neeva.com

You can update the preset list of search engines in search.js (see presetList). Note the convention follows the convention of replacing the query text w/ '%s' found in selecting search engines in Chrome/Brave.

# citations

Credit to:

- This comment from Reddit user Cabidiwa for getting me started: https://www.reddit.com/r/brave_browser/comments/np9xdr/comment/h04b10o/
- I didn't understand that code at all and wasn't wanting to be sending every random query to a website that I could learn much about. I used this reference in the documentation from Chrome to get to something I understood and trusted:https://developer.chrome.com/docs/extensions/reference/omnibox/
- 