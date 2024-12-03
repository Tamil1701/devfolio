window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.transition = "opacity 0.5s";
  preloader.style.opacity = 0;

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Matches the opacity transition
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



function tempclosePopup() {
    document.querySelector('.temp-name').style.display = 'none';
  }
  
  // Show popup on page load
  window.onload = function () {
    document.querySelector('.temp-name').style.display = 'flex';
  };



  function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
  }




  const projects = [
    { 
      title: "AR-Model viewer", 
      description: "It is a simple project the enables the user to visualize 3D models in real world using AR", 
      image: "images/project/ar-proj.png", 
      tech: ["HTML", "CSS", "JavaScript","AR"], 
      link: "https://gce-web-ar.netlify.app/"
    },
    { 
      title: "Spam Detection", 
      description: "Simple spam detection system developed to detect spam text by apploading text document or can be used as chrome extension", 
      image: "https://via.placeholder.com/400x300", 
      tech: ["Flask","AI"], 
      link: "#"
    }
    
  ];

  // List of random colors for badges
  const badgeColors = [
    "bg-red-500 text-red-100",
    "bg-green-500 text-green-100",
    "bg-blue-500 text-blue-100",
    "bg-yellow-500 text-yellow-100",
    "bg-purple-500 text-purple-100",
    "bg-pink-500 text-pink-100",
    "bg-gray-500 text-gray-100"
  ];

  // Function to create a card
  function createCard({ title, description, image, tech, link }) {
    return `
      <div class="card-m card transform hover:scale-105 duration-300  relative flex w-full flex-col rounded-xl  shadow-md hover:shadow-lg transition">
        <div class="relative h-40 overflow-hidden bg-gray-200 rounded-t-xl">
          <img src="${image}" alt="${title}" class="w-full h-full object-cover rounded-t-xl">
        </div>
        <div class="p-6">
          <div class="flex gap-2 mb-2">
            ${tech.map(tag => {
              const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)];
              return `<span class="px-2 py-1 text-xs rounded ${randomColor}">${tag}</span>`;
            }).join('')}
          </div>
          <h5 class="mb-2 text-2xl text-blue-600 font-bold">${title}</h5>
          <p class="text-base text-gray-600">${description}</p>
        </div>
        <div class="p-6 pt-0">
          <a href="${link}" target="_blank" class="block text-center py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Project
          </a>
        </div>
      </div>
    `;
  }

  // Populate grid
  const projectGrid = document.getElementById('projectGrid');
  const toggleBtn = document.getElementById('toggleBtn');
  
  // Number of projects to show initially
  const initialProjects = 3;
  let isExpanded = false;

  function renderProjects() {
    projectGrid.innerHTML = projects.slice(0, isExpanded ? projects.length : initialProjects)
      .map(project => createCard(project))
      .join('');
    
    // Update button text
    toggleBtn.textContent = isExpanded ? "Show Less" : "Show More";
  }

  // Toggle Button Click Event
  toggleBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    renderProjects();
  });

  // Initial render
  renderProjects();

  

  const experiences = [
    {
      title: "Vegrov Learn",
      duration: "February 2024 - May 2024 (4 months)",
      year: "2024",
      role: "Platform Manager",
      description: "Managed and grew an edu-tech internship platform, onboarding 20+ students and evolving it into an internal training tool for strategic alignment.",
      link: "#",
    },
    {
      title: "Yuva Industries",
      duration: "August 2023 - October 2023 (3 months)",
      year: "2023",
      role: "Web Developer",
      description: "Developed and deployed dynamic web applications, ensuring quality and functionality for client satisfaction.",
      link: "#",
    },
    {
      title: "Vegro Ventures Pvt. Ltd.",
      duration: "May 2023 - August 2023 (4 months)",
      year: "2023",
      role: "Software Developer and Consultant",
      description: "Created scalable web solutions and managed digital marketing strategies to drive business growth.",
      link: "#",
    }
    
  ];
  
  const generateExperienceCard = ({ title, duration, year, role, description, link }) => `
    <article class="w-full card-m p-4 rounded-md transform hover:scale-105 duration-300 relative" style="background: rgba(255, 255, 255, 0.1);">
      <!-- External Link Icon -->
      <a href="${link}" target="_blank" rel="noopener noreferrer" class="absolute top-4 right-4 text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L6.75 17.25M6.75 6.75h10.5v10.5" />
        </svg>
      </a>
  
      <!-- Header with Badge -->
      <div class="flex items-center">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-12 h-12 text-gray-300 bg-gray-600 rounded-full p-2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 5.5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 7.5Zm1 9h-2v-4h2Z" fill="currentColor" />
        </svg>
        <div class="ml-4">
          <h3 class="text-xl font-semibold text-gray-300">${title}</h3>
          <p class="text-sm text-gray-300">${duration}</p>
        </div>
        <span class="ml-auto px-3 py-1 text-xs font-medium text-gray-900 bg-yellow-300 rounded-full">${year}</span>
      </div>
  
      <!-- Content -->
      <p class="text-gray-200 mt-2">
        <span class="font-bold text-blue-300">${role}:</span> ${description}
      </p>
    </article>
  `;
  
  const renderExperiences = (experienceList) => {
    const container = document.querySelector('.experience');
    container.innerHTML = experienceList.map(generateExperienceCard).join('');
  };
  
  // Call the function to render experiences
  document.addEventListener('DOMContentLoaded', () => {
    renderExperiences(experiences);
  });
  