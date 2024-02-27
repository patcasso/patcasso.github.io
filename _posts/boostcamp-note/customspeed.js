let video = document.querySelector('video');
let newDiv = document.createElement("div");
let customSpeed = 1.15 // 여길 바꾸면 custom speed 조절 가능

newDiv.id = "dynamicDiv";
newDiv.style.padding = "6px";
newDiv.style.zIndex = "9999";
newDiv.style.right = "0";
newDiv.style.position = "fixed";
newDiv.style.color = "white";
newDiv.innerHTML = `${customSpeed}배속`;
newDiv.style.cursor = "pointer"; // pointer cursor on hover
newDiv.onclick = togglePlaybackSpeed;

// Append the div to the body of the document
document.body.insertBefore(newDiv, document.body.firstChild);

function togglePlaybackSpeed() {
    if (video.playbackRate === customSpeed) {
        video.playbackRate = 1.0;
    } else {
        video.playbackRate = customSpeed;
    }
}

// Update color based on initial playbackRate
updateColor();

// Listen for changes in playbackRate and update color accordingly
video.addEventListener('ratechange', updateColor);

function updateColor() {
    if (video.playbackRate === customSpeed) {
        newDiv.style.backgroundColor = "#4a3dff";
    } else {
        newDiv.style.backgroundColor = "gray";
    }
}