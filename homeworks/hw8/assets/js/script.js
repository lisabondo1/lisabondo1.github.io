
document.getElementById("toggle-button").onclick = toggleSongs;

function toggleSongs() {
    let songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.remove("hidden");
}