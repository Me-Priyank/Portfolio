// Initialize Locomotive Scroll and ScrollTrigger
function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

// Function to disable scrolling
function disableScroll() {
    // Disable scrolling by capturing scroll, touch, and key events
    window.addEventListener('scroll', preventScroll);
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys);
}

// Function to enable scrolling
function enableScroll() {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    window.removeEventListener('keydown', preventScrollKeys);
}

// Prevent scrolling
function preventScroll(e) {
    e.preventDefault();
}

// Prevent scrolling with arrow keys
function preventScrollKeys(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Space') {
        e.preventDefault();
    }
}

// Loader function to handle animations and visibility
function loader() {
    disableScroll(); // Disable scrolling while the loader is active

    var tl = gsap.timeline({
        onComplete: function() {
            // After loader animation is complete
            document.querySelector("#loader").style.display = "none"; // Hide the loader
            enableScroll(); // Enable scrolling
            locoScroll(); // Initialize Locomotive Scroll
        }
    });

    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    .to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1
    })
    .to("#loader", {
        opacity: 0,
        duration: 1, // Fade out the loader over 1 second
        ease: "power2.out"
    });
}

// Ensure the page is fully loaded before starting the animation and scroll setup
window.addEventListener('load', () => {
    loader(); // Start the loader animation
});





  
  
  




function HomePageAnimation(){
    gsap.set(".slidesm",{
        scale : 5
    })
    
    
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".home",
            start: "top top",
            end : "bottom bottom",
            scrub : 3
        }
    })
    
    tl.to(".vdodiv",{
        '--clip':"0%",
        ease: Power2
    },'a')
    
    tl.to(".slidesm",{
        scale:1,
        ease: Power2
    },'a')
    
    tl.to(".lft",{
        xPercent: -10,
        stagger: .03,
        ease: Power4
    },'b')
    
    tl.to(".rgt",{
        xPercent: 10,
        stagger : .03,
        ease: Power4
    },'b')
}

function swiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true, // Enable infinite loop
        speed: 20000, // Set a slower speed for smooth movement
        autoplay: {
          delay: 0, // No initial delay
          disableOnInteraction: false, // Continue autoplay even when the user interacts with the slider
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}
swiper();

function RealPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end: "bottom bottom",
            scrub : 1
        },
        xPercent:-200,
        ease:Power4
    });
}

function workAnimation(){
   // Select all elements with the class 'listelem'
document.querySelectorAll('.listelem').forEach((e) => {
    
    // Add mousemove event for the 'pic' element animation
    e.addEventListener("mousemove", (event) => {
        gsap.to(e.querySelector('.pic'), {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, event.clientX),
            ease: Power4,
            duration: 0.5
        });
    });

    // Revert the 'pic' element opacity when the mouse leaves
    e.addEventListener("mouseleave", () => {
        gsap.to(e.querySelector('.pic'), {
            opacity: 0,
            ease: Power4,
            duration: 0.5
        });
    });

    // Add mouseenter event for the background color animation (bottom to top)
    e.addEventListener("mouseenter", () => {
        gsap.to(e.querySelector('.bluelayer'), {
            height: "100%",  // Animate the height from bottom (0%) to top (100%)
            ease: Power4.easeInOut,
            duration: 0.3
        });
    });

    // Revert the background color when the mouse leaves
    e.addEventListener("mouseleave", () => {
        gsap.to(e.querySelector('.bluelayer'), {
            height: "0%",  // Animate the height back from top (100%) to bottom (0%)
            ease: Power4.easeInOut,
            duration: 0.3
        });
    });
});

}

function paraAnimation(){
    var clutter = "";
document.querySelector('.textpara')
.textContent.split("")
.forEach((e)=>{
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector('.textpara').innerHTML = clutter;

gsap.set('.textpara span',{opacity: .1})
gsap.to('.textpara span',{
    scrollTrigger:{
        trigger: '.para',
        start: "top 60%",
        end : "bottom 90%",
        scrub: 1,
    },
    opacity:1,
    stagger: .03,
    ease : Power4
})
}

const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector('.scroll-container'),
    smooth: true
});

var clutter = "";
document.querySelector('.textpara2')
.textContent.split("")
.forEach((e)=>{
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector('.textpara2').innerHTML = clutter;

gsap.set('.textpara2 span',{opacity: .1})
gsap.to('.textpara2 span',{
    scrollTrigger:{
        trigger: '.textpara2',
        start: "top top",
        end : "bottom 10%",
        scrub: 1,
    },
    opacity:1,
    stagger: 1,
    ease : Power4
})

function chatbotAnimation(){
    gsap.to('.chatbot', {
        scale: 1.2, // Adjust the scaling factor as needed
        duration: 1, // Duration of the scaling animation
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.chatbot', // The chatbot section to trigger the animation
          start: 'top 80%', // When the top of the chatbot reaches 80% from the top of the viewport
          end: 'top 20%', // When the top of the chatbot reaches 20% from the top of the viewport
          scrub: true, // Smooth animation with scroll
          toggleActions: 'play none none none' // Trigger the animation on scroll
        }
      });
}

function bodyColorChanger(){
    document.querySelectorAll('.section').forEach((e) => {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: card,
                start: "top 80%", // Start when the top of the card reaches 80% of the viewport height
                toggleActions: "play none none reverse",
                once: true // Only animate once
            },
            duration: 0.5,
            delay: index * 0.1 // Delay each card's animation for a staggered effect
        });
    });
});


HomePageAnimation();
RealPageAnimation();
workAnimation();
paraAnimation();
chatbotAnimation();
bodyColorChanger();




















function sendQuestion(question) {
    appendMessage("user", question);
    
    // Simulate AI response after 1 second
    setTimeout(function () {
        const botResponse = getAIResponse(question);
        appendMessage("bot", botResponse, true);  // Allow HTML content for bot's response
    }, 1000);
}

function appendMessage(sender, message, isHTML = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);

    if (isHTML) {
        messageDiv.innerHTML = message;  // Allow HTML content (e.g., clickable links)
    } else {
        messageDiv.innerText = message;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userMessage) {
    // Convert the user message to lowercase for easier comparisons
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Respond based on simple keyword matching
    if (lowerCaseMessage.includes("your name")) {
        return "I'm an AI chatbot of Priyank's Portfolio, here to assist you.";
    } else if (lowerCaseMessage.includes("time")) {
        return "The current time is " + new Date().toLocaleTimeString();
    } else if (lowerCaseMessage.includes("how are you")) {
        return "I'm a bot, so I don't have feelings, but I'm here to help you!";
    } else if (lowerCaseMessage.includes("how can i contact priyank")) {
        // Include clickable mailto link and phone link
        return 'Hi, you can contact Priyank via email at <a href="mailto:pvonlyone29@gmail.com">pvonlyone29@gmail.com</a> or call him at <a href="tel:+919690355688">+91 9690355688</a>!';
    } else if (lowerCaseMessage.includes("joke")) {
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (lowerCaseMessage.includes("weather")) {
        return "I can't check the weather right now, but you could try a weather app!";
    } else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I didn't understand that, but I'm happy to help!";
    }
}
