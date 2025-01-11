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
        return e.target.innerText;
    }
}