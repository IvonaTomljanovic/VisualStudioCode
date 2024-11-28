let currentLight=0; 
const lights=[
    document.getElementById('red'),
    document.getElementById('yellow'),
    document.getElementById('green')
];
function changeLights() {
    lights.forEach(light => {
        light.style.backgroundColor='grey';
    });

    if (currentLight===0) {
        lights[0].style.backgroundColor='red'; 
        currentLight=1;
    } else if (currentLight===1) {
        lights[1].style.backgroundColor='yellow'; 
        currentLight=2; 
    } else if (currentLight===2) {
        lights[2].style.backgroundColor='green'; 
        currentLight = 0;
    }
}
const lightInterval=setInterval(changeLights, 3000);
let isActive=true;

function resetCycle() {
    if (!isActive) return;
    clearInterval(lightInterval);
    setInterval(changeLights, 3000);
}
changeLights();