
const challenges = [
    {
        level: 1,
        description: "The building that has the most stories (Hint: Look at the Picture) ",
        imageUrl: "images/quiz1.jpg",
        ans: "library"
    },
    {
        level: 2,
        description: "I’m not the alphabet, but I have letters. I’m not a pole, but I have a flag (Hint: Look at the Picture) ",
        imageUrl: "images/quiz2.jpg",
        ans: "mailbox"
    },
    {
        level: 3,
        description: "Turn out the lights in the room and go rest your head on me. I’ll help you fall fast asleep.",
        imageUrl: "images/quiz3.jpg",
        ans: "pillow"
    },
    {
        level: 4,
        description: "I can take you to places you've never seen, but first, type your password in on my screen.",
        imageUrl: "images/quiz4.jpg",
        ans: "laptop"
    },
    {
        level: 5,
        description: "What is the name of the actress in this movie ?",
        imageUrl: "images/quiz5.jpg",
        ans: "deepika padukone"
    }
]


// Keep track of the current challenge
let currentChallengeIndex = 0;
var Score = 0;
document.getElementById("score").innerHTML = Score;


// Get references to the challenge container and next button
const challengeContainer = document.querySelector("#challenge-container");
const nextButton = document.querySelector("#next-button");
const PrevButton = document.querySelector("#prev-button");
const Answer = document.getElementById("Answer");


// Function to show the current challenge
function showChallenge() {
    const challenge = challenges[currentChallengeIndex];

    challengeContainer.innerHTML = "";


    const levelHeading = document.createElement("h2");
    levelHeading.textContent = `Level ${challenge.level}`;
    challengeContainer.appendChild(levelHeading);

    // Create and add a paragraph for the challenge description
    const descriptionParagraph = document.createElement("a");
    descriptionParagraph.textContent = challenge.description;
    challengeContainer.appendChild(descriptionParagraph);

    // Add additional elements based on the challenge type
    if (challenge.imageUrl) {
        // Create and add an image for the challenge
        const challengeImage = document.createElement("img");
        challengeImage.src = challenge.imageUrl;
        challengeContainer.appendChild(challengeImage);
    } else if (challenge.riddle) {
        // Create and add a paragraph for the riddle
        const riddleParagraph = document.createElement("p");
        riddleParagraph.textContent = challenge.riddle;
        challengeContainer.appendChild(riddleParagraph);
    } else if (challenge.task) {
        // Create and add a paragraph for the task
        const taskParagraph = document.createElement("a");
        taskParagraph.textContent = challenge.task;
        challengeContainer.appendChild(taskParagraph);
    }
}

// Function to handle clicking on the next button
function onNextButtonClick() {
    // Increment the current challenge index
     //currentChallengeIndex++;

    // Check if there are more challenges
    if (currentChallengeIndex < challenges.length) {
        // Show the next challenge
        showChallenge();
        // myFunction();
        document.getElementById("answer").value = "";
    } else {
        // Show a message indicating that all challenges have been completed
        alert("Congratulations you are qualified for elitmus");
    }
}

function onPreviousButtonClick() {
    // Increment the current challenge index

    // Check if there are more challenges
    if (currentChallengeIndex > 0) {
        currentChallengeIndex--;
        // Show the next challenge
        showChallenge();
    }
}

// Add an event listener to the next button
// nextButton.addEventListener("click", onNextButtonClick);
function myFunction() {
    var input = document.getElementById("answer").value;
    var modi = input.toLowerCase();

    // document.getElementById("output").innerHTML = input;
    var a = challenges[currentChallengeIndex].ans;


    console.log(input);
    console.log(modi == a)

    if (modi.length == 0) {
        alert("Please find the clue...!");
    }

    else if (modi == a) {
        alert("Answer is Correct move towards the Next Clue");
        Score += 1;
        document.getElementById("score").innerHTML = Score;
        nextButton.addEventListener("click", onNextButtonClick);
        currentChallengeIndex++;
        showChallenge();
        document.getElementById("answer").value = "";


    }
    else {
        alert("Answer is Incorrect...!");

    }
}

    function startAgain(){
        currentChallengeIndex=0;
        showChallenge()
    }

PrevButton.addEventListener("click", onPreviousButtonClick);
showChallenge();