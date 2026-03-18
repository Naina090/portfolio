
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

const section = document.querySelector(".contact");

// set canvas size to section
function resizeCanvas(){
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
}
resizeCanvas();

let stars = [];

// ⭐ CREATE FULL WIDTH STARS
function createStars(){
    stars = [];
    for(let i = 0; i < 1200; i++){
        stars.push({
            x: Math.random() * canvas.width,   // 🔥 full width
            y: Math.random() * canvas.height,  // 🔥 full height
            size: Math.random() * 1.5,
            speedX: (Math.random() - 0.5) * 0.1,
            speedY: (Math.random() - 0.5) * 0.1
        });
    }
}

createStars();

// 🎨 DRAW
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        // movement (slow floating)
        star.x += star.speedX;
        star.y += star.speedY;

        // wrap around edges (IMPORTANT)
        if(star.x < 0) star.x = canvas.width;
        if(star.x > canvas.width) star.x = 0;
        if(star.y < 0) star.y = canvas.height;
        if(star.y > canvas.height) star.y = 0;

        // draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

draw();

// 🔁 resize fix
window.addEventListener("resize", () => {
    resizeCanvas();
    createStars();
});
