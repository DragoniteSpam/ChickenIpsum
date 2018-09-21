# ChickenIpsum

it's like bacon ipsum, but better!

![how it works](https://i.imgur.com/HPMzrvI.png)

## requirements

you need [nodejs](https://nodejs.org/en/) and non-zero knowledge of using the command line

after that just type

`node chicken.js`

and watch the magic happen.

if you don't want five sentences you can pass it the optional arguments `quantity words|sentences|paragraphs` depending on how much you need or don't need:

`node chicken.js 100 paragraphs`

will generate ten paragraphs of chicken ipsum. (if you screw up the input it'll default to five sentences, see the source for details.)

## retooling this for other purposes

so the chicken words are loaded from the `chicken.ipsum` file (it's plain text, you can open it in notepad)

if you want to make it load a different file (not that i know why you'd want to do that), pass it a third command line argument with the name of the plain text file containing the words/terms (each on its own line), like

`node chicken.js 3500 paragraphs more\dog.ipsum`
