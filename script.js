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
    for (let i = 0; i < 26000; i++) {       
        const div = document.createElement('div');
        div.className = 'etchDiv';
        div.style.backgroundColor = 'white'; 
        div.style.width = size + 'px';
        div.style.height = size + 'px'; 
        console.log(div.style.width); 
        container.appendChild(div);   
        div.addEventListener('mouseover', function(){div.style.backgroundColor = 'black';});   
    }     
    
}

const addRainBowDivs = (size) => {
    for (let i = 0; i < 26000; i++) {
        const div = document.createElement('div');
        div.className = 'etchDiv';
        div.style.backgroundColor = 'white'; 
        div.style.width = size + 'px';
        div.style.height = size + 'px';  
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

console.log(sixteen.checked);

x.addEventListener('mousedown', function(){ 
    container.innerHTML = '';                    
});

x.addEventListener('mouseup', function(){
    if(sixteen.checked){
        addRainBowDivs(21.25);
    } else if (sixtyFour.checked){
        addRainBowDivs(5.32);
    } else if(oneTwenty.checked){
        addRainBowDivs(2.83);
    }
});

y.addEventListener('mousedown', function(){    
    container.innerHTML = '';
});

y.addEventListener('mouseup', () => {
    if(sixteen.checked){
        addDivs(21.25);
    } else if (sixtyFour.checked){
        addDivs(5.32);
    } else if(oneTwenty.checked){
        addDivs(2.83);
    }
});

