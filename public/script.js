const timelineItems = document.querySelectorAll('.timeline-item');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

// Show the initial timeline item
timelineItems[currentIndex].classList.add('active');

prevButton.addEventListener('click', () => {
    timelineItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + timelineItems.length) % timelineItems.length;
    timelineItems[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
    timelineItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % timelineItems.length;
    timelineItems[currentIndex].classList.add('active');
});
