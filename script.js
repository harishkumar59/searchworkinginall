// // DOM element references
// const menuButton = document.querySelector('.menu-button');
// const mobileMenu = document.querySelector('.mobile-menu');
// const searchInput = document.getElementById('searchInput');
// const websiteGrid = document.getElementById('websiteGrid');

// // Event listener for mobile menu toggle
// menuButton.addEventListener('click', () => {
//     mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
// });

// // Event listener for search functionality
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const cards = websiteGrid.querySelectorAll('.card');

//     cards.forEach(card => {
//         const name = card.querySelector('h2').textContent.toLowerCase();
//         const description = card.querySelector('p').textContent.toLowerCase();
//         const hashtags = Array.from(card.querySelectorAll('.hashtag')).map(tag => tag.textContent.toLowerCase());

//         if (name.includes(searchTerm) || description.includes(searchTerm) || hashtags.some(tag => tag.includes(searchTerm))) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// });



// Event listener for search functionality
const searchInput = document.getElementById('searchInput');
const websiteGrid = document.getElementById('websiteGrid');
const notFoundMessage = document.getElementById('notFoundMessage');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        websiteGrid.style.display = 'grid';
        notFoundMessage.style.display = 'none';
        searchResultsContainer.style.display = 'none';
        return;
    }

    const filteredTools = allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
    );

    if (filteredTools.length === 0) {
        websiteGrid.style.display = 'none';
        notFoundMessage.style.display = 'block';
        searchResultsContainer.style.display = 'none';
    } else {
        websiteGrid.style.display = 'none';
        notFoundMessage.style.display = 'none';
        searchResultsContainer.style.display = 'block';
        displaySearchResults(filteredTools);
    }
});

function displaySearchResults(tools) {
    searchResults.innerHTML = tools.map(tool => `
        <div class="card">
            <div class="pricing-indicator ${tool.pricing}">${tool.pricing}</div>
            <div class="card-header">
                <div class="card-title">
                    <img src="${tool.logo}" alt="${tool.name} logo" class="card-image">
                    <h2>${tool.name}</h2>
                </div>
            </div>
            <p>${tool.description}</p>
            <div class="card-footer">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        </div>
    `).join('');
}

// This would ideally be loaded from a separate JSON file or database
const allTools = [
    // Tools from homepage
    {
        name: "DALL-E",
        description: "AI system by OpenAI that creates realistic images and art from natural language descriptions, pushing the boundaries of visual creativity.",
        category: "Image Generation",
        pricing: "paid",
        logo: "/logos/dall e.png",
        url: "https://openai.com/dall-e-2"
    },
    {
        name: "GitHub Copilot",
        description: "AI-powered coding assistant that suggests code completions and entire functions in real-time, enhancing developer productivity across various programming languages.",
        category: "Coding",
        pricing: "paid",
        logo: "logos/githubcopilot.png",
        url: "https://github.com/features/copilot"
    },
    // ... add all other tools from homepage ...

    // Tools from other pages
    {
        name: "Quizlet",
        description: "An easy-to-use tool for creating and studying flashcards and quizzes. Perfect for students and teachers looking to improve their learning experience.",
        category: "Education",
        pricing: "free",
        logo: "quizlet.png",
        url: "https://quizlet.com"
    },
    // ... add all tools from other pages ...

    {
        name: "Summarize",
        description: "Summarizes long articles or texts into concise summaries. Ideal for users needing quick overviews of lengthy documents.",
        category: "Education",
        pricing: "freemium",
        logo: "summarize.png",
        url: "https://summarize.com"
    },









];


