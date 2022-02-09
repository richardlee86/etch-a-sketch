const colorPicker = document.querySelector('#colorPicker');
const container = document.querySelector('.container'); 
const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    location.reload(true);     
})
 
//create a random RGB color
const rainbowRGB = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb; 
} 



//create divs and append them to container div
const addDivs = (size) => {
    for (let i = 0; i < 1600; i++) {
        const div = document.createElement('div');
        div.className = 'etchDiv';
        div.style.backgroundColor = 'white'; 
        div.style.width = size;
        div.style.height = size;  
        container.appendChild(div);   
        div.addEventListener('mouseover', function(){div.style.backgroundColor = 'black';});   
    }     
    
}

const addRainBowDivs = () => {
    for (let i = 0; i < 1600; i++) {
        const div = document.createElement('div');
        div.className = 'etchDiv';
        div.style.backgroundColor = 'white'; 
        div.style.width = size;
        div.style.height = size;  
        container.appendChild(div);   
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = rainbowRGB();
        });   
    }     
}



let x = document.querySelector('#rainbow'); 
let y = document.querySelector('.standard');
let sixteen = document.querySelector('#sixteen');
let sixtyFour = document.querySelector('#sixtyFour');
let oneTwenty = document.querySelector('#oneTwenty');

x.addEventListener('mousedown', function(){ 
        location.reload(true);                 
});

x.addEventListener('mouseup', function(){addRainBowDivs()});

y.addEventListener('mousedown', function(){    
    location.reload(true);
});

y.addEventListener('mouseup', () => addDivs());

