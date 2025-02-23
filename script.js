console.log("Connected")
const button = document.getElementById('button');
window.addEventListener('scroll', () => {
    
    // Hide the button after scrolling 100 pixels
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition < 100) {
        button.style.display = 'none'; // Hide the button
    } else {
        button.style.display = 'block'; // Show the button
    }
});


button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


button.addEventListener('mouseover',()=>{
    button.style.border = "2px solid black"
})

button.addEventListener('mouseout',()=>{
    button.style.border = "none"
})



let buttons = document.querySelectorAll("#navbar-links .click")

buttons.forEach(ele => {
    ele.addEventListener("click",(e) => {
        e.preventDefault(); 
        const targetid = ele.getAttribute('target');
        const section = document.getElementById(targetid)
        if (section){
            section.scrollIntoView({
            behavior : 'smooth'
        })}
    })
});

document.querySelector(".home-button").addEventListener("click",(e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})