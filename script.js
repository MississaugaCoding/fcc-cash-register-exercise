// grab references to elements in the DOM
const btnAdd = document.getElementById('btnAdd');
const inpItem = document.getElementById('inpItem');
const lstCart = document.getElementById('lstCart');
const msgAdd = document.getElementById('msgAdd');
const btnCheckOut = document.getElementById('btnCheckOut');
const divCheckOut = document.getElementById('divCheckOut');
const inpPayAmt = document.getElementById('inpPayAmt');
const msgPay = document.getElementById('msgPay');

const btnPay = document.getElementById('btnPay');
const divPayment = document.getElementById('divPayment');

const saleItems = [
    { name: "Phone", price: 300 },
    { name: "Smart TV", price: 220 },
    { name: "Gaming Console", price: 150 }
];

let cart = [];
let amountDue = 0;

btnCheckOut.addEventListener('click', calculateTotalPrice);

btnPay.addEventListener('click', payHandler);

btnAdd.addEventListener('click', function (event) {

    //console.log(event);
    let inputItem = inpItem.value;

    let foundItem = saleItems.find((r) => {
        // trim() to remove leading and/or trailing spaces
        // replace() to remove spaces
        return r.name.toUpperCase().trim().replaceAll(' ', '') === inputItem.toUpperCase().trim().replaceAll(' ', '');
    });

    if (foundItem) {
        msgAdd.className = 'hidden';
        addItem(foundItem);
    } else {
        msgAdd.className = 'shown';
    }

    inpItem.value = '';

});

function payHandler() {
    inpItem.disabled = "disabled";
    let payAmt = inpPayAmt.value;
    pay(payAmt);
}

 function pay(payAmt) {    
    msgPay.textContent = '';

    if( payAmt >= amountDue ) {
        msgPay.textContent = `Thank you! Here is your change of ${payAmt - amountDue}`;
    } else {
        msgPay.textContent = `Pay amount of ${payAmt} is not enough`;
    }    

 }


function calculateTotalPrice() {
    let cartTotal = 0;

    /*
        for(let i=0; i<cart.length; i++) {
            cartTotal += cart[i].price;
        }
    */

    cart.forEach((item) => {
        cartTotal += item.price;
    });

    //console.log(`cart total = ${cartTotal}`);

    let discount = 0;

    if(cartTotal>400) {
        discount = cartTotal * 0.1;
    }

    amountDue = cartTotal - discount;

    let p = document.createElement('p');
    p.textContent = `Cart Total: ${cartTotal}`;
    divCheckOut.appendChild(p);
    p = document.createElement('p');
    p.textContent = `Discount: ${discount}`;
    divCheckOut.appendChild(p);
    p = document.createElement('p');
    p.textContent = `Amount Due: ${amountDue}`;
    divCheckOut.appendChild(p);

    if( cartTotal > 0) {
        divPayment.className = 'shown';
    }
    

}  // function calculateTotalPrice

function addItem(item) {
    //console.log(`in addItem function - you passed in ${item.name}`);

    // display    
    let li = document.createElement('li');
    li.textContent = `${item.name} @ ${item.price}`;
    lstCart.appendChild(li);

    // add item to the cart
    cart.push(item);

    //console.table(cart);

}
