// Function to check if an element with a specific class is in the viewport
function isElementInViewport(className) {
    const elements = document.querySelectorAll(`.${className}`);
    return Array.from(elements).some(element => {
        const rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    });
}

// Function to handle the scroll animation
function handleScrollAnimation() {
    const className = "animaceVlevo";

    if (isElementInViewport(className)) {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = 1;
        });
    }
}

// Attach the scroll event listener to trigger the animation
window.addEventListener('scroll', handleScrollAnimation);

// Trigger the animation when the page loads (in case the element is already in the viewport)
window.addEventListener('load', handleScrollAnimation);