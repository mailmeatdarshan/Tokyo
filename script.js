var t1 = gsap.timeline()

t1.from("#nav h3",{
    y:-50,
    opacity :0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

t1.from('#main h1',{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

t1.from('#imgcon img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

t1.from('#footer h3', {
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

t1.call(() => {
    setTimeout(triggerCelebration, 1000);
});


function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    const colors = ['balloon-red', 'balloon-blue', 'balloon-yellow', 'balloon-purple', 'balloon-green', 'balloon-orange'];
    balloon.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('balloonContainer').appendChild(balloon);
    
    gsap.set(balloon, { opacity: 1, y: window.innerHeight + 100 });
    gsap.to(balloon, {
        y: -200,
        duration: 8 + Math.random() * 4,
        ease: "none",
        onComplete: () => balloon.remove()
    });
    
    gsap.to(balloon, {
        x: "+=50",
        duration: 3 + Math.random() * 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
}

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#00b894'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        
        confettiContainer.appendChild(confetti);
        
        gsap.set(confetti, { opacity: 1, y: -50, rotation: Math.random() * 360 });
        gsap.to(confetti, {
            y: window.innerHeight + 100,
            rotation: Math.random() * 720 + 360,
            duration: 3 + Math.random() * 2,
            ease: "none",
            onComplete: () => confetti.remove()
        });
        
        gsap.to(confetti, {
            x: "+=100",
            duration: 2 + Math.random(),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }
}

// function createSparkles() {
//     for (let i = 0; i < 60; i++) {
//         setTimeout(() => {
//             const sparkle = document.createElement('div');
//             sparkle.className = 'sparkle';
//             sparkle.style.left = Math.random() * 100 + '%';
//             sparkle.style.top = Math.random() * 100 + '%';
//             document.body.appendChild(sparkle);
            
//             gsap.fromTo(sparkle.querySelector('::before') || sparkle, 
//                 { opacity: 0, scale: 0 },
//                 { 
//                     opacity: 1, 
//                     scale: 1, 
//                     duration: 0.6,
//                     ease: "back.out(1.7)",
//                     onComplete: () => {
//                         gsap.to(sparkle, {
//                             opacity: 0,
//                             duration: 0.6,
//                             onComplete: () => sparkle.remove()
//                         });
//                     }
//                 }
//             );
//         }, i * 100);
//     }
// }

function triggerCelebration() {
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createBalloon(), i * 200);
    }
    
    createConfetti();
    
    createSparkles();
    
    const btn = document.querySelector('.celebrate-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
}



document.querySelectorAll('#main h1').forEach(title => {
    title.addEventListener('mouseenter', () => {
        gsap.to(title, {
            scale: 1.05,
            // color: "#ff6b9d",
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });
    
    title.addEventListener('mouseleave', () => {
        gsap.to(title, {
            scale: 1,
            // color: "#FFFFFF",
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });
});

document.querySelectorAll('#nav h3').forEach(title => {
    title.addEventListener('mouseenter', () => {
        gsap.to(title, {
            scale: 1.15,
            color: "#ff6b9d",
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });
    
    title.addEventListener('mouseleave', () => {
        gsap.to(title, {
            scale: 1,
            color: "#FFFFFF",
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });
});


