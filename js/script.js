document.querySelector('#playNowBtn').addEventListener("click",()=>{
    hideElementById('#homePage');
    showElementById('#menuPage');
    const getAlphabet=play();
    setValue('#highlighted-alphabet',getAlphabet);
})

document.querySelector('#keyboard').addEventListener("click",(e)=>{
    const typedWord=choosenWord(e);
    const getAlphabet=getValue('#highlighted-alphabet');
    let currentValue=getValue('#totalScore');
    let convertedValue=parseInt(currentValue);
    let lifeLine=getValue('#lifeLine');
    let convertedLifeLine=parseInt(lifeLine);
    if(convertedLifeLine!==0){
        if(typedWord!==undefined){
            if (getAlphabet===typedWord.toUpperCase()){
                convertedValue++;
                setValue('#totalScore',convertedValue);
                if(convertedValue===5){
                    setValue('#totalScore',convertedValue);
                    setTimeout(()=>{
                        showElementById('#scorePage');
                        hideElementById('#menuPage');
                    },200)
                    setValue('#finalScore',convertedValue);
                    return 'winner';
                }
                const getAlphabet=play();
                setValue('#highlighted-alphabet',getAlphabet)
            }
            else{
                convertedLifeLine--;
                setValue('#lifeLine',convertedLifeLine);
                setValue('#finalScore',convertedValue);
            }
        }
        }
    
    if (convertedLifeLine===0){
        hideElementById('#menuPage');
        showElementById('#scorePage');
    }
})

document.querySelector('#playAgainBtn').addEventListener("click",()=>{
    showElementById('#menuPage');
    hideElementById('#scorePage');
    setValue('#totalScore',0);
    setValue('#finalScore',0);
    setValue('#lifeLine',2);
    const getAlphabet=play();
    setValue('#highlighted-alphabet',getAlphabet)
})