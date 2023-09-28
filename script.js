// So according to the problem we know after a successfull connection
// we have a blob data(for video stream)
// and then we have to use the blob data and show in img tag or canvas.


// Let's create a websocket connection
const socket = new WebSocket('ws://122.176.20.146:8590');

// store a image element into variable
const videoImage = document.getElementById('videoImage');

// WebSocket open event
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// WebSocket message event
socket.addEventListener('message', (event) => {

    // Here we are Assume that the data received is a Blob
    const blobData = event.data;

    // Create a URL for the Blob data
    const blobUrl = URL.createObjectURL(blobData);

    // Update the image source to display the video
    videoImage.src = blobUrl;
    videoImage.style.display = 'block';
});


// websocket connection closed
socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
});

// Let's Handle the error if Websocket failded to run
socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});
