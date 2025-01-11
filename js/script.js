document.querySelector('#playNowBtn').addEventListener("click",()=>{
    hideElementById('#homePage');
    showElementById('#menuPage');
    const getAlphabet=play();
    setValue('#highlighted-alphabet',getAlphabet);
    setBg(getAlphabet.toLowerCase());
})
document.addEventListener('keyup',(e)=>{
    // if(e.key=='Escape'){
    //     const getVal=getValue('#highlighted-alphabet');
    //     removeBg(getVal.toLowerCase())
    //     showElementById('#homePage');
    //     hideElementById('#menuPage');
    // }
    if(e.key==='Escape'){
        showElementById('#scorePage');
        hideElementById('#menuPage');
    }
    else if('abcdefghijklmnopqrstuvwxyz'.includes(e.key)){
        mainGame(e.key);
    }
    else{
        showElementById('#alert-section');
        setTimeout(()=>{
            hideElementById('#alert-section');
        },1000)
    }
    // mainGame(e.key);
})
document.querySelector('#keyboard').addEventListener("click",(e)=>{
    const typedWord=choosenWord(e);
    mainGame(typedWord);
})

document.querySelector('#playAgainBtn').addEventListener("click",()=>{
    showElementById('#menuPage');
    hideElementById('#scorePage');
    setValue('#totalScore',0);
    setValue('#finalScore',0);
    setValue('#lifeLine',2);
    const getVal=getValue('#highlighted-alphabet');
    removeBg(getVal.toLowerCase());
    const getAlphabet=play();
    setValue('#highlighted-alphabet',getAlphabet)
    setBg(getAlphabet.toLowerCase());
})

document.querySelector('#keyboard').addEventListener("mouseover",(e)=>{
    if(e.target.closest('.kbd')){
        e.target.classList.add('bg-purple-500','text-white');
    }
})
document.querySelector('#keyboard').addEventListener("mouseout",(e)=>{
    if(e.target.closest('.kbd')){
        e.target.classList.remove('bg-purple-500','text-white');
    }
})

document.addEventListener('keyup',(e)=>{
    console.log(e.key)
})