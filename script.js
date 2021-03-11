// text animation
let letters = document.querySelector('.letters') ; 
const words = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENTS', 'FOREX', 'ANALYTICS'] ; 
let currentWord = 0 ; 
let idx = 0; 

function write(){
    if(idx < words[currentWord].length){
        letters.textContent += words[currentWord][idx] ; 
        idx++ ; 
    }else{
        idx = 0 ; 
        currentWord++ ; 
        currentWord %= 9 ; 
        letters.textContent = "" ; 
    }
     
    setTimeout(write , 300) ;

}
write() ; 

//Features animation 
let features = document.querySelector('.features') ; 
let num = words.length ; 
let ftArray = [] ; 
let currentfeature = 0 ; 
let sources= ['1X401dhL5fSixdMl5u_Kdr0au6fxeOmMo' , '1meiUcD_qvrhWPrqj_pKcjv4Vt3Bm3hKm' , '12_4fla_QgCCU8AikPnc1Im_obAWv5HJu',
'1np-70KxoTWU4oGhjaQhSiBDz6-FguHXb' ,'1Jyes-1oH6UfdUsKwsPzMr1Hh9dAJyJse' , '1b-O61Ttnj0hF70z5lQy8KdMU8qYUhg8J' , '1ZVreNnHk1c1Zjuk4gM6As5ZnuPGMPzxy',
'1CgOctY31QtoA8Ft05VEJ04ShYUZeOpgt' , '1KRa1ibXBM8EuFUzX6K-iy42ImmzawGPy']

for(let i = 0 ; i < num ; ++i){
    let outer = document.createElement('div') ;
    let mydiv = document.createElement('div') ;
    let footer = document.createElement('strong') ;
    let src = "https://drive.google.com/uc?export=view&id=" + sources[i] ;  
    mydiv.style.backgroundImage = `url(${src})` ; 
    mydiv.setAttribute('class' , 'icon') ; 
    footer.textContent = words[i][0] + words[i].substr(1).toLowerCase() ; 
    footer.setAttribute('class' , 'tag')
    
    outer.setAttribute('class' , 'features-element') ; 
    outer.appendChild(mydiv) ;  
    outer.appendChild(footer) ; 
    

    features.appendChild(outer) ;
    ftArray.push(outer) ;  
}

// feature-list
let featureList = document.querySelector('.features-list') ; 

let index = 0; 
function addfeatures(){
    for(let i = 0; i < 9 ; ++i){
        const mydiv = document.createElement('div') ; 
        let src = "https://drive.google.com/uc?export=view&id=" + sources[i]  ;  
        mydiv.style.backgroundImage = `url(${src})` ; 
        mydiv.setAttribute('class' , 'icon') ; 
        mydiv.style.marginTop = "10px" ; 
        featureList.appendChild(mydiv);
    }
}
addfeatures() ;
//styling features
function animatefeatures(){
    // console.log(ftArray);
    // console.log(ftArray[(currentfeature-1)%9]) ;
    // console.log((currentfeature-1)%9) ; 
    ftArray[(currentfeature+ 9 -1)%9].style.backgroundColor = 'white' ; 
    ftArray[currentfeature].style.backgroundColor = "orange" ; 
    currentfeature++ ; 
    currentfeature %= 9 ;
    setTimeout(animatefeatures ,900) ; 
}
animatefeatures() ; 

//mob-view 
const mobFeatures = document.querySelector('.mob-view-features') ; 
for(let i = 0; i< 9 ; ++i){
    let outer = document.createElement('div') ;
    let mydiv = document.createElement('div') ;
    let footer = document.createElement('div') ;
    let src = "https://drive.google.com/uc?export=view&id=" + sources[i]  ;  
    mydiv.style.backgroundImage = `url(${src})` ; 
    mydiv.setAttribute('class' , 'icon') ; 
    footer.textContent = words[i][0] + words[i].substr(1).toLowerCase() ; 
    footer.setAttribute('class' , 'tag')
    
    outer.setAttribute('class' , 'features-element') ; 
    outer.style.border = "none" ;
    outer.appendChild(mydiv) ;  
    outer.appendChild(footer) ; 
    mobFeatures.appendChild(outer) ; 
    
}



