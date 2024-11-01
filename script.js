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




// document.addEventListener('DOMContentLoaded', function() {
//     const profileCard = document.querySelector('.profile-card');
//     const customCursor = document.createElement('div');
//     customCursor.classList.add('custom-cursor');

//     // Append the custom cursor to the body
//     document.body.appendChild(customCursor);

//     // Update cursor position
//     document.addEventListener('mousemove', function(e) {
//         customCursor.style.top = `${e.clientY}px`;
//         customCursor.style.left = `${e.clientX}px`;
//     });

//     // Show custom cursor on profile card hover
//     profileCard.addEventListener('mouseenter', function() {
//         customCursor.style.display = 'block';
//     });

//     // Hide custom cursor when leaving profile card
//     profileCard.addEventListener('mouseleave', function() {
//         customCursor.style.display = 'none';
//     });

//     // Initially hide the cursor
//     customCursor.style.display = 'none';
// });


/*counters*/
$(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

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

  