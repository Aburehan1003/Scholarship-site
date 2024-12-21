// scripts.js

// Helper function to hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll('.container > div');
    sections.forEach((section) => {
        section.style.display = 'none';
    });
}

// Handle forgiveness buttons
function handleForgiveness(forgiven) {
    hideAllSections();
    if (forgiven) {
        // User forgives - show shayari
        document.getElementById('shayari-section').style.display = 'block';
    } else {
        // User is upset - show sticker apology
        document.getElementById('sticker-section').style.display = 'block';
    }
}

// Show Shayari section
function showShayari() {
    hideAllSections();
    document.getElementById('shayari-section').style.display = 'block';
}

function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.style.display === 'block') {
            // Pause any audio or video playing on the current page
            const mediaElements = page.querySelectorAll('audio, video');
            mediaElements.forEach(media => media.pause());
        }
        page.style.display = 'none'; // Hide all pages
    });
    document.getElementById(pageId).style.display = 'block'; // Show the target page
}


// Show Proposal section
function showProposal() {
    hideAllSections();
    document.getElementById('proposal-section').style.display = 'block';
}

// Handle "Yes" or "No" in Proposal section
function sayYes() {
    alert('Yay! You said yes! 💖');
    hideAllSections();
    document.getElementById('movie-section').style.display = 'block';
}

function sayNo() {
    alert('Oh no! 😢 But I’ll keep trying!');
    hideAllSections();
    document.getElementById('thank-you-section').style.display = 'block';
}

// Movie selection handling
function selectMovie(movie) {
    alert(`Yay! We’ll watch "${movie}" together. 🎥`);
    hideAllSections();
    document.getElementById('food-section').style.display = 'block';
}

function customMovie() {
    const customMovieName = prompt('Enter the name of the movie you want to watch:');
    if (customMovieName) {
        selectMovie(customMovieName);
    } else {
        alert('No worries, let’s pick one later!');
    }
}

function submitDate() {
    const date = document.getElementById('movie-date').value;
    if (date) {
        alert(`Great! I’ve saved the date: ${date}.`);
    } else {
        alert('Please pick a valid date.');
    }
}

// Food and drink preferences
function showDedication() {
    const foodChoice = document.getElementById('food-choice').value;
    const drinkChoice = document.getElementById('drink-choice').value;

    if (foodChoice && drinkChoice) {
        alert(`Awesome! We'll have ${foodChoice} and ${drinkChoice} together! 🍴🥤`);
        hideAllSections();
        document.getElementById('dedication-section').style.display = 'block';
    } else {
        alert('Please select your preferences!');
    }
}

// Final dedication and thank-you section
function showThankYou() {
    hideAllSections();
    document.getElementById('thank-you-section').style.display = 'block';
}




