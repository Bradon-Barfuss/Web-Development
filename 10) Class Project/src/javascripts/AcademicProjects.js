
let generate = document.getElementById('coolButton');
generate.addEventListener('click', () => {
    let min = document.getElementById('minNumber').value;
    let max = document.getElementById('maxNumber').value;
    let random_num= Math.floor(Math.random() * (max-min) + + min);
    document.getElementById('output').innerHTML = `<div class="black-text"> =  ${random_num}</div>`;
    passNumbers[i]=random_num
    i++;
    myCreateFunction();
})   


let passNumbers = [];
let i = 0;

function myCreateFunction() {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("CoolTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "<b>#</b>" + i;
    cell2.innerHTML = passNumbers[i-1];
}

