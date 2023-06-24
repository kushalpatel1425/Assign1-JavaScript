// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
const Pronounce = document.getElementById('Pronounce');
const randomButtons = document.querySelectorAll('.randomButton');
const createButton = document.getElementById('createButton');
const reConstructButton = document.getElementById('reConstructButton');
const wordsContainer = document.getElementById('wordsContainer');

let nouns = ['Mobile', 'Phone', 'PC', 'Tablet', 'Gaming Console', 'ipad'];
let verbs = ['Reduce', 'Increase', 'Succeed', 'Challenge'];
let adjectives = ['Long', 'Short', 'Simple', 'Complex'];
let places = ['Toronto', 'Brampton', 'Mississauga', 'Hamilton', 'Naigara', 'London'];

let story = [];

function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
	story = [
		getRandomWord(nouns),
		getRandomWord(verbs),
		getRandomWord(adjectives),
		getRandomWord(nouns),
		getRandomWord(places)
	];
	displayStory();
}

function displayStory() {
	wordsContainer.textContent = story.join(' ');
}

function speakNow(string) {
	const utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

Pronounce.addEventListener('click', function () {
	speakNow(wordsContainer.textContent);
});

randomButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let randomWord = '';

		switch (index) {
			case 0:
				randomWord = getRandomWord(nouns);
				break;
			case 1:
				randomWord = getRandomWord(verbs);
				break;
			case 2:
				randomWord = getRandomWord(adjectives);
				break;
			case 3:
				randomWord = getRandomWord(nouns);
				break;
			case 4:
				randomWord = getRandomWord(places);
				break;
			default:
				break;
		}

		story[index] = randomWord;
		displayStory();
	});
});

createButton.addEventListener('click', generateStory);

reConstructButton.addEventListener('click', function () {
	story = [];
	displayStory();
});
