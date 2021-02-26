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

for(let i = 0 ; i < num ; ++i){
    let outer = document.createElement('div') ;
    let mydiv = document.createElement('div') ;
    let footer = document.createElement('strong') ;
    let src = 'images/' + words[i].toLowerCase() + '.png' ;  
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
        let src = 'images/' + words[i].toLowerCase() + '.png' ;  
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
    let src = 'images/' + words[i].toLowerCase() + '.png' ;  
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



