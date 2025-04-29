//quotes collected by AI and me

const quotes = [
        { quote: "The unexamined life is not worth living.", author: "Socrates" },
        { quote: "The first and best victory is to conquer self.", author: "Plato" },
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "I cannot teach anybody anything. I can only make them think.", author: "Socrates" },
        { quote: "Courage is knowing what not to fear.", author: "Plato" },
        { quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle" },
        { quote: "An unexamined life is not worth living.", author: "Socrates" },
        { quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato" },
        { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
        { quote: "He who is not a good servant will not be a good master.", author: "Socrates" },
        { quote: "Time is the soul of the universe.", author: "Plato" },
        { quote: "The more you know, the more you realize you don't know.", author: "Aristotle" },
        { quote: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.", author: "Socrates" },
        { quote: "Love is a serious mental disease.", author: "Plato" },
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { quote: "To find yourself, think for yourself.", author: "Socrates" },
        { quote: "The greatest wealth is to live content with little.", author: "Plato" },
        { quote: "The best way to predict your future is to create it.", author: "Aristotle" },
        { quote: "Wisdom begins in wonder.", author: "Socrates" },
        { quote: "A good decision is based on knowledge and not on numbers.", author: "Plato" },
        { quote: "Patience is bitter, but its fruit is sweet.", author: "Aristotle" },
        { quote: "I know that I am intelligent, because I know that I know nothing.", author: "Socrates" },
        { quote: "You can discover more about a person in an hour of play than in a year of conversation.", author: "Plato" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "He who commits injustice and who is wronged are both equally wretched.", author: "Plato" },
        { quote: "Educating the mind without educating the heart is no education at all.", author: "Aristotle" },
        { quote: "Be as you wish to seem.", author: "Socrates" },
        { quote: "Knowledge which is acquired under compulsion obtains no hold on the mind.", author: "Plato" },
        { quote: "A friend to all is a friend to none.", author: "Aristotle" },
        { quote: "There is only one good, knowledge, and one evil, ignorance.", author: "Socrates" },
        { quote: "Better a little which is well done, than a great deal imperfectly.", author: "Plato" },
        { quote: "The more you know, the more you realize you don’t know.", author: "Aristotle" },
        { quote: "True love is not about perfection; it is about accepting each other's imperfections.", author: "Socrates" },
        { quote: "We are twice armed if we fight with faith.", author: "Plato" },
        { quote: "The highest good is the life of reason.", author: "Aristotle" },
        { quote: "To be is to do.", author: "Socrates" },
        { quote: "He who is not a good servant will not be a good master.", author: "Plato" },
        { quote: "Injustice, no matter how successful, always brings its own punishment.", author: "Aristotle" },
        { quote: "I am not an Athenian or a Greek, but a citizen of the world.", author: "Socrates" },
        { quote: "Everything that deceives may be said to enchant.", author: "Plato" },
        { quote: "The one exclusive sign of thorough knowledge is the power of teaching.", author: "Aristotle" },
        { quote: "There is only one good, knowledge, and one evil, ignorance.", author: "Socrates" },
        { quote: "Knowledge becomes evil if the aim be not virtuous.", author: "Plato" },
        { quote: "Without friends, no one would choose to live, though he had all other goods.", author: "Aristotle" },
        { quote: "I am not a teacher, only a fellow traveler of whom you asked the way.", author: "Socrates" },
        { quote: "Truth is the beginning of all things.", author: "Plato" },
        { quote: "He who has a why to live can bear almost any how.", author: "Aristotle" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "Those who tell the stories also rule society.", author: "Plato" },
        { quote: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.", author: "Aristotle" },
        { quote: "Worthless people live only to eat and drink; people of worth eat and drink only to live.", author: "Socrates" },
        { quote: "The price good men pay for indifference to public affairs is to be ruled by evil men.", author: "Plato" },
        { quote: "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.", author: "Aristotle" },
        { quote: "Not life, but good life, is to be chiefly valued.", author: "Socrates" },
        { quote: "The greatest penalty of evildoing is to have done it.", author: "Plato" },
        { quote: "Man is by nature a social animal.", author: "Aristotle" },
        { quote: "Let him who would move the world first move himself.", author: "Socrates" },
        { quote: "He who loves practice without theory is like the sailor who boards ship without a rudder and compass and never can tell where he is going.", author: "Plato" },
        { quote: "The aim of art is to represent not the outward appearance of things, but their inward significance.", author: "Aristotle" }
];

const quoteContainer = document.getElementById("quote");
const authorContainer = document.getElementById("author");


// function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = `\" ${quotes[randomIndex].quote} \" `;
    authorContainer.textContent = quotes[randomIndex].author;
}

// evenet listener to generate new quote with button
document.getElementById("generate-quote").addEventListener("click", getRandomQuote); 

// creating copy-code 
function copyQuote() {
    const quoteText = quoteContainer.textContent;
    const authorText = authorContainer.textContent;
    const fullQuote = `${quoteText} - ${authorText}`;
    
    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

// event listener to copy quote with button
document.getElementById("copy-quote").addEventListener("click", copyQuote);