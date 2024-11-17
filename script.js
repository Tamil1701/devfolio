
const toggleButton = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

// Select all images inside skill cards
const skillIcons = document.querySelectorAll('.skill-card img');

toggleButton.addEventListener('click', () => {
  // Ensure dark mode is always applied
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');

  // Update the button text and styles
  toggleButton.textContent = ' Dark Mode Enabled';
  toggleButton.prepend(modeIcon);
  modeIcon.className = 'fas fa-moon';
  toggleButton.classList.remove('btn-light');
  toggleButton.classList.add('btn-dark');

  // Set all icons to dark theme
  skillIcons.forEach(img => {
      const currentSrc = img.src;
      img.src = currentSrc.replace('theme=light', 'theme=dark');
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
// menu



// menu


// const directionToggle = document.getElementById('direction-toggle');
//     const marquee = document.querySelector('.marquee');

//     let reverse = false;

//     directionToggle.addEventListener('click', () => {
//       reverse = !reverse;
//       marquee.classList.toggle('marquee--reverse', reverse);
//     });



let redirectUrl = '';

function openPopup(url) {
  redirectUrl = url;
  const popup = document.getElementById('notionProfilePopup');
  popup.classList.add('show');
  document.querySelector('.notion-profile-popup-content').classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('notionProfilePopup');
  popup.classList.remove('show');
  document.querySelector('.notion-profile-popup-content').classList.remove('show');
}

function redirect() {
  window.open(redirectUrl, '_blank');
  closePopup();
}
// ----------------------- //
// Function to display console text effect
// consoleText(['My Skills.', 'Tools I Know.', 'Skills I Am Learning.', 'Tools I Am Learning.'], 'text', ['tomato', 'rebeccapurple', 'lightblue', 'orange']);

// function consoleText(words, id, colors) {
//     if (colors === undefined) colors = ['#fff'];
//     var visible = true;
//     var con = document.getElementById('console');
//     var letterCount = 1;
//     var x = 1;
//     var waiting = false;
//     var target = document.getElementById(id);
//     target.setAttribute('style', 'color:' + colors[0]);

//     window.setInterval(function() {
//         if (letterCount === 0 && waiting === false) {
//             waiting = true;
//             target.innerHTML = words[0].substring(0, letterCount);
//             window.setTimeout(function() {
//                 var usedColor = colors.shift();
//                 colors.push(usedColor);
//                 var usedWord = words.shift();
//                 words.push(usedWord);
//                 x = 1;
//                 target.setAttribute('style', 'color:' + colors[0]);
//                 letterCount += x;
//                 waiting = false;
//             }, 1000);
//         } else if (letterCount === words[0].length + 1 && waiting === false) {
//             waiting = true;
//             window.setTimeout(function() {
//                 x = -1;
//                 letterCount += x;
//                 waiting = false;
//             }, 1000);
//         } else if (waiting === false) {
//             target.innerHTML = words[0].substring(0, letterCount);
//             letterCount += x;
//         }
//     }, 120);

//     window.setInterval(function() {
//         if (visible === true) {
//             con.className = 'console-underscore hidden';
//             visible = false;
//         } else {
//             con.className = 'console-underscore';
//             visible = true;
//         }
//     }, 400);
// }

// temp pop up

function tempclosePopup() {
    document.querySelector('.temp-name').style.display = 'none';
  }
  
  // Show popup on page load
  window.onload = function () {
    document.querySelector('.temp-name').style.display = 'flex';
  };