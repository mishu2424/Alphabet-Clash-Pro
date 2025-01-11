function hideElementById(elementId){
    document.querySelector(elementId).classList.add('hidden');
}

function showElementById(elementId){
    document.querySelector(elementId).classList.remove('hidden')
}

function setValue(id,val){
    document.querySelector(id).innerText=val;
}

function getValue(id){
    return document.querySelector(id).innerText;
}
function play(){
    const alphas='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphas.split('');
    const randomNumber=Math.round(Math.random()*25);
    return alphabets[randomNumber].toUpperCase();
}

function choosenWord(e){
    if(e.target.closest('.kbd')){
        e.target.classList.add('bg-amber-500');
        setTimeout(()=>{
            e.target.classList.remove('bg-amber-500');
        },400)
        return e.target.innerText;
    }
}
function setBg(elementId){
    document.getElementById(elementId).classList.add('bg-amber-600');
    console.log(document.getElementById(elementId).classList)
}
function removeBg(elementId){
    console.log(elementId)
    console.log(document.getElementById(elementId).classList)
    document.getElementById(elementId).classList.remove('bg-amber-600');
    console.log(document.getElementById(elementId).classList)
}

function mainGame(typedWord){
    const getSelectedAlphabet=getValue('#highlighted-alphabet');
    let currentValue=getValue('#totalScore');
    let convertedValue=parseInt(currentValue);
    let lifeLine=getValue('#lifeLine');
    let convertedLifeLine=parseInt(lifeLine);
    if(convertedLifeLine!==0){
        if(typedWord!==undefined){
            if (getSelectedAlphabet.toLowerCase()===typedWord){
                removeBg(typedWord);
                convertedValue++;
                setValue('#totalScore',convertedValue);
                if(convertedValue===5){
                    setValue('#totalScore',convertedValue);
                    setTimeout(()=>{
                        showElementById('#scorePage');
                        hideElementById('#menuPage');
                    },200)
                    document.getElementById('comment').innerText="Great Game!"
                    // return 'winner';
                }
                if(convertedValue<5){
                    const getAlphabet=play();
                    setValue('#highlighted-alphabet',getAlphabet);
                    setBg(getAlphabet.toLowerCase());
                }
                setValue('#finalScore',convertedValue);
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
        document.getElementById('comment').innerText="Practice will make you Pro!"
    }
}