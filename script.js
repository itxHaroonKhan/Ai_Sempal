let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    let commands = {
        "hello": "Hello sir, what can I help you with?",
        "who is hamza": "Hamza is a good student of web development and your friend.",
        "who are you": "I am a virtual assistant, created by Haroon sir.",
        "who is haroon sir": "Haroon sir is a good teacher and the founder of this course.",
        "where do you live": "I live in the digital world, inside your device.",
        "who created you": "I was created by Haroon sir.",
        "what is your purpose": "My purpose is to assist you and make your tasks easier.",
        "tell me a joke": "Why don't programmers like nature? Because it has too many bugs!",
        "what can you do": "I can tell you the time, date, open websites, answer general questions, and assist you with various tasks.",
        "how are you": "I am just a program, but I am functioning perfectly fine. How can I assist you?",
        "who is the best programmer": "Every programmer who keeps learning and improving is the best!",
        "what is ai": "AI, or Artificial Intelligence, is the simulation of human intelligence in machines.",
        "who is the founder of google": "Google was founded by Larry Page and Sergey Brin in 1998.",
        "who is the ceo of tesla": "The CEO of Tesla is Elon Musk.",
        "what is your name": "I am your virtual assistant.",
        "what is your age": "I am just a program, so I don’t have an age!",
        "what is your favorite color": "I like all colors equally, but I think blue is quite nice.",
        "who is hamza alvi":"hamza alvi sir fahade is a haroon teacher's ",
        "what is your favorite food": "I don’t eat food, but if I could, I would try pizza!",
        "what is the time": `The current time is ${new Date().toLocaleTimeString()}.`,
        "what is the date": `Today's date is ${new Date().toLocaleDateString()}.`,
        "open youtube": "Opening YouTube...",
        "open google": "Opening Google...",
        "open facebook": "Opening Facebook...",
        "open instagram": "Opening Instagram...",
        "open whatsapp": "Opening WhatsApp...",
        "who is the richest person in the world": "As of recent updates, Bernard Arnault and Elon Musk are among the richest people in the world.",
        "who is the prime minister of pakistan": "The current Prime Minister of Pakistan is Anwaar-ul-Haq Kakar.",
        "who is the president of usa": "The current President of the United States is Joe Biden.",
        "who invented the light bulb": "The light bulb was invented by Thomas Edison.",
        "who invented the telephone": "The telephone was invented by Alexander Graham Bell.",
        "what is the capital of pakistan": "The capital of Pakistan is Islamabad.",
        "what is the capital of india": "The capital of India is New Delhi.",
        "what is the capital of usa": "The capital of the United States is Washington, D.C.",
        "how does a computer work": "A computer processes data using a combination of hardware and software to perform tasks.",
        "how does the internet work": "The internet works by connecting millions of computers through a vast network using data transmission protocols.",
        "who discovered gravity": "Gravity was discovered by Sir Isaac Newton.",
        "who is the father of computer science": "Alan Turing is considered the father of computer science.",
        "how many continents are there": "There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        "how many oceans are there": "There are five oceans: the Pacific Ocean, Atlantic Ocean, Indian Ocean, Southern Ocean, and Arctic Ocean.",

        "what is the speed of light": "The speed of light is approximately 299,792,458 meters per second.",
        "who wrote the quran": "The Quran is the holy book of Islam, revealed to Prophet Muhammad (PBUH) by Allah.",
        "who was the first man on the moon": "Neil Armstrong was the first man to walk on the moon in 1969.",
        "who is the father of pakistan": "Quaid-e-Azam Muhammad Ali Jinnah is the founder of Pakistan.",
        "who is allama iqbal": "Allama Iqbal was a great philosopher, poet, and the visionary behind Pakistan.",
        "who is the best cricketer": "Many consider Sachin Tendulkar, Virat Kohli, and Babar Azam among the best cricketers!",
        "which is the highest mountain in the world": "Mount Everest is the highest mountain in the world, standing at 8,848 meters.",
        "which is the longest river in the world": "The Nile River is the longest river in the world, stretching over 6,650 km.",
        "how many planets are there in our solar system": "There are eight planets in our solar system.",
        "what is the national animal of pakistan": "The national animal of Pakistan is the Markhor.",
        "what is the national bird of pakistan": "The national bird of Pakistan is the Chukar Partridge.",
        "what is the national flower of pakistan": "The national flower of Pakistan is Jasmine.",
        "how does an airplane fly": "An airplane flies using the principles of aerodynamics, mainly lift, thrust, drag, and weight.",
        "who invented the airplane": "The Wright brothers, Orville and Wilbur Wright, invented the first successful airplane.",
        "what is the biggest desert in the world": "The largest desert in the world is the Antarctic Desert, followed by the Sahara Desert.",
        "what is the largest ocean in the world": "The largest ocean in the world is the Pacific Ocean."
    };
    if (commands[message]) {
        speak(commands[message]);
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The current time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(`Today's date is ${date}`);
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } else {
        speak("I'm not sure about that. Let me search it for you.");
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}
