document.addEventListener("DOMContentLoaded", () => {
    let front = document.getElementById('front');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let upper = document.getElementById('upper');
    let bottom = document.getElementById('bottom');
    let back = document.getElementById('back');

    
    front.style.transform = `translateZ(calc(15vmin))`;
    left.style.transform = `rotateY(-90deg) translateZ(calc(15vmin))`;
    right.style.transform = `rotateY(90deg) translateZ(calc(15vmin))`;
    upper.style.transform = `rotateX(90deg) translateZ(calc(15vmin))`;
    bottom.style.transform = `rotateX(-90deg) translateZ(calc(15vmin))`;
    back.style.transform = `rotateY(180deg) translateZ(calc(15vmin))`;
});
