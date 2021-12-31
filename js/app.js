const bill = document.getElementById('dollar')
const tipButons = document.querySelectorAll('.submit')
const tipCustom = document.getElementById('custom')
const people = document.getElementById('number')
const msg = document.querySelector('.error')
const amount = document.getElementById('tipamount')
const other = document.getElementById('totalamount')
const resetBtn = document.getElementById('button')


tipButons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

function handleClick(event) {

   let billValue = bill.value;

    let tipButton = event.target;  
    let tipButtonValue = tipButton.value;  
    let tipButtonValueInteger = parseInt(tipButtonValue);

    let billValueInteger = parseInt(billValue);

    if (billValueInteger <= 0) {
        msg.classList.add('error');
        msg.innerHTML = "Bill can't be zero";
        return;
    }

    let tipAmount = (billValueInteger * tipButtonValueInteger) / 100 .toFixed(2);

    let totalAmount = (billValueInteger + tipAmount).toFixed(2);


    let totalPersons = people.value;
    let totalPersonInteger = parseInt(totalPersons);

    if (totalPersonInteger <= 0) {
        msg.classList.add('error');
        msg.innerHTML = "Number can't be zero";
        return; 
    }

    let totalTip = (tipAmount/ totalPersonInteger).toFixed(0);

    let totalBill = (totalAmount / totalPersonInteger).toFixed(0);

    if (totalBill <= 0) {
        return;
    }
    if (totalTip <= 0) {
        return;
    }

    tipamount.innerHTML = ("$" + totalTip);
    totalamount.innerHTML = ("$" + totalBill);
}

custom.addEventListener('keyup', performCustom);

function performCustom(event) {
    let billValue = bill.value;

    let customButtonValue = custom.value;
    let customButtonValueInteger = parseInt(customButtonValue);
    let billValueInteger = parseInt(billValue);

    let customAmount = (billValueInteger * customButtonValueInteger) / 100 .toFixed(2);

    let totalPersons = people.value;
    let totalPersonInteger = parseInt(totalPersons);

    let totalCustom = (customAmount/ totalPersonInteger).toFixed(2);

    let totalCustomBill = (totalCustom / totalPersonInteger).toFixed(2);

    tipamount.innerHTML = ("$" + totalCustom);
    totalamount.innerHTML = ("$" + totalCustomBill);

}

button.addEventListener('click', handleReset);

function handleReset(e) {
    bill.value = 0
    people.value = 0
    custom.value = 0
    let totalTip = 0.00
    let totalBill = 0.00
    tipamount.innerHTML = ("$" + totalTip);
    totalamount.innerHTML = ("$" + totalBill);  
}










