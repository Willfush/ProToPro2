// SCROLL ANIMATION 

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry) // RISOLVERE PROBLEMA DI LAG TROPPE RICHIESTE
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=> observer.observe(el));






const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.navBar-hidden');
hiddenElements1.forEach((el)=> observer1.observe(el));

// BUTTON ARROW TRANSISITION 

const Preventivo = document.getElementById('Preventivo')

Preventivo.addEventListener('mouseover', () =>{
    Preventivo.classList.add('display-none')
});

Preventivo.addEventListener('mouseout', () =>{
    Preventivo.classList.remove('display-none')
});



let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    console.log("Prev: " + prevScrollPos, "Current: " + currentScrollPos);

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('navBar-scroll');
        console.log("Mostro la navbar");
    } else {
        navbar.classList.add('navBar-scroll');
        console.log("Nascondo la navbar");
    }
    prevScrollPos = currentScrollPos;
});
