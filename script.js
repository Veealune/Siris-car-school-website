document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        // Hide the current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show the next slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});



const questions = [
    {
        question: "What does a flashing amber light at a pelican crossing indicate?",
        options: ["Stop and wait for the green signal", "Stop and wait for pedestrians to cross", "Proceed with caution", "Stop and proceed only if the road is clear"],
        answer: 2
    },
    {
        question: "What is the minimum distance that you should leave between your vehicle and the vehicle in front?",
        options: ["One second", "Two seconds", "Three seconds", "Four seconds"],
        answer: 1
    },
    {
        question: "In the UK, what does the 'Blue Badge' scheme provide?",
        options: ["Discounts on vehicle insurance", "Access to free parking", "Permission to use bus lanes", "Priority road assistance"],
        answer: 1
    },
    {
        question: "What is the national speed limit for cars and motorcycles on a single carriageway road in the UK?",
        options: ["40 mph", "50 mph", "60 mph", "70 mph"],
        answer: 3
    },
    {
        question: "What does a triangular road sign with a red border in the UK usually indicate?",
        options: ["Give way", "Speed limit", "Danger or hazard ahead", "No entry"],
        answer: 2
    },
    {
        question: "What does a solid white line at the side of the road indicate in the UK?",
        options: ["Pedestrian crossing", "No stopping or parking", "Emergency stopping area", "Speed bump ahead"],
        answer: 1
    },
    {
        question: "In the UK, when can you use hazard warning lights while driving?",
        options: ["When you're lost", "To indicate you're double-parked", "When you're driving slowly", "To warn other drivers of a hazard ahead"],
        answer: 3
    },
    {
        question: "What should you do if you see a zebra crossing with pedestrians waiting to cross in the UK?",
        options: ["Continue driving at the same speed", "Flash your headlights to indicate they can cross", "Stop and give way to pedestrians", "Sound your horn to alert them"],
        answer: 2
    },
    {
        question: "What does the 'Smart Motorway' system in the UK involve?",
        options: ["Roads controlled by artificial intelligence", "Variable speed limits and active traffic management", "Exclusive lanes for electric vehicles", "Underground tunnels for high-speed travel"],
        answer: 1
    },
    {
        question: "When driving in the UK, what should you do at a 'red X' displayed on a gantry or overhead sign?",
        options: ["Speed up", "Ignore it", "Leave the motorway at the next exit", "Move into an open lane if safe to do so"],
        answer: 2
    },
    {
        question: "What does the 'Highway Code' provide guidance on in the UK?",
        options: ["The construction of roads and highways", "Rules and regulations for drivers, cyclists, and pedestrians", "Historical landmarks along highways", "Popular driving routes"],
        answer: 1
    },
    // Add more questions here
];

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = q.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    for (let i = 0; i < q.options.length; i++) {
        const option = q.options[i];
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = function() {
            userAnswers[currentQuestion] = i;
            displayQuestion();
            showCorrectAnswer();
        }
        optionsDiv.appendChild(button);
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function showCorrectAnswer() {
    const q = questions[currentQuestion];
    const correctAnswerIndex = q.answer;
    const options = document.getElementById('options').getElementsByTagName('button');
    for (let i = 0; i < options.length; i++) {
        if (i === correctAnswerIndex) {
            options[i].style.backgroundColor = '#00b30f'; // Highlight correct answer
        }
    }
}

function checkAnswers() {
    let incorrect = [];
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] !== questions[i].answer) {
            incorrect.push(i + 1);
        }
    }
    const feedbackDiv = document.getElementById('feedback');
    if (incorrect.length === 0) {
        feedbackDiv.innerHTML = '<p>Congratulations! You answered all questions correctly.</p>';
    } else {
        feedbackDiv.innerHTML = `<p>Incorrect answers: ${incorrect.join(', ')}</p>`;
    }
}

displayQuestion();



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector("nav ul.menu");

    // Check if the window width is greater than 768px
    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            // Hide the dropdown button
            menuToggle.style.display = "none";
            // Show the menu items
            menu.classList.add("active");
        } else {
            // Show the dropdown button
            menuToggle.style.display = "block";
            // Hide the menu items
            menu.classList.remove("active");
        }
    }

    // Call checkScreenWidth on page load
    checkScreenWidth();

    // Call checkScreenWidth on window resize
    window.addEventListener("resize", checkScreenWidth);

    // Toggle the "active" class on menu when menuToggle is clicked
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});

