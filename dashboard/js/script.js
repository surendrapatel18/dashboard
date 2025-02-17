const leftSide = document.getElementById("left-side");

function closeMenu() {
  leftSide.classList.toggle("hidden");
}

// Arrow click open New Tab

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".close");
  const rightEnd = document.querySelector(".right-end");
  const arrow = document.querySelector(".arrow");

  if (closeButton && rightEnd) {
    closeButton.addEventListener("click", function () {
      rightEnd.classList.toggle("d-none");
      rightEnd.classList.toggle("d-block");
    });
  }

  if (arrow) {
    arrow.addEventListener("click", function () {
      window.open("https://your-dashboard-here.com", "_blank");
    });
  }
});

document.querySelectorAll(".toggle-menu").forEach((button) => {
  button.addEventListener("click", function () {
    let img = this.querySelector(".expand-icon");
    img.classList.toggle("rotate");
  });
});

// Dropdown menu

document
  .getElementById("toggleDropdown")
  .addEventListener("click", function () {
    var dropdown = document.getElementById("dropdownProfiles");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  });

// Toggle List Menu

const toggleMenu = document.getElementById("toggleMenu");
const menuLinks = document.querySelector(".task-links");
const linkItems = document.querySelectorAll(".link-item");

toggleMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("show");
});

linkItems.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.classList.remove("show");
  });
});

// Edit Tasks Boards

const taskTitle = document.getElementById("taskTitle");
const taskInput = document.getElementById("taskInput");
const editIcon = document.getElementById("editIcon");

editIcon.addEventListener("click", function () {
  taskInput.value = taskTitle.innerText;
  taskTitle.style.display = "none";
  taskInput.style.display = "block";
  taskInput.focus();
});

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    saveTitle();
  }
});

taskInput.addEventListener("blur", function () {
  saveTitle();
});

function saveTitle() {
  if (taskInput.value.trim() !== "") {
    taskTitle.innerText = taskInput.value;
  }
  taskTitle.style.display = "block";
  taskInput.style.display = "none";
}

// Voice Search & Result

const voiceSearch = document.getElementById("voiceSearch");
const voiceResult = document.getElementById("voiceResult");

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  voiceSearch.addEventListener("click", function (event) {
    event.preventDefault();
    voiceResult.innerText = "Listening...";
    recognition.start();
  });

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    voiceResult.innerText = `You said: "${transcript}"`;
  };

  recognition.onerror = function (event) {
    voiceResult.innerText = "Try again.";
  };

  recognition.onend = function () {
    console.log("Voice recognition stopped.");
  };
} else {
  voiceResult.innerText = "Your browser does not support voice recognition.";
}

// Opens file explorer to choose a folder

const openFolder = document.getElementById("openFolder");
const folderInput = document.getElementById("folderInput");

openFolder.addEventListener("click", function (event) {
  event.preventDefault();
  folderInput.click();
});

folderInput.addEventListener("change", function (event) {
  const files = event.target.files;
  alert(`You selected: ${files.length} files`);
});

// Notification POP-UP

document
  .getElementById("notificationIcon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let popup = document.getElementById("notificationPopup");

    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1000);
    } else {
      popup.style.display = "none";
    }
  });

// Upload Documenets

document.getElementById("uploadTrigger").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    let fileName = event.target.files[0]
      ? event.target.files[0].name
      : "No file selected";
    alert("Selected File: " + fileName);
  });

// Edit ColorPicker

document.getElementById("editTrigger").addEventListener("click", function () {
  document.getElementById("colorPicker").click();
});

// Loading..

document
  .getElementById("loadingTrigger")
  .addEventListener("click", function () {
    let overlay = document.getElementById("loadingOverlay");
    overlay.style.display = "flex";
    overlay.style.zIndex = "1000";

    setTimeout(() => {
      overlay.style.display = "none";
    }, 3000);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const slideMobile = document.getElementById("slide-mobile");
    const dashboardHeading = document.getElementById("dashboard-heading");
    const dashboardMenu = document.getElementById("dashboard-menu");
    const projectsHeading = document.getElementById("projects-heading");
    const projectsMenu = document.getElementById("projects-menu");

  
    menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      slideMobile.classList.toggle("d-none");
    });
  }); 

//   Mobile Voice-Icon

const voiceSearch2 = document.getElementById("voiceSearch2");
const voiceResult2 = document.getElementById("voiceResult2");

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  voiceSearch2.addEventListener("click", function (event) {
    event.preventDefault();
    voiceResult2.innerText = "Listening...";
    recognition.start();
  });

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    voiceResult2.innerText = `You said: "${transcript}"`;
  };

  recognition.onerror = function (event) {
    voiceResult2.innerText = "Try again.";
  };

  recognition.onend = function () {
    console.log("Voice recognition stopped.");
  };
} else {
  voiceResult2.innerText = "Your browser does not support voice recognition.";
}

// Dasktop Dropdown 

document.addEventListener('DOMContentLoaded', function () {
  function setupCollapsibleIconRotation(toggleId, iconClass) {
    const toggleElement = document.getElementById(toggleId);
    if (!toggleElement) return;

    const iconElement = toggleElement.querySelector(iconClass);
    if (!iconElement) return;

    toggleElement.addEventListener('click', function () {
      const isExpanded = toggleElement.getAttribute('aria-expanded') === 'true';
      iconElement.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  setupCollapsibleIconRotation('dashboard-toggle', '.expand-icon');
  setupCollapsibleIconRotation('projects-toggle', '.expand-icon');
});