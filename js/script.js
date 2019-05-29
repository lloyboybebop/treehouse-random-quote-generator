/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {quote:"You should never view your challenges as a disadvantage. Instead, it's important for you to understand that your experience facing and overcoming adversity is actually one of your biggest advantages", source:"Michelle Obama", citation:"https://www.brainyquote.com/quotes/michelle_obama_791363", year:2016 },
  {quote:"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.", source:"Lao Tzu", citation:"https://www.brainyquote.com/quotes/lao_tzu_121709", year:1312},
  {quote:"Simplicity is the glory of expression.", source:"Walt Whitman", citation:"https://www.brainyquote.com/quotes/walt_whitman_380796", year:1954 },
  {quote:"Don't sweat the petty things and don't pet the sweaty things.", source:"George Carlin", citation:"https://www.brainyquote.com/quotes/george_carlin_383028", year:1993 },
  {quote:"Someone asked me, if I were stranded on a desert island what book would I bring... 'How to Build a Boat.'", source:"Steven Wright", citation:"https://www.brainyquote.com/quotes/steven_wright_578936", year:1997},
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.