"use strict";
const fs=require("fs");

const regexInt=/[0-9]+/;

const types={
    WORD: 0,
    SENTENCE: 1,
    PARAGRAPH: 2
}

const data={
    previous: ""
}

function chickenIpsum(){
    let words=chickenIpsumLoad();
    
    let value=5;
    let thing=types.SENTENCE;
    // process.argv[0] => nodejs install path
    // process.argv[1] => this file
    if (regexInt.test(process.argv[2])){
        value=parseInt(process.argv[2]);
        switch (process.argv[3].toLowerCase()){
            case "word":
            case "words":
                thing=types.WORD;
                break;
            case "paragraph":
            case "paragraphs":
                thing=types.PARAGRAPH;
                break;
            default:
                // silently fail
                break;
        }
    } else {
        // silently fail
    }
    
    let output="";
    for (let i=0; i<value; i++){
        switch (thing){
            case types.WORD:
                output=output+chickenIpsumWord(words);
                break;
            case types.SENTENCE:
                output=output+chickenIpsumSentence(words);
                break;
            case types.PARAGRAPH:
                output=output+chickenIpsumPargraph(words);
                break;
        }
    }
    console.log(output);
}

function chickenIpsumLoad(){
    return fs.readFileSync("chicken.ipsum").toString().split('\r\n');
}

function chickenIpsumWord(words){
    if (words.length==0||words.join().length==0){
        return ">:C ";
    }
    if (words.length==1){
        return randomElementFromArray(words)+" ";
    }
    
    // i couldn't find any rules for generating lorem ipsum but i'm guessing it wouldn't
    // look as good if you generated the same word twice in a row
    let attempt="";
    do {
        attempt=randomElementFromArray(words);
    } while (attempt==data.previous);
    data.previous=attempt;
    
    return attempt+" ";
}

function chickenIpsumSentence(words){
    let sentenceLength=Math.floor(Math.random()*8+4);
    let output="";
    for (let i=0; i<sentenceLength; i++){
        output=output+chickenIpsumWord(words);
    }
    return capitalize(output.trim())+". ";
}

function chickenIpsumPargraph(words){
    let paragraphLength=Math.floor(Math.random()*6+4);
    let output="";
    for (let i=0; i<paragraphLength; i++){
        output=output+chickenIpsumSentence(words);
    }
    return output.trim()+"\n\n";
}

function randomElementFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

chickenIpsum();