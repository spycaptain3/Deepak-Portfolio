const progressBars = document.getElementsByClassName('progressBar');

function loadProgressBar() {
    [...progressBars].forEach((ele) => {
        ele.style.animation = "loading 3s ease-in-out forwards";
    });
}