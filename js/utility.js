function hideElementById(elementId){
    document.querySelector(elementId).classList.add('hidden');
}

function showElementById(elementId){
    document.querySelector(elementId).classList.remove('hidden')
}