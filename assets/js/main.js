/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .certificates__img, .contact__input',{interval: 10}); 
//sr.reveal('.skills__data, .work__img, .certificates__img, .contact__input',{interval: 200}); 



document.addEventListener('DOMContentLoaded', function() {
    const changingText = document.querySelector('.changing-text');
    const words = [
        "Electrical Engineering",
        "Front-End Developer",
        "Back-End Developer", 
        "Mobile Developer"
    ];
    
    // Initial state
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentWord = words[wordIndex];
        
        // Update text content (this will include our cursor)
        changingText.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting) {
            // Typing forward
            charIndex++;
            if (charIndex > currentWord.length) {
                // Finished typing word
                isDeleting = true;
                setTimeout(typeWriter, 1500); // Pause at end
                return;
            }
        } else {
            // Deleting backward
            charIndex--;
            if (charIndex < 0) {
                // Finished deleting
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWriter, 500); // Pause between words
                return;
            }
        }
        
        const speed = isDeleting ? 100 : 150;
        setTimeout(typeWriter, speed);
    }
    
    // Start animation
    setTimeout(typeWriter, 1000);
});
function sendMail(){
    let Params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_9erc6tu","template_99wp06e",Params).then(alert("Email Sent!!"))
}