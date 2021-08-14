// assigning lightblue color on h3
const productTitle = document.getElementsByClassName('product-title');
for (const title of productTitle) {
    title.style.color = 'lightblue';
}
// assigning backgroundColor to backpack section 
document.getElementById('backpack').style.backgroundColor = 'tomato';
// assigning borderRadius to card class 
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
// click handler on the logo image 
document.getElementById('logo').addEventListener('click', function () {
    console.log('logo clicked');
});
// remove buy now button when clicked
const buyButtons = document.getElementsByClassName('buy-now');
for (const btn of buyButtons) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
// disable subscribe button until email is written as input 
document.getElementById('email-field').addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('subscribe-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('subscribe-button').setAttribute('disabled', true);
    }
})
// change a photo upon mouse overing it 
document.getElementById('magic-image').addEventListener('mouseover', function () {
    document.getElementById('magic-image').src = 'images/shoes/changed.jpg';
});
// change it back to normal on mouseout 
document.getElementById('magic-image').addEventListener('mouseout', function () {
    document.getElementById('magic-image').src = 'images/shoes/shoe-1.png';
});
// change backgroundColor of subscribe section upon double clicking it 
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'lightgray';
});