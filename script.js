const toggleButton = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = ' Switch to Light Mode';
        toggleButton.prepend(modeIcon);
        modeIcon.className = 'fas fa-sun';
        toggleButton.classList.remove('btn-dark');
        toggleButton.classList.add('btn-light');
    } else {
        toggleButton.textContent = ' Switch to Dark Mode';
        toggleButton.prepend(modeIcon);
        modeIcon.className = 'fas fa-moon';
        toggleButton.classList.remove('btn-light');
        toggleButton.classList.add('btn-dark');
    }
});


function toggleReadMore() {
    const extraInfo = document.getElementById("extra-info");
    const readMoreLink = document.getElementById("read-more");

    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        readMoreLink.innerText = "Read Less";
    } else {
        extraInfo.style.display = "none";
        readMoreLink.innerText = "Read More";
    }
}



// const directionToggle = document.getElementById('direction-toggle');
//     const marquee = document.querySelector('.marquee');

//     let reverse = false;

//     directionToggle.addEventListener('click', () => {
//       reverse = !reverse;
//       marquee.classList.toggle('marquee--reverse', reverse);
//     });