let inputNumber;
while (true) 
{
    inputNumber = prompt("Enter a number:");
    if (!isNaN(inputNumber) && inputNumber.trim() !== "") 
    {
        inputNumber = parseInt(inputNumber);
        break;
    }
}

const resultContainer = document.getElementById("resultContainer");
let shapeOutput = `<h2>Number inputted: ${inputNumber}</h2>`;

if (inputNumber % 2 !== 0) 
{
    for (let row = inputNumber; row >= 1; row--) 
    {
        for (let col = 1; col <= inputNumber; col++) 
        {
            shapeOutput += row + " ";
        }
        shapeOutput += "<br>";
    }
} 
else 
{
    for (let row = inputNumber; row >= 1; row--) 
    {
        for (let col = 1; col <= row; col++) 
        {
            shapeOutput += row + " ";
        }
        shapeOutput += "<br>";
    }
}

resultContainer.innerHTML = shapeOutput;

let contactList = [];

function updateContacts() 
{
    document.getElementById("contactsOutput").innerHTML = contactList.join(" ");
}

function addContact() 
{
    const inputField = document.getElementById("contactInput");
    const contactName = inputField.value.trim();
    if (contactName === "") 
    {
        return;
    }
    else if (contactList.length === 7) 
    {
        contactList.shift();
    }

    contactList.push(contactName);
    inputField.value = "";
    updateContacts();
}

function removeContact() 
{
    contactList.pop();
    updateContacts();
}

updateContacts();
