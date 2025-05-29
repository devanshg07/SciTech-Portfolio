document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcome-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const gradeSelection = document.getElementById('grade-selection');
    const gradeButtons = document.querySelectorAll('.grade-btn');
    const grade9Content = document.getElementById('grade9-content');
    const grade10Content = document.getElementById('grade10-content');
    const grade11Content = document.getElementById('grade11-content');
    const grade12Content = document.getElementById('grade12-content');
    const backBtns = document.querySelectorAll('.back-btn');

    // Function to hide all content screens
    const hideAllContentScreens = () => {
        welcomeScreen.classList.remove('active');
        gradeSelection.classList.remove('active');
        grade9Content.classList.remove('active');
        grade10Content.classList.remove('active');
        grade11Content.classList.remove('active');
        grade12Content.classList.remove('active');
    };

    // Handle welcome button click
    welcomeBtn.addEventListener('click', () => {
        hideAllContentScreens();
        gradeSelection.classList.add('active');
    });

    // Handle grade button clicks
    gradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const grade = button.getAttribute('data-grade');
            hideAllContentScreens();
            if (grade === '9') {
                grade9Content.classList.add('active');
            } else if (grade === '10') {
                grade10Content.classList.add('active');
            } else if (grade === '11') {
                grade11Content.classList.add('active');
            } else if (grade === '12') {
                grade12Content.classList.add('active');
            }
            console.log(`Selected Grade ${grade}`);
        });
    });

    // Handle back button clicks
    backBtns.forEach(button => {
        button.addEventListener('click', () => {
            hideAllContentScreens();
            gradeSelection.classList.add('active');
        });
    });
}); 