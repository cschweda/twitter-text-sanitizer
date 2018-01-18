# Tweet Text Sanitizer

Simple node application that removes non-ASCII characters and embedded URLs from a user-specified text file. I wrote this in order to quickly 'sanitize' a large file of tweets that I scraped from Twitter's API. I didn't want emojis, odd characters, or URLs -- just the text (and any hashtags).

The scraper I used was written in Python and is available here: [https://github.com/bpb27/twitter_scraping](https://github.com/bpb27/twitter_scraping).

## Usage

Clone or download this repo, and then change into the directory.

I've included a sample raw tweet file from [@javascriptkicks](https://twitter.com/javascriptkicks?lang=en). Usage is simple:

```
node sanitize javascriptkicks.txt
```

The text is cleaned -- and a new file is created: `javascriptkicks-cleaned.txt`.

That's it!

### Sample input:

```
Tutorial: Setting up React with Parcel. A comparison with Webpack 3 by gagliardi_vale https://t.co/PHZZwzsbfc

Generating Your First Components and Modules in Angular 5 by @SibeeshVenu https://t.co/aHKHdskvEM #javascript… https://t.co/Z6ssBPwrLK
Adding ESlint to your project by Valadji https://t.co/yeXHq9DBbf #javascript #eslint via JavaScriptKicks

Mutating Web content using DOM Ranges by WebReflection https://t.co/ebjfcLKJu0 #javascript via JavaScriptKicks
CPU Intensive Node.js: Part 1 by @codeburstio https://t.co/twYvCTzp1a #javascript #nodejs via @JavaScriptKicks
How to debug front-end: Elements - Pragmatists by WitkowskiMichau https://t.co/GurJFYoE9u #javascript via JavaScriptKicks
```

### Sample output:

```
Tutorial:Setting up React with Parcel. A comparison with Webpack 3 by gagliardi_vale   Your First Components and Modules in Angular 5 by @SibeeshVenu   #javascript   to your project by Valadji   #javascript #eslint via JavaScriptKicksMutatingWeb content using DOM Ranges by WebReflection   #javascript via JavaScriptKicksCPU Intensive Node.js: Part 1 by @codeburstio   #javascript #nodejs via @JavaScriptKicksHowtodebug front-end: Elements - Pragmatists by WitkowskiMichau
```
