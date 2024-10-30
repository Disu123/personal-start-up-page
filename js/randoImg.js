function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function displayRandomImage() {
    // Specify the total number of images you have (adjust based on your images)
    const totalImages = 40; // For example, if you have gifs from 1.gif to 10.gif
    const randomImageNumber = getRandomInt(1, totalImages + 1); // Generate a random number between 1 and totalImages

    // Create the image element and set its source
    const imgElement = document.createElement('img');
    imgElement.src = `imgs/${randomImageNumber}.jpg`; // Adjust the extension if needed
    imgElement.style.width = '200px'; // Set width to 200 pixels
    imgElement.style.height = 'auto'; // Maintain aspect ratio
    // Append the image to the container
    const imageContainer = document.getElementById('image');
    imageContainer.innerHTML = ''; // Clear previous images
    imageContainer.appendChild(imgElement);
}

// Call the function to display a random image when the page loads
displayRandomImage();
