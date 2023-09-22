function startAnimation() {
    const box = document.getElementById('animateBox');
    
    // Toggle the transformation to create animation effect
    if (box.style.transform === "translateX(100px)") {
        box.style.transform = "translateX(0)";
    } else {
        box.style.transform = "translateX(100px)";
    }
}
