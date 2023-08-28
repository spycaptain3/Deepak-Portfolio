const images =[
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/07/15/25/sunset-3067567_640.jpg",
    "https://cdn.pixabay.com/photo/2017/04/04/23/49/sunset-2203473_1280.jpg"
]

const n= images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth;



for(let i=0;i<n;i++)
{
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);

    const dotDiv = document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click',(event)=>{
        const index = [...carouselNav.children].indexOf(event.target)
        // curPosition = index;
        showImg(index);
        
    })
}

let curPosition = 0;
showImg(0);
leftButton.addEventListener('click', ()=>{
    if(curPosition > 0){
        showImg(curPosition - 1)
        }else{
            showImg(n-1)
        }
        // showImg(curPosition)
    
})

rightButton.addEventListener('click', ()=>{
    if(curPosition < n-1){
       showImg(curPosition +1)
        // showImg()
    } else{
       showImg(0)
    }
   
})

function showImg(position) {

    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active');

    const transformxDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${transformxDistance}vw)`;
}