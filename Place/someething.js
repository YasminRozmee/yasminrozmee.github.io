var quotes = [
  "Bad biscuits make the baker broke, bro.",
"Man, you're letting your brain dial your fear volume up.",
"When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.",
"Everything small is a smaller version of something big!",
"Dude, suckin' at something is the first step to being sorta good at something.",
"You know you don't need a mirror to know you look good. You're beautiful on the inside. Like...your brain and stuff!",
 "You're getting all hung up , hung up on imaginary problems. You got to focus on what real, man.",
"Let's kick their digital bootays!",
"Responsibility demands sacrifice.",
"I don't need to feel like i'm waiting to be noticed. I know who I am and I'll know what I want if and when it ever comes along.",
"Your heart may be small, but it's as strong as a bull donk.",
"I'm a tough tootin' baby I can punch-a yo buns! Punch a-yo buns, I can punch all yo buns!",
"Y,all are just hating on my steez. I'm not listening to haters."]

var author = [
    "-Jake",
    "-Finn",
    "-BMO",
    "-Finn",
    "-Jake",
    "-Finn",
    "-Jake",
    "-Finn",
    "-Princess Bubblegum",
    "-Fionna",
    "-Jake",
    "-Finn",
    "-Ice King"
]

function newQuote(){
var randomNumber = Math.floor(Math.random() * quotes.length);
num = randomNumber
  
document.getElementById('quoteText').innerHTML = quotes[num];
document.getElementById('quoteAuthor').innerHTML = author[num]; 
}
