const programmerQuotes = [
    {
        quote: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie"
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        author: "Dan Salomon"
    },
    {
        quote: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    }
];

const learningResources = [
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "Comprehensive web development documentation and tutorials",
        tags: ["HTML", "CSS", "JavaScript", "Web APIs"]
    },
    {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Free coding bootcamp with certifications and interactive lessons",
        tags: ["Full Stack", "Tutorials", "Projects", "Certifications"]
    },
    {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description: "Amazing CSS tutorials, tips, and tricks for modern web design",
        tags: ["CSS", "Design", "Flexbox", "Grid"]
    },
    {
        name: "JavaScript.info",
        url: "https://javascript.info/",
        description: "Modern JavaScript tutorials from basics to advanced concepts",
        tags: ["JavaScript", "ES6+", "DOM", "Async"]
    },
    {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/",
        description: "Real-world frontend challenges to improve your coding skills",
        tags: ["Projects", "Frontend", "Practice", "Design"]
    },
    {
        name: "Codecademy",
        url: "https://www.codecademy.com/",
        description: "Interactive coding lessons with hands-on practice",
        tags: ["Interactive", "Multiple Languages", "Web Development"]
    },
    {
        name: "Web.dev",
        url: "https://web.dev/",
        description: "Google's resource for modern web development best practices",
        tags: ["Performance", "SEO", "PWA", "Best Practices"]
    },
    {
        name: "GitHub",
        url: "https://github.com/",
        description: "Host and share your code, collaborate with others",
        tags: ["Git", "Open Source", "Collaboration"]
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "Community-driven Q&A for programmers",
        tags: ["Problem Solving", "Community", "Debugging"]
    },
    {
        name: "Udemy",
        url: "https://www.udemy.com/topic/web-development/",
        description: "Comprehensive video courses on web development",
        tags: ["Courses", "Video Learning", "Full Stack"]
    }
];

const questions = [
    // HTML Questions
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which HTML tag is used for creating a navigation menu?",
        options: ["<nav>", "<menu>", "<navigation>", "<navbar>"],
        correct: 0
    },
    {
        question: "What is the purpose of the HTML5 <canvas> element?",
        options: ["To draw graphics", "To create forms", "To display videos", "To style text"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "css", "class", "font"],
        correct: 0
    },
    {
        question: "What is the semantic HTML tag for the main content of a webpage?",
        options: ["<main>", "<content>", "<body>", "<article>"],
        correct: 0
    },
    // CSS Questions
    {
        question: "What does CSS Grid primarily help with?",
        options: ["Two-dimensional layouts", "Animations", "Text styling", "Form validation"],
        correct: 0
    },
    {
        question: "Which CSS property creates smooth transitions?",
        options: ["transition", "animation", "transform", "smooth"],
        correct: 0
    },
    {
        question: "What is the purpose of CSS media queries?",
        options: ["Responsive design", "Image optimization", "Font loading", "Color management"],
        correct: 0
    },
    {
        question: "Which CSS unit is relative to the viewport width?",
        options: ["vw", "px", "em", "rem"],
        correct: 0
    },
    {
        question: "What is the CSS Box Model?",
        options: [
            "Content, padding, border, and margin",
            "Width, height, and color",
            "Flexbox and Grid",
            "Position and display"
        ],
        correct: 0
    },
    // JavaScript Questions
    {
        question: "What is the difference between let and const?",
        options: [
            "let can be reassigned, const cannot",
            "let is global, const is local",
            "const is faster than let",
            "There is no difference"
        ],
        correct: 0
    },
    {
        question: "What is a Promise in JavaScript?",
        options: [
            "An object representing future completion of an async operation",
            "A guarantee of code quality",
            "A type of function",
            "A debugging tool"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of async/await?",
        options: [
            "To handle asynchronous operations",
            "To style elements",
            "To create loops",
            "To define variables"
        ],
        correct: 0
    },
    // Real-world Scenarios
    {
        question: "You need to center a div both horizontally and vertically. Which CSS approach is most modern?",
        options: [
            "display: flex with justify-content and align-items",
            "position: absolute with negative margins",
            "float: center",
            "text-align: center"
        ],
        correct: 0
    },
    {
        question: "What's the best practice for storing sensitive user data in the browser?",
        options: [
            "Never store sensitive data in the browser",
            "Use localStorage",
            "Store in cookies",
            "Use sessionStorage"
        ],
        correct: 0
    },
    // Performance Questions
    {
        question: "Which approach improves website loading performance?",
        options: [
            "Lazy loading images",
            "Using more images",
            "Adding more JavaScript",
            "Using inline styles"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of code minification?",
        options: [
            "Reduce file size",
            "Make code prettier",
            "Add comments",
            "Debug code"
        ],
        correct: 0
    },
    // Accessibility Questions
    {
        question: "Why is the alt attribute important in images?",
        options: [
            "For screen readers and accessibility",
            "To make images load faster",
            "To improve SEO only",
            "To style images"
        ],
        correct: 0
    },
    {
        question: "What does ARIA stand for in web development?",
        options: [
            "Accessible Rich Internet Applications",
            "Advanced Resource Integration API",
            "Automated Response Interface Action",
            "Active Resource Internet Access"
        ],
        correct: 0
    },
    {
        question: "Which color combination provides the best readability?",
        options: [
            "Dark text on light background",
            "Red text on blue background",
            "Yellow text on white background",
            "Light gray text on white background"
        ],
        correct: 0
    }
];
