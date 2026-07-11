// Quiz

function checkAnswer(){

const answer=document.querySelector('input[name="quiz"]:checked');

const result=document.getElementById("result");

if(answer==null){

result.style.color="red";
result.innerHTML="Please select an answer.";

return;

}

if(answer.value==="CSS"){

result.style.color="green";
result.innerHTML="✅ Correct! CSS is used for styling webpages.";

}
else{

result.style.color="red";
result.innerHTML="❌ Wrong Answer. The correct answer is CSS.";

}

}



// Joke API

async function getJoke(){

const jokeBox=document.getElementById("jokeBox");

jokeBox.innerHTML="Loading Joke...";

try{

const response=await fetch("https://official-joke-api.appspot.com/random_joke");

const data=await response.json();

jokeBox.innerHTML=`
<b>${data.setup}</b>
<br><br>
${data.punchline}
`;

}

catch{

jokeBox.innerHTML="Failed to load joke.";

}

}