// grab references to elements in the DOM
const btnAdd = document.getElementById('btnAdd');
const inpItem = document.getElementById('inpItem');
const lstCart = document.getElementById('lstCart');
const msgAdd = document.getElementById('msgAdd');

const saleItems = [
    { name: "Phone", price: 300 },
    { name: "Smart TV", price: 220 },
    { name: "Gaming Console", price: 150 }
];

let cart = [];

btnAdd.addEventListener('click', function(event) {

    //console.log(event);
    let inputItem = inpItem.value;

    let foundItem = saleItems.find( (r) => {
        // trim() to remove leading and/or trailing spaces
        // replace() to remove spaces
        return r.name.toUpperCase().trim().replace(' ','') === inputItem.toUpperCase().trim().replace(' ','');
    });

    if( foundItem ) {
        msgAdd.className = 'hidden';
        addItem( foundItem );
    } else {
        msgAdd.className = 'shown';
    }

    inpItem.value = '';

    
});




function addItem(item) {
    console.log(`in addItem function - you passed in ${item.name}`);

    let li = document.createElement('li');
    li.textContent = `${item.name} @ ${item.price}`;
    lstCart.appendChild(li);

}
