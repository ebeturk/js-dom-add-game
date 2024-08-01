const methods = [
  {
    hiddenName: 'i____H__L',
    actualName: 'innerHTML',
    description: 'This method sets or gets the HTML content inside an element. It allows you to change the entire HTML content of the element easily.',
    instructions: 'Add an image to the game area by modifying the HTML content of the game area. Use this image URL: ./images/meme-1.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-1.jpeg"]') !== null
  },
  {
    hiddenName: 'i____A______H___',
    actualName: 'insertAdjacentHTML',
    description: 'This method takes a string of HTML and adds it to the DOM at a specified position. It helps in adding HTML content exactly where you want it to appear.',
    instructions: 'Add an image to the game area by inserting HTML content at the end of the game area. Use this image URL: ./images/meme-2.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-2.jpeg"]') !== null
  },
  {
    hiddenName: 'p_____d',
    actualName: 'prepend',
    description: 'This method inserts new content before the first child of an element. It is useful when you want to add new content at the beginning of an element.',
    instructions: 'Add an image to the game area by inserting it as the first child of the game area. Use this image URL: ./images/meme-3.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-3.jpeg"]') !== null
  },
  {
    hiddenName: 'a___d',
    actualName: 'append',
    description: 'This method inserts new content after the last child of an element. It is used to add new content at the end of an element.',
    instructions: 'Add an image to the game area by appending it as the last child of the game area using a method that allows multiple arguments. Use this image URL: ./images/meme-4.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-4.jpeg"]') !== null
  },
  {
    hiddenName: 'a_____C___d',
    actualName: 'appendChild',
    description: 'This method adds a node to the end of the list of children of a specified parent node. It helps in adding a new element as the last child of the parent element.',
    instructions: 'Add an image to the game area by creating an element and appending it as the last child of the game area. Use this image URL: ./images/meme-5.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-5.jpeg"]') !== null
  },
  {
    hiddenName: 'i_____A_______E_______',
    actualName: 'insertAdjacentElement',
    description: 'This method inserts a given element node at a specified position relative to the element it is invoked upon. It is useful for placing new elements precisely.',
    instructions: 'Add an image to the game area by inserting an element at the end of the game area using a method that takes an element as an argument. Use this image URL: ./images/meme-6.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-6.jpeg"]') !== null
  },
  {
    hiddenName: 'r______C_____',
    actualName: 'replaceChild',
    description: 'This method replaces a child node within the given (parent) node. It is used when you want to replace an existing child element with a new one.',
    instructions: 'Replace the first child of the game area with an image. Use this image URL: ./images/meme-7.jpeg',
    verify: () => document.querySelector('#gameArea img[src="./images/meme-7.jpeg"]') !== null
  }
];


const results = {};

methods.forEach(method => {
  results[method.hiddenName] = false; // Initialize all to false
});

function initializeMethodDescriptions() {
  const methodDescriptions = document.getElementById('methodDescriptions');
  methods.forEach(method => {
    const methodSection = document.createElement('div');
    methodSection.className = 'method-section';
    methodSection.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${method.hiddenName}</h5>
          <p class="card-text">${method.description}</p>
          <p><strong>Instructions:</strong> ${method.instructions}</p>
          <textarea id="${method.hiddenName}Code" class="form-control mb-2" placeholder="Write your JavaScript code here..."></textarea>
          <button class="btn btn-warning" onclick="runCode('${method.hiddenName}')">Run Code</button>
        </div>
      </div>
    `;
    methodDescriptions.appendChild(methodSection);
  });
}

function runCode(hiddenName) {
  const code = document.getElementById(`${hiddenName}Code`).value;
  const actualName = methods.find(method => method.hiddenName === hiddenName).actualName;
  try {
    eval(code);
    results[hiddenName] = methods.find(method => method.hiddenName === hiddenName).verify();
    alert(`${actualName} code executed successfully!`);
  } catch (error) {
    console.error(`Error executing ${actualName} code:`, error);
    alert(`Error executing ${actualName} code: ${error.message}`);
  }
}

function checkResults() {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = ''; // Clear previous ones
  methods.forEach(method => {
    const resultItem = document.createElement('li');
    if (results[method.hiddenName]) {
      resultItem.innerHTML = `<strong>${method.hiddenName}:</strong> Success! <img src="./images/success.jpg" alt="Success Meme" class="meme-img">`;
    } else {
      resultItem.innerHTML = `<strong>${method.hiddenName}:</strong> Try again! <img src="./images/fail.png" alt="Failure Meme" class="meme-img">`;
    }
    resultsList.appendChild(resultItem);
  });
}

// Initialize descriptions on page load
document.addEventListener('DOMContentLoaded', initializeMethodDescriptions);
