const slider = document.getElementById("skinSlider");
const brown = document.getElementById("brownHand");
const dark = document.getElementById("darkHand");

slider.addEventListener("input", () => {
    let val = slider.value; // 0 → 100

    if (val <= 50) {
        brown.style.opacity = val / 50; // fade brown in
        dark.style.opacity = 0;         // dark stays off
    } else {
        brown.style.opacity = 1;                // full brown
        dark.style.opacity = (val - 50) / 50;   // fade dark in
    }
});