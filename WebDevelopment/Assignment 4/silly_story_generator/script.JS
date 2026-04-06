// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = ["Willy the goblin", "Big Daddy", "Father Christmas"];

const places = ["thesoup kitchen","Dave'n'Busters","the White House"];

const events = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and slithered away"] ;

// Partial return random string function
randomCharacter = randomValueFromArray(characters);
randomPlace = randomValueFromArray(places);
randomEvent = randomValueFromArray(events);

function returnRandomStoryString() {
storyText = "It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.";

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
newStory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newStory.replaceAll("Bob",name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}