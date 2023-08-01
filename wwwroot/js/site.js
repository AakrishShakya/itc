
// var wishlist =[ {"imgurl":"kjkl", "name":"aluminium", 'link':"fgt"}]













// Get the nav links
var homeLink = document.getElementById('home-link');
var aboutLink = document.getElementById('about-link');
var contactLink = document.getElementById('contact-link');

// Add the "active" class to the Home link
homeLink.classList.add('active');



  // Initialize the slider and set options
  var mySlider = new bootstrap.Carousel(document.getElementById('mySlider'), {
    interval: 3000, // Set the interval for automatic sliding (in milliseconds)
    pause: 'hover', // Pause the slider on mouse hover
    wrap: true // Enable continuous sliding
  });


  document.addEventListener("DOMContentLoaded", function() {
    var pagination = document.getElementById("pagination");
    var content = document.querySelector(".card");

    pagination.addEventListener("click", handlePaginationClick);

    function handlePaginationClick(event) {
      event.preventDefault();
      var target = event.target;
      if (target.tagName === "A") {
        var activeItem = document.querySelector("#pagination .active");
        activeItem.classList.remove("active");
        target.parentNode.classList.add("active");

        var page = target.getAttribute("data-page");
        console.log("Clicked page: " + page);

        // Update content based on the clicked page
        if (page === "1") {
          content.innerHTML = "Content for Page 1";
        } else if (page === "2") {
          content.innerHTML = "Content for Page 2";
        } else if (page === "3") {
          content.innerHTML = "Content for Page 3";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }); 
  alert("asdasd")


  
  const tempArray = [];
  // Function to handle the card click event
  function handleCardClick(card) {
    const name = card.querySelector('.card4').textContent;
    const imgSrc = card.querySelector('.card2').getAttribute('data-imageurl');
    // Add the card data (name and image URL) to the tempArray
    tempArray.push({ name, imgSrc });
    // Insert the saved data into the dropdown link
    insertDataIntoDropdownLink();
  }
  // Function to insert the saved data into the dropdown link
  function insertDataIntoDropdownLink() {
    const dropdownLink = document.getElementById('dropdownLink');
    dropdownLink.innerHTML = ''; // Clear the existing data
    // Loop through the tempArray and create dropdown items to display the data
    tempArray.forEach((cardData, index) => {
      const dropdownItem = document.createElement('a');
      dropdownItem.href = '#'; // Set the href attribute to "#" to prevent page scroll
      dropdownItem.classList.add('dropdown-item'); // Add 'dropdown-item' class to apply hover effect
  
  const imgElement = document.createElement('img');
  imgElement.src = cardData.imgSrc;
  imgElement.alt = cardData.name;
  imgElement.classList.add('img-sizze'); // Add the 'img-sizze' class
  dropdownItem.appendChild(imgElement);
  
      const nameElement = document.createElement('span');
      nameElement.textContent = cardData.name;
      dropdownItem.appendChild(nameElement);
      dropdownLink.appendChild(dropdownItem);
      // Add a click event listener to each dropdown item to handle removal on click
      dropdownItem.addEventListener('click', () => {
        tempArray.splice(index, 1); // Remove the clicked item from tempArray
        insertDataIntoDropdownLink(); // Re-insert the updated data into the dropdown link
      });
    });
  }
  

