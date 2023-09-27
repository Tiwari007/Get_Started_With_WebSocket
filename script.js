// Establish WebSocket connection
const socket = new WebSocket('your_websocket_url');

// image elements
const videoImage = document.getElementById('videoImage');

// WebSocket open event
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// WebSocket message event
socket.addEventListener('message', (event) => {
    // Assuming the data received is a Blob
    const blobData = event.data;

    // Create a URL for the Blob data
    const blobUrl = URL.createObjectURL(blobData);

    // Update the image source to display the video
    videoImage.src = blobUrl;
    videoImage.style.display = 'block';
});

// WebSocket close event
socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
});

// Handle WebSocket errors
socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});
