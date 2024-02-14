const noButton = document.querySelector('.noButton');
const container = document.querySelector('.container');
const yesButton = document.querySelector('.yesButton');
const text = document.querySelector('.text');
const heart = document.querySelector('.heart');

const conatinerRec = container.getBoundingClientRect();
const noButtonRec = noButton.getBoundingClientRect();

noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * 
    (conatinerRec.width - noButtonRec.width));
    const y = Math.floor(Math.random() * 
    (conatinerRec.height - noButtonRec.height));

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

});

yesButton.addEventListener('click', () => {
    text.innerHTML = "See you Saturday!";
    // container.
  
});

container.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.classList.contains('yesButton')){
        text.innerHTML = "See you Saturday!";
        let heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);

        e.target.parentElement.remove();
    }
 


});

noButton.addEventListener('click', () => {
    text.innerHTML = "Ok...."
    let cat = document.createElement('img'); 
    cat.src = "cryingcat.jpg";
    cat.classList.add('cat');
    document.body.appendChild(cat);
    // container.
  
}   );