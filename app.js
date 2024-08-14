var img = document.getElementById("img")




function bulbon() {
    document.getElementById('img').src = 'image/bulb_on-removebg-preview.png'; // Update this path as needed
    document.getElementById('on').disabled = true;
    document.getElementById('off').disabled = false;
}

function bulboff() {
    document.getElementById('img').src = 'image/bulb_off-removebg-preview.png'; // Update this path as needed
    document.getElementById('on').disabled = false;
    document.getElementById('off').disabled = true;
}