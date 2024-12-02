// Quiz State
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let shuffledQuestions = [];
let selectedQuestions = [];

// DOM Elements
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const feedbackMessage = document.getElementById('feedback-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.querySelector('.progress');
const particlesContainer = document.getElementById('particles');
const currentQuestionElement = document.getElementById('current-question');
const motivationTextElement = document.getElementById('motivation-text');
const quoteContainer = document.getElementById('quote-container');
const programmerQuoteElement = document.getElementById('programmer-quote');
const quoteAuthorElement = document.getElementById('quote-author');
const resourcesListElement = document.getElementById('resources-list');

// Motivational messages
const motivationalMessages = [
    "You're doing great! Keep going! 🚀",
    "Almost there! Stay focused! 💪",
    "You're making excellent progress! 🌟",
    "Keep up the good work! 👏",
    "You're crushing it! 🎯"
];

// Create particles
function createParticles() {
    const numberOfParticles = 50;
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Random size
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 15 + 5) + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Select random questions
function selectRandomQuestions(allQuestions, count) {
    const shuffled = shuffleArray([...allQuestions]);
    return shuffled.slice(0, count);
}

// Update motivation text
function updateMotivationText() {
    const remainingQuestions = 10 - currentQuestion;
    let message = '';

    if (remainingQuestions > 1) {
        message = `${remainingQuestions} questions to go! ${motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]}`;
    } else if (remainingQuestions === 1) {
        message = "Last question! Give it your best shot! 🎯";
    }

    motivationTextElement.textContent = message;
}

// Initialize Quiz
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    selectedQuestions = selectRandomQuestions(questions, 10); // Select 10 random questions
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    createParticles();
    loadQuestion();
    updateScore();
}

// Load Question
function loadQuestion() {
    const question = selectedQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create new options with fade-in animation
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option animate__animated animate__fadeInRight';
        optionElement.style.animationDelay = `${index * 0.1}s`;
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress bar with animation
    const progress = ((currentQuestion) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update motivation text
    updateMotivationText();
    
    // Reset next button
    nextButton.disabled = true;
}

// Select Option
function selectOption(index, optionElement) {
    // Clear previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('correct', 'wrong');
    });
    
    selectedOption = index;
    const correct = selectedQuestions[currentQuestion].correct;
    
    // Show correct/wrong immediately with animation
    if (index === correct) {
        optionElement.classList.add('correct', 'animate__animated', 'animate__pulse');
        score += 10;
        updateScore();
    } else {
        optionElement.classList.add('wrong', 'animate__animated', 'animate__shakeX');
        options[correct].classList.add('correct', 'animate__animated', 'animate__pulse');
    }
    
    // Enable next button
    nextButton.disabled = false;
    
    // Disable further option selection
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

// Update Score with animation
function updateScore() {
    scoreElement.style.animation = 'none';
    scoreElement.offsetHeight; // Trigger reflow
    scoreElement.textContent = score;
    scoreElement.style.animation = 'scoreUpdate 0.5s ease-out';
}

// Display random programmer quote
function displayRandomQuote() {
    const randomQuote = programmerQuotes[Math.floor(Math.random() * programmerQuotes.length)];
    programmerQuoteElement.textContent = `"${randomQuote.quote}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
}

// Display learning resources
function displayResources() {
    const resourcesList = document.getElementById('resources-list');
    resourcesList.innerHTML = '';
    
    // Shuffle resources and take first 5
    const selectedResources = shuffleArray([...learningResources]).slice(0, 5);
    
    selectedResources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource-item animate__animated animate__fadeInUp';
        
        const link = document.createElement('a');
        link.href = resource.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = resource.name;
        
        const description = document.createElement('p');
        description.textContent = resource.description;
        
        const tags = document.createElement('div');
        tags.className = 'resource-tags';
        resource.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'resource-tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });
        
        resourceItem.appendChild(link);
        resourceItem.appendChild(description);
        resourceItem.appendChild(tags);
        resourcesList.appendChild(resourceItem);
    });
}

// Show Results
function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    finalScoreElement.textContent = score;
    
    // Show celebration animation for high scores
    if (score >= 70) {
        document.querySelectorAll('.firework').forEach(firework => {
            firework.style.display = 'block';
        });
    }
    
    // Generate feedback message with emojis
    let feedback = '';
    if (score >= 90) {
        feedback = "🌟 Outstanding! You're a web development master! Ready to take on any challenge! 🏆";
    } else if (score >= 80) {
        feedback = "🎉 Excellent work! You have a solid grasp of web development concepts! 💪";
        quoteContainer.classList.remove('hidden');
        displayRandomQuote();
    } else if (score >= 70) {
        feedback = "👍 Great job! You're well on your way to becoming a web developer! 📚";
        quoteContainer.classList.remove('hidden');
        displayRandomQuote();
    } else if (score >= 50) {
        feedback = "💪 Good effort! Keep practicing and you'll improve! Here are some resources to help you learn more.";
    } else {
        feedback = "🎯 Don't give up! Everyone starts somewhere. Check out these resources to strengthen your knowledge!";
    }
    
    feedbackMessage.textContent = feedback;
    displayResources();
}

// Footer visibility control
function handleFooterVisibility() {
    const footer = document.querySelector('.attribution');
    let lastScrollPosition = 0;
    let scrollTimeout;
    const scrollThreshold = 200; // Minimum scroll before showing footer

    // Initially hide footer
    footer.classList.remove('visible');

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = currentScroll > lastScrollPosition;
        const hasScrolledEnough = currentScroll > scrollThreshold;
        const isNearBottom = (window.innerHeight + currentScroll) >= document.documentElement.scrollHeight - 100;

        if ((isScrollingDown && hasScrolledEnough) || isNearBottom) {
            footer.classList.add('visible');
        } else if (!isNearBottom && !isScrollingDown) {
            footer.classList.remove('visible');
        }

        // Hide footer after 2 seconds of no scrolling unless near bottom
        scrollTimeout = setTimeout(() => {
            if (!isNearBottom) {
                footer.classList.remove('visible');
            }
        }, 2000);

        lastScrollPosition = currentScroll;
    });
}

// Initialize footer visibility control after page load
window.addEventListener('load', () => {
    handleFooterVisibility();
});

// Event Listeners
nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener('click', initializeQuiz);

// Add keypress support for navigation
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !nextButton.disabled) {
        nextButton.click();
    }
});

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
