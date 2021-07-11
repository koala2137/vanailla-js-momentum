const quotes = [
    {
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
        author: "Abraham Lincoln",
    },
    {
        quote: "I walk slowly, but I never walk backward.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Science without religion is lame, religion without science is blind.",
        author: "Albert Einstein",
    },
    {
        quote: "For Ann Druyan, In the vastness of space and the immensity of time, it is my joy to share a planet and an epoch with Annie.",
        author: "Carl Sagan",
    },
    {
        quote: "When you stare into the abyss the abyss stares back at you.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "I would rather find a single causal law than be the king of Persia!",
        author: "Karl Popper",
    },
    {
        quote: "All significant breakthroughs are break -\"withs\" old ways of thinking.",
        author: "Thomas Kuhn",
    },
    {
        quote: "In a world deluged by irrelevant information, clarity is power.",
        author: "Yuval Noah Harari",
    },
    {
        quote: "If you do not have debts, then you are out of business.",
        author: "Paul Volcker",
    },
    {
        quote: "We must know. We will know.",
        author: "David Hilbert",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;