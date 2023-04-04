const x = document.getElementsByClassName("svgCarEduHover");
const arr = ['school10', 'school12', 'clg'];
const seek = ['4', '8', '12'];

function svghover() {
    x[0].id = "svgCarEduHover";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = `educard ${seek[i]}s ease-out forwards`;
    }
}
function svghoverrem() {
    x[0].id = "";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = "";
    }
}